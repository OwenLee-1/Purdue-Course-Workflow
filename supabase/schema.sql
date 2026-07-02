-- Run this in Supabase → SQL Editor (Milestone 3)

create table if not exists public.user_settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  theme text default 'system',
  notifications jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (user_id)
);

create table if not exists public.schedules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  semester text not null,
  year integer not null,
  title text,
  created_at timestamptz default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  schedule_id uuid not null references public.schedules(id) on delete cascade,
  course_code text not null,
  course_name text not null,
  section text,
  professor text,
  days text,
  start_time text,
  end_time text,
  location text,
  created_at timestamptz default now()
);

-- Row Level Security
alter table public.user_settings enable row level security;
alter table public.schedules enable row level security;
alter table public.courses enable row level security;

create policy "Users can manage their own settings"
  on public.user_settings
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can manage their own schedules"
  on public.schedules
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can manage their own courses"
  on public.courses
  for all
  using (
    exists (
      select 1
      from public.schedules s
      where s.id = schedule_id
        and s.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.schedules s
      where s.id = schedule_id
        and s.user_id = auth.uid()
    )
  );
