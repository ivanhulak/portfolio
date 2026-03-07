import { Fira_Code, Orbitron } from 'next/font/google'

export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
})
