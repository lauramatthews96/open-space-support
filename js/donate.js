(function () {
  var form = document.getElementById("donate-form");
  if (!form) return;

  var submitBtn = document.getElementById("donate-submit");
  var ownBtn = document.getElementById("donate-own");
  var status = document.getElementById("donate-status");
  var config = window.DONATE_CONFIG || {};

  function selectedAmount() {
    var amount = form.querySelector('input[name="amount"]:checked');
    return amount ? amount.value : "";
  }

  function isMonthly() {
    var frequency = form.querySelector('input[name="frequency"]:checked');
    return frequency && frequency.value === "monthly";
  }

  function openCheckout(url) {
    if (!url) {
      status.hidden = false;
      status.textContent = "The secure payment page is not connected yet.";
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function updateLabel() {
    var pounds = selectedAmount();
    var monthly = isMonthly();
    if (!pounds) {
      submitBtn.textContent = "Donate";
      return;
    }
    submitBtn.textContent = monthly ? "Donate £" + pounds + " monthly" : "Donate £" + pounds;
  }

  form.addEventListener("change", updateLabel);

  ownBtn.addEventListener("click", function () {
    openCheckout(isMonthly() ? config.customMonthly : config.customOnce);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var pounds = selectedAmount();
    if (!pounds) {
      status.hidden = false;
      status.textContent = "Choose an amount to donate.";
      return;
    }
    openCheckout(isMonthly() ? config.monthly : config.once);
  });

  updateLabel();
})();
