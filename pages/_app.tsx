import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import type { AppProps } from "next/app";

import { MotionWindowProvider } from "@contexts/MotionWindowContext";

import Screen from "@components/Screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${inter.variable} font-sans`}>
        <MotionWindowProvider>
          <Screen>
            <Component {...pageProps} />
          </Screen>
        </MotionWindowProvider>
      </div>
      <Analytics mode={"production"} />
    </>
  );
}
