import './globals.css'
import Providers from '@/components/layout/Providers'

export const metadata = {
  title: 'NeuroEdge',
  description: 'Powerful AI frontend'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
