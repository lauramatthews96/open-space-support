(function () {
  "use strict";

  var STORAGE_KEY = "oss_apply_draft_v1";
  var TOTAL_STEPS = 4;
  var DEBUG_STEPS = true;

  var form = document.getElementById("apply-form");
  if (!form) return;

  var layout = document.getElementById("apply-layout");
  var confirmation = document.getElementById("apply-confirmation");
  var intro = document.getElementById("apply-intro");
  var messageEl = document.getElementById("apply-form-message");
  var savedNote = document.getElementById("apply-saved-note");
  var backBtn = document.getElementById("apply-back");
  var nextBtn = document.getElementById("apply-next");
  var submitBtn = document.getElementById("apply-submit");
  var saveExitBtn = document.getElementById("apply-save-exit");
  var needsOtherToggle = document.getElementById("needs-other-toggle");
  var needsOtherWrap = document.getElementById("needs-other-wrap");
  var progressBar = document.querySelector(".apply-progress");
  var segments = document.querySelectorAll(".apply-progress-segment");
  var steps = form.querySelectorAll(".apply-step");

  var currentStep = 1;
  var saveTimer = null;
  var supabaseClient = null;

  if (!backBtn || !nextBtn || !submitBtn || !messageEl) {
    console.error("[apply] Missing required controls:", {
      backBtn: Boolean(backBtn),
      nextBtn: Boolean(nextBtn),
      submitBtn: Boolean(submitBtn),
      messageEl: Boolean(messageEl),
    });
    return;
  }

  if (messageEl.getAttribute("tabindex") === null) {
    messageEl.setAttribute("tabindex", "-1");
  }

  function logStepChange(label) {
    if (!DEBUG_STEPS) return;
    console.log("[apply] " + label + " -> currentStep =", currentStep);
  }

  function getField(name) {
    return form.elements.namedItem(name);
  }

  function fieldValue(name) {
    var el = getField(name);
    if (!el || typeof el.value !== "string") return "";
    return el.value.trim();
  }

  function getConfig() {
    return window.SUPABASE_CONFIG || {};
  }

  function initSupabase() {
    var config = getConfig();
    if (
      !config.url ||
      !config.anonKey ||
      config.url === "YOUR_SUPABASE_URL" ||
      config.anonKey === "YOUR_SUPABASE_ANON_KEY"
    ) {
      return null;
    }
    if (typeof window.supabase === "undefined") return null;
    return window.supabase.createClient(config.url, config.anonKey);
  }

  function readFormData() {
    var needs = [];
    form.querySelectorAll('input[name="needs"]:checked').forEach(function (cb) {
      needs.push(cb.value);
    });

    var consentField = getField("consent");

    return {
      full_name: fieldValue("full_name"),
      email: fieldValue("email"),
      phone: fieldValue("phone"),
      contact_preferences: fieldValue("contact_preferences"),
      needs: needs,
      needs_other: fieldValue("needs_other"),
      current_situation: fieldValue("current_situation"),
      support_requested: fieldValue("support_requested"),
      goals: fieldValue("goals"),
      consent: consentField ? consentField.checked : false,
      currentStep: currentStep,
    };
  }

  function writeFormData(data) {
    if (!data) return;

    var fullName = getField("full_name");
    var email = getField("email");
    var phone = getField("phone");
    var contactPreferences = getField("contact_preferences");
    var currentSituation = getField("current_situation");
    var supportRequested = getField("support_requested");
    var goals = getField("goals");
    var consent = getField("consent");
    var needsOther = getField("needs_other");

    if (fullName && data.full_name !== undefined) fullName.value = data.full_name;
    if (email && data.email !== undefined) email.value = data.email;
    if (phone && data.phone !== undefined) phone.value = data.phone;
    if (contactPreferences && data.contact_preferences !== undefined) {
      contactPreferences.value = data.contact_preferences;
    }
    if (currentSituation && data.current_situation !== undefined) {
      currentSituation.value = data.current_situation;
    }
    if (supportRequested && data.support_requested !== undefined) {
      supportRequested.value = data.support_requested;
    }
    if (goals && data.goals !== undefined) goals.value = data.goals;
    if (needsOther && data.needs_other !== undefined) needsOther.value = data.needs_other;
    if (consent && data.consent !== undefined) consent.checked = data.consent;

    form.querySelectorAll('input[name="needs"]').forEach(function (cb) {
      cb.checked = Array.isArray(data.needs) && data.needs.indexOf(cb.value) !== -1;
    });

    syncNeedsOtherVisibility();

    if (data.currentStep && data.currentStep >= 1 && data.currentStep <= TOTAL_STEPS) {
      currentStep = data.currentStep;
    }
  }

  function saveDraft() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readFormData()));
      if (savedNote) {
        savedNote.textContent = "Your progress is saved.";
      }
    } catch (err) {
      /* localStorage unavailable - fail silently */
    }
  }

  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveDraft, 400);
  }

  function loadDraft() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        writeFormData(JSON.parse(raw));
      }
    } catch (err) {
      /* ignore corrupt draft */
    }
  }

  function clearDraft() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      /* ignore */
    }
  }

  function hideMessage() {
    messageEl.hidden = true;
    messageEl.textContent = "";
  }

  function showMessage(text) {
    messageEl.textContent = text;
    messageEl.hidden = false;
    try {
      messageEl.focus({ preventScroll: true });
    } catch (err) {
      /* non-focusable in older browsers - message still visible */
    }
  }

  function validateStep(step) {
    hideMessage();

    if (step === 1) {
      var fullName = getField("full_name");
      var email = getField("email");

      if (!fieldValue("full_name")) {
        showMessage("Please add your name so we know how to address you.");
        if (fullName) {
          fullName.classList.add("is-noted");
          fullName.focus();
        }
        return false;
      }
      if (fullName) fullName.classList.remove("is-noted");

      if (!fieldValue("email")) {
        showMessage("Please add an email address so we can reach you.");
        if (email) {
          email.classList.add("is-noted");
          email.focus();
        }
        return false;
      }
      if (email) email.classList.remove("is-noted");

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(fieldValue("email"))) {
        showMessage("That email address doesn't look quite right - could you check it?");
        if (email) {
          email.classList.add("is-noted");
          email.focus();
        }
        return false;
      }
    }

    if (step === 4) {
      var consent = getField("consent");
      if (!consent || !consent.checked) {
        showMessage(
          "When you're ready, please tick the box to confirm you understand how we'll use your information."
        );
        if (consent) consent.focus();
        return false;
      }
    }

    return true;
  }

  function updateProgressUI() {
    segments.forEach(function (seg, index) {
      var stepNum = index + 1;
      seg.classList.toggle("is-active", stepNum === currentStep);
      seg.classList.toggle("is-complete", stepNum < currentStep);
    });

    if (progressBar) {
      progressBar.setAttribute("aria-valuenow", String(currentStep));
    }

    steps.forEach(function (stepEl) {
      var stepNum = Number(stepEl.getAttribute("data-step"));
      var isActive = stepNum === currentStep;
      stepEl.hidden = !isActive;
      stepEl.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    if (intro) {
      intro.classList.toggle("is-collapsed", currentStep > 1);
    }

    var isFinalStep = currentStep === TOTAL_STEPS;

    backBtn.hidden = currentStep === 1;
    nextBtn.hidden = isFinalStep;
    submitBtn.hidden = !isFinalStep;

    form.classList.toggle("apply-form--final-step", isFinalStep);

    form.setAttribute("data-current-step", String(currentStep));
    logStepChange("updateProgressUI");
  }

  function goToStep(step) {
    if (step < 1 || step > TOTAL_STEPS) return;

    currentStep = step;
    updateProgressUI();
    saveDraft();
    hideMessage();

    var activeStep = steps[currentStep - 1];
    if (!activeStep) return;

    var focusTarget = activeStep.querySelector(
      "input:not([type='checkbox']), textarea"
    );
    if (focusTarget) {
      focusTarget.focus({ preventScroll: true });
    }
  }

  function handleNext() {
    logStepChange("handleNext (before validate)");

    if (!validateStep(currentStep)) {
      logStepChange("handleNext blocked by validation");
      return;
    }

    if (currentStep < TOTAL_STEPS) {
      goToStep(currentStep + 1);
      logStepChange("handleNext advanced");
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
      logStepChange("handleBack");
    }
  }

  function syncNeedsOtherVisibility() {
    if (!needsOtherToggle || !needsOtherWrap) return;

    var isOtherSelected = needsOtherToggle.checked;
    needsOtherWrap.hidden = !isOtherSelected;

    if (!isOtherSelected) {
      var needsOther = getField("needs_other");
      if (needsOther) needsOther.value = "";
    }
  }

  function handleSaveExit() {
    saveDraft();
    window.location.href = "index.html";
  }

  function showConfirmation() {
    layout.hidden = true;
    confirmation.hidden = false;
    clearDraft();
    logStepChange("showConfirmation");
    confirmation.querySelector("h1").focus({ preventScroll: true });
  }

  function buildPayload() {
    var data = readFormData();
    var now = new Date().toISOString();

    return {
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || null,
      contact_preferences: data.contact_preferences || null,
      needs: data.needs,
      needs_other: data.needs_other || null,
      current_situation: data.current_situation || null,
      support_requested: data.support_requested || null,
      goals: data.goals || null,
      consent_given: true,
      consent_timestamp: now,
      submitted_at: now,
    };
  }

  function handleFieldEnter(event) {
    if (event.key !== "Enter") return;

    var target = event.target;
    if (!target || !form.contains(target)) return;

    /* Keep normal behaviour in textareas (new line) and on checkboxes */
    if (target.tagName === "TEXTAREA" || target.type === "checkbox") return;

    if (currentStep < TOTAL_STEPS) {
      event.preventDefault();
      handleNext();
    }
  }

  function encodeNetlifyBody() {
    var data = readFormData();
    var params = new URLSearchParams();
    params.set("form-name", "apply");
    params.set("bot-field", "");
    params.set("full_name", data.full_name);
    params.set("email", data.email);
    params.set("phone", data.phone || "");
    params.set("contact_preferences", data.contact_preferences || "");
    params.set("needs", (data.needs || []).join(", "));
    params.set("needs_other", data.needs_other || "");
    params.set("current_situation", data.current_situation || "");
    params.set("support_requested", data.support_requested || "");
    params.set("goals", data.goals || "");
    params.set("consent", "yes");
    return params.toString();
  }

  function submitToNetlify() {
    return fetch("/apply.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeNetlifyBody(),
    }).then(function (res) {
      if (!res.ok) throw new Error("netlify");
    });
  }

  function submitToSupabase() {
    supabaseClient = supabaseClient || initSupabase();
    if (!supabaseClient) return Promise.resolve();
    return supabaseClient
      .from("support_applications")
      .insert([buildPayload()])
      .then(function (result) {
        if (result.error) throw result.error;
      });
  }

  function handleSubmit(event) {
    if (event) event.preventDefault();

    logStepChange("handleSubmit (before validate)");

    if (currentStep !== TOTAL_STEPS) {
      return;
    }

    if (!validateStep(4)) {
      logStepChange("handleSubmit blocked by validation");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    hideMessage();

    submitToNetlify()
      .then(function () {
        return submitToSupabase().catch(function () {
          /* Application already emailed via Netlify */
        });
      })
      .then(showConfirmation)
      .catch(function () {
        showMessage(
          "Something went wrong sending your application. Your answers are still saved here - please try again in a moment."
        );
        submitBtn.disabled = false;
        submitBtn.textContent = "Send my application";
      });
  }

  form.addEventListener("input", scheduleSave);
  form.addEventListener("change", scheduleSave);

  nextBtn.addEventListener("click", handleNext);
  backBtn.addEventListener("click", handleBack);
  submitBtn.addEventListener("click", handleSubmit);
  if (saveExitBtn) {
    saveExitBtn.addEventListener("click", handleSaveExit);
  }
  if (needsOtherToggle) {
    needsOtherToggle.addEventListener("change", syncNeedsOtherVisibility);
  }
  form.addEventListener("keydown", handleFieldEnter);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  form.querySelectorAll("input, textarea").forEach(function (el) {
    el.addEventListener("input", function () {
      el.classList.remove("is-noted");
    });
  });

  loadDraft();
  updateProgressUI();
  supabaseClient = initSupabase();
  logStepChange("init");
})();
