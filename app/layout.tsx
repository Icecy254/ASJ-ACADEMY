import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MessageCircle } from "lucide-react";
import { LikeWidget } from "./components/LikeWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASJ Academy",
  description: "ASJ Academy — Learn Japanese Online — N5 to N2 private classes for OFWs in Japan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black swiss-noise">
        {children}
        <LikeWidget />
        <a
          href="https://m.me/archeesensei"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on Messenger"
          className="fixed left-4 bottom-4 z-40 grid h-12 w-12 place-items-center bg-[#0084FF] text-white border-2 border-black hover:bg-[#FF3000] transition-colors shadow-[0_0_0_2px_white]"
        >
          <MessageCircle size={20} strokeWidth={2} className="text-white" aria-hidden="true" />
        </a>
      </body>
    </html>
  );
}
