"use client";

import Link from "next/link";

export default function GroupList() {
  const groups = [
    { id: "general", name: "General" },
    { id: "wallet", name: "Wallet" }
  ];

  return (
    <div className="p-4 space-y-3">
      {groups.map(g => (
        <Link
          key={g.id}
          href={`/groups/${g.id}`}
          className="block p-3 rounded-lg border hover:bg-accent"
        >
          {g.name}
        </Link>
      ))}
    </div>
  );
}
