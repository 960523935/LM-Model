import type { Metadata } from "next";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import { i18n, Locale } from "@/app/i18n/settings";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LM-Models",
  description: "LM-Models",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "";
  return (
    <html lang={"en"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${theme} antialiased h-screen overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  );
}
