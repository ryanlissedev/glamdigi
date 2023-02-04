import "./globals.css";

import { Inter, Manrope } from "@next/font/google";

import Navbar from "./components/Navbar";
import Providers from "./components/Providers";
import cx from "classnames";
import localFont from "@next/font/local";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const futur = localFont({
  src: "./futura-pt-cond-bold.otf",
  weight: "800",
  variable: "--font-futur",
});
const bsmnt = localFont({
  src: "./BasementGrotesque-Black_v1.202.otf",
  weight: "900",
  variable: "--font-bsmnt",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        manrope.variable,
        inter.variable,
        futur.variable,
        bsmnt.variable,
      )}
    >
      <Providers>
        <body className=" bg-[#F9D8DD] bg-[url('/grid-2.svg')] text-zinc-800 transition-all duration-500 dark:bg-gray-1100 dark:text-slate-50 ">
          <Navbar /> {children}
        </body>
      </Providers>
    </html>
  );
}
