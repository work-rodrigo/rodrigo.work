import { JetBrains_Mono as FontMono, Inter as FontSans, Mulish as FontMulish } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontMulish = FontMulish({
  subsets: ["latin"],
  variable: "--font-mulish",
})
