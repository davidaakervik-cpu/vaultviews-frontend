import { supabaseServer } from '@/lib/supabaseServer';

export default async function DashboardPage() {
  const supabase = await supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div style={{ padding: 40 }}>
        <h1>Not authorized</h1>
        <p>Please log in first.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>VaultViews Dashboard</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
}
