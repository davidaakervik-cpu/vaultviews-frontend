import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabaseServer"

export async function GET(request: Request) {
  const supabase = createClient()

  // Exchange the auth code for a session
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Redirect to the dashboard after login
  return NextResponse.redirect("https://app.vaultviews.com/app")
}
