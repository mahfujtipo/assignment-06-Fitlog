import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Nav from "@/components/shared/Nav";
import Footersection from "@/components/footer/Footersection";
import ContextProvider from "@/context/context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "A dark, no-nonsense workout companion for planning and tracking your training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ContextProvider>
          <Nav />

          <div className="pt-[74px]">{children}</div>

          <Footersection />

          <ToastContainer
            position="top-right"
            autoClose={2000}
            style={{ top: "100px" }}
          />
        </ContextProvider>
      </body>
    </html>
  );
}
