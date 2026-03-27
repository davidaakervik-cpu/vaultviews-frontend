import { createClient } from "@/lib/supabaseServer"

export default function LoginPage() {
  async function signIn(formData: FormData) {
    "use server"

    const email = formData.get("email") as string
    const supabase = createClient()

    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://app.vaultviews.com/auth/callback",
      },
    })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form action={signIn} className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Sign in</h1>

        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="border px-3 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Send magic link
        </button>
      </form>
    </div>
  )
}
