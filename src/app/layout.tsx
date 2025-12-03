import './globals.css';
import React from 'react';
import NextAuthSessionProvider from '@/components/SessionProvider';
import FloatingChatProvider from '@/components/floatingChat/FloatingChatProvider';
import ShortcutManager from '@/components/Shortcuts/ShortcutManager';
import ShortcutOverlay from '@/components/Shortcuts/ShortcutOverlay';

export const metadata = { title: 'NeuroEdge', description: 'NeuroEdge frontend' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <NextAuthSessionProvider session={undefined}>
          <FloatingChatProvider>{children}</FloatingChatProvider>
          <ShortcutOverlay />
          <ShortcutManager />
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
