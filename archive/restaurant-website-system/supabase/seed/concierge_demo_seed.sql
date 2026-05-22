-- Optional local/demo seed for the concierge analytics schema.
-- Replace the UUIDs in real projects; these IDs match the scaffold defaults.

insert into public.tenants (id, name, plan)
values ('00000000-0000-4000-8000-000000000001', 'Demo Restaurant Group', 'concierge')
on conflict (id) do update set name = excluded.name;

insert into public.sites (id, tenant_id, domain, brand_name)
values (
  '00000000-0000-4000-8000-000000000002',
  '00000000-0000-4000-8000-000000000001',
  'demo.local',
  'Demo Restaurant'
)
on conflict (id) do update set domain = excluded.domain, brand_name = excluded.brand_name;

insert into public.concierge_surfaces (id, tenant_id, site_id, page_type, label, prompt_set)
values
  (
    'home_ribbon',
    '00000000-0000-4000-8000-000000000001',
    '00000000-0000-4000-8000-000000000002',
    'home',
    'Ask the host',
    '[{"id":"menu_fit","text":"What should I order tonight?"},{"id":"hours","text":"Are you open tonight?"},{"id":"reserve","text":"How do I reserve?"}]'
  ),
  (
    'menu_card',
    '00000000-0000-4000-8000-000000000001',
    '00000000-0000-4000-8000-000000000002',
    'menu',
    'Not sure what to order?',
    '[{"id":"popular","text":"What are regulars ordering?"},{"id":"lighter","text":"What is a lighter dinner?"},{"id":"gluten","text":"What should I ask about allergies?"}]'
  ),
  (
    'visit_card',
    '00000000-0000-4000-8000-000000000001',
    '00000000-0000-4000-8000-000000000002',
    'contact',
    'Planning a visit?',
    '[{"id":"directions","text":"Where should I park?"},{"id":"large_party","text":"Can I bring a larger party?"},{"id":"hours","text":"What time are you open?"}]'
  )
on conflict (tenant_id, site_id, id) do update
set page_type = excluded.page_type,
    label = excluded.label,
    prompt_set = excluded.prompt_set;

insert into public.tenants (id, name, plan)
values ('11111111-1111-4111-8111-111111111111', 'Da Baffone', 'concierge')
on conflict (id) do update set name = excluded.name;

insert into public.sites (id, tenant_id, domain, brand_name)
values (
  '22222222-2222-4222-8222-222222222222',
  '11111111-1111-4111-8111-111111111111',
  'dabaffonecucinaitaliana.com',
  'Da Baffone'
)
on conflict (id) do update set domain = excluded.domain, brand_name = excluded.brand_name;

insert into public.concierge_surfaces (id, tenant_id, site_id, page_type, label, prompt_set)
values
  (
    'home_ribbon',
    '11111111-1111-4111-8111-111111111111',
    '22222222-2222-4222-8222-222222222222',
    'home',
    'Ask the host',
    '[{"id":"date_night","text":"What should we order for date night?"},{"id":"open_tonight","text":"Are you open tonight?"},{"id":"reserve","text":"How do I reserve?"}]'
  ),
  (
    'menu_card',
    '11111111-1111-4111-8111-111111111111',
    '22222222-2222-4222-8222-222222222222',
    'menu',
    'Not sure what to order?',
    '[{"id":"regulars","text":"What are regulars ordering?"},{"id":"seafood","text":"What seafood dish should I try?"},{"id":"allergies","text":"What should I ask about allergies?"}]'
  ),
  (
    'visit_card',
    '11111111-1111-4111-8111-111111111111',
    '22222222-2222-4222-8222-222222222222',
    'contact',
    'Planning a visit?',
    '[{"id":"directions","text":"Where are you located?"},{"id":"large_party","text":"Can I bring a larger party?"},{"id":"hours","text":"What time are you open?"}]'
  )
on conflict (tenant_id, site_id, id) do update
set page_type = excluded.page_type,
    label = excluded.label,
    prompt_set = excluded.prompt_set;
