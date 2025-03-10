import type React from "react"
import { Providers } from "@/redux/provider"
import { Inter } from "next/font/google"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fusion Gym",
  description: "A platform trainers and trainees",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <style>{`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          body {
            color: rgb(255, 0, 0);
            background: purple;
          }
        `}</style>
      </body>
    </html>
  )
}



