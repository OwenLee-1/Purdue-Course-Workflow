import { NextResponse } from "next/server";

import { getSupabase } from "@/lib/supabase";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { ok: false, error: "Supabase env vars not configured" },
      { status: 503 }
    );
  }

  const { error } = await getSupabase().from("schedules").select("id").limit(1);

  if (error) {
    // Unauthed requests use the anon key, so RLS may block direct reads.
    // That still proves the API URL/key are valid and the database is reachable.
    if (error.message.toLowerCase().includes("permission denied")) {
      return NextResponse.json({ ok: true, rls: "enforced" });
    }

    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
