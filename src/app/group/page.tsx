import GroupChatWindow from '@/components/group/GroupChatWindow'

export default function GroupPage() {
  return (
    <div className="h-screen flex">
      <aside className="w-72 border-r"><div className="p-4">Groups</div></aside>
      <main className="flex-1 p-4"><GroupChatWindow /></main>
    </div>
  )
}
