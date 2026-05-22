-- AI Concierge analytics and reporting spine.
-- Shared-schema multi-tenant model. Application writes should go through
-- server-side routes using the service role key. Customer/admin reads are
-- tenant-scoped through tenant_memberships policies.

create extension if not exists pgcrypto;

create table if not exists public.tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  plan text not null default 'concierge',
  raw_retention_days integer not null default 90,
  redacted_retention_months integer not null default 24,
  aggregate_retention_policy text not null default 'indefinite',
  data_region text not null default 'us',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tenant_memberships (
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'admin', 'analyst')),
  created_at timestamptz not null default now(),
  primary key (tenant_id, user_id)
);

create table if not exists public.sites (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  domain text not null,
  brand_name text not null,
  status text not null default 'active' check (status in ('active', 'paused', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, domain)
);

create table if not exists public.concierge_surfaces (
  id text not null,
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  page_type text not null,
  label text not null,
  prompt_set jsonb not null default '[]'::jsonb,
  status text not null default 'active' check (status in ('active', 'paused', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (tenant_id, site_id, id)
);

create table if not exists public.visitor_sessions (
  id uuid primary key,
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  visitor_id uuid not null,
  landing_page text,
  referrer text,
  device_type text,
  user_agent text,
  started_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key,
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  visitor_id uuid not null,
  session_id uuid not null references public.visitor_sessions(id) on delete cascade,
  entry_surface_id text,
  entry_page_type text,
  started_at timestamptz not null default now(),
  last_message_at timestamptz,
  resolved_flag boolean,
  outcome text,
  metadata jsonb not null default '{}'::jsonb
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  session_id uuid not null references public.visitor_sessions(id) on delete cascade,
  surface_id text,
  page_type text,
  role text not null check (role in ('user', 'assistant', 'system')),
  raw_text text,
  redacted_text text,
  summary_text text,
  pii_detected boolean not null default false,
  source_refs jsonb not null default '[]'::jsonb,
  raw_expires_at timestamptz,
  redacted_expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  visitor_id uuid,
  session_id uuid,
  conversation_id uuid,
  surface_id text,
  page_type text,
  event_name text not null,
  properties jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

create table if not exists public.intent_clusters (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  month date not null,
  cluster_name text not null,
  intent_category text not null,
  volume integer not null default 0,
  unresolved_count integer not null default 0,
  sample_queries jsonb not null default '[]'::jsonb,
  recommended_action text,
  action_tag text check (action_tag in ('quick_fix', 'content_update', 'menu_ops_insight', 'paid_improvement_opportunity')),
  status text not null default 'new' check (status in ('new', 'reviewed', 'accepted', 'dismissed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.monthly_report_snapshots (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  month date not null,
  metrics jsonb not null default '{}'::jsonb,
  recommendations jsonb not null default '[]'::jsonb,
  transcript_samples jsonb not null default '[]'::jsonb,
  memo_markdown text,
  status text not null default 'draft' check (status in ('draft', 'reviewed', 'sent')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, site_id, month)
);

create index if not exists idx_sites_tenant on public.sites (tenant_id);
create index if not exists idx_surfaces_site on public.concierge_surfaces (tenant_id, site_id);
create index if not exists idx_sessions_tenant_site_started on public.visitor_sessions (tenant_id, site_id, started_at desc);
create index if not exists idx_conversations_tenant_site_started on public.conversations (tenant_id, site_id, started_at desc);
create index if not exists idx_messages_conversation_created on public.messages (conversation_id, created_at);
create index if not exists idx_messages_retention on public.messages (raw_expires_at, redacted_expires_at);
create index if not exists idx_events_tenant_site_event_time on public.events (tenant_id, site_id, event_name, occurred_at desc);
create index if not exists idx_reports_tenant_site_month on public.monthly_report_snapshots (tenant_id, site_id, month desc);

alter table public.tenants enable row level security;
alter table public.tenant_memberships enable row level security;
alter table public.sites enable row level security;
alter table public.concierge_surfaces enable row level security;
alter table public.visitor_sessions enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.events enable row level security;
alter table public.intent_clusters enable row level security;
alter table public.monthly_report_snapshots enable row level security;

create or replace function public.current_user_tenant_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select tm.tenant_id
  from public.tenant_memberships tm
  where tm.user_id = auth.uid()
$$;

drop policy if exists tenant_memberships_read_self on public.tenant_memberships;
create policy tenant_memberships_read_self
on public.tenant_memberships
for select
using (user_id = auth.uid());

drop policy if exists tenants_member_read on public.tenants;
create policy tenants_member_read
on public.tenants
for select
using (id in (select public.current_user_tenant_ids()));

drop policy if exists sites_member_read on public.sites;
create policy sites_member_read
on public.sites
for select
using (tenant_id in (select public.current_user_tenant_ids()));

drop policy if exists concierge_surfaces_member_read on public.concierge_surfaces;
create policy concierge_surfaces_member_read
on public.concierge_surfaces
for select
using (tenant_id in (select public.current_user_tenant_ids()));

drop policy if exists visitor_sessions_member_read on public.visitor_sessions;
create policy visitor_sessions_member_read
on public.visitor_sessions
for select
using (tenant_id in (select public.current_user_tenant_ids()));

drop policy if exists conversations_member_read on public.conversations;
create policy conversations_member_read
on public.conversations
for select
using (tenant_id in (select public.current_user_tenant_ids()));

drop policy if exists messages_member_read on public.messages;
create policy messages_member_read
on public.messages
for select
using (tenant_id in (select public.current_user_tenant_ids()));

drop policy if exists events_member_read on public.events;
create policy events_member_read
on public.events
for select
using (tenant_id in (select public.current_user_tenant_ids()));

drop policy if exists intent_clusters_member_read on public.intent_clusters;
create policy intent_clusters_member_read
on public.intent_clusters
for select
using (tenant_id in (select public.current_user_tenant_ids()));

drop policy if exists monthly_report_snapshots_member_read on public.monthly_report_snapshots;
create policy monthly_report_snapshots_member_read
on public.monthly_report_snapshots
for select
using (tenant_id in (select public.current_user_tenant_ids()));

comment on table public.messages is 'Raw text is short-retention. Redacted text and summaries power monthly reports.';
comment on table public.monthly_report_snapshots is 'Frozen monthly concierge report state for owner-facing memos and dashboards.';
