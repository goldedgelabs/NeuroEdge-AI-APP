"use client";

export default function GroupChat({ id }: { id: string }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Group Chat: {id}</h2>
      <p className="text-muted-foreground">Chat messages will load here.</p>
    </div>
  );
}
