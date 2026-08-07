-- Support Application Portal schema
-- Run in Supabase SQL Editor. Requires Row Level Security for GDPR compliance.

create table if not exists public.support_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  submitted_at timestamptz not null default now(),

  -- Step 1: Personal information
  full_name text not null,
  email text not null,
  phone text,
  contact_preferences text,

  -- Step 2: Needs assessment (multi-select)
  needs text[] not null default '{}',
  needs_other text,

  -- Step 3: Narrative
  current_situation text,
  support_requested text,
  goals text,

  -- Step 4: Consent (UK GDPR special-category data)
  consent_given boolean not null default false,
  consent_timestamp timestamptz not null
);

comment on table public.support_applications is
  'Confidential support applications. Not linked to marketing lists. Admin read only.';

alter table public.support_applications enable row level security;

-- Anonymous users may insert only when consent is explicitly given
create policy "anon_insert_with_consent"
  on public.support_applications
  for insert
  to anon
  with check (consent_given = true and consent_timestamp is not null);

-- No public read access
create policy "anon_no_select"
  on public.support_applications
  for select
  to anon
  using (false);

create policy "anon_no_update"
  on public.support_applications
  for update
  to anon
  using (false);

create policy "anon_no_delete"
  on public.support_applications
  for delete
  to anon
  using (false);

-- Authenticated admin role (set app_metadata.role = 'admin' on service users)
create policy "admin_select"
  on public.support_applications
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "admin_update"
  on public.support_applications
  for update
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "admin_delete"
  on public.support_applications
  for delete
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Index for admin dashboard queries
create index if not exists support_applications_created_at_idx
  on public.support_applications (created_at desc);

create index if not exists support_applications_email_idx
  on public.support_applications (email);
