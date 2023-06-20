import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="ctp-mocha bg-ctp-base p-5">{children}</body>
    </html>
  );
}
