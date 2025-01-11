import './globals.css'

export const metadata = {
  title: 'Developer Portfolio',
  description: 'A modern developer portfolio built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}