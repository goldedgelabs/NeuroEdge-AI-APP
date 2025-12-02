import './globals.css';
import React from 'react';

export const metadata = {
  title: 'NeuroEdge',
  description: 'NeuroEdge Chat UI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
