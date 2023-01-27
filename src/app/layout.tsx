import './globals.css'

import { Inter, Manrope } from '@next/font/google'

import Providers from './components/Providers';
import cx from "classnames";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cx(manrope.variable, inter.variable)}>
         <Providers >
    <body className="transition-all duration-500 text-zinc-800 bg-zinc-100 dark:text-slate-50 dark:bg-zinc-900">
   
      {children} 

        
      </body>
      </Providers >
    </html>
  )
}
