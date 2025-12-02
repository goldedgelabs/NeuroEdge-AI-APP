import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">NeuroEdge Frontend (v14)</h1>
      <p className="mt-4">Deploy-ready skeleton. Go to <Link href='/chat'>Chat</Link> or <Link href='/group'>Group</Link>.</p>
    </main>
  )
}
