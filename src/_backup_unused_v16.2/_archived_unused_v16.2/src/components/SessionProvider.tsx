'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export default function NextAuthSessionProvider({ children, session }: unknown) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
