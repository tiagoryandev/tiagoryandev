import "../styles/globals.css";

import { Inter } from "next/font/google";

import type { AppProps } from "next/app";

import { MotionWindowProvider } from "@contexts/MotionWindowContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <MotionWindowProvider>
        <Component {...pageProps} />
      </MotionWindowProvider>
    </div>
  );
}
