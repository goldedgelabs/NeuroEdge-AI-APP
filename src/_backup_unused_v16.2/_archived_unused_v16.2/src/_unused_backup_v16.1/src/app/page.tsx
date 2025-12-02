import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">NeuroEdge Frontend (v16)</h1>
      <p className="mt-4">Welcome. Go to <Link href='/chat' className='text-blue-500'>Chat</Link>.</p>
    </main>
  )
}
