import { createClient } from "@/lib/supabaseServer"

export default async function Page() {
  const supabase = createClient()

  // Fetch the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If no user, redirect to login
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>You are not logged in.</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">
        Welcome, {user.email}
      </h1>
    </div>
  )
}
