import ChatWindow from '@/components/chat/ChatWindow'

export default function ChatPage() {
  return (
    <div className="h-screen flex">
      <aside className="w-72 border-r"><div className="p-4">Sidebar</div></aside>
      <main className="flex-1 p-4"><ChatWindow /></main>
    </div>
  )
}
