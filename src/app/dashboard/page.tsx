import { getServerSession } from 'next-auth/next';
import authOptions from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions as any);
  if (!session) redirect('/api/auth/signin');
  return <div className="p-6">Welcome to protected dashboard.</div>;
}
