import type { Metadata } from "next";
import { Geist, Geist_Mono ,Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import {Toaster} from '@/components/ui/sonner'
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "you can manage every thing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem={true}
        storageKey='dashboard-theme'
        >
        {children}
          <Toaster/>
          </ThemeProvider>

      </body>
    </html>
  );
}
