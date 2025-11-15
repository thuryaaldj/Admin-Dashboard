'use client';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";

// نفس الخط المستخدم في layout.tsx
const inter = Inter({ subsets: ['latin'] });

interface ThemeWrapperProps {
  children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const [mounted, setMounted] = useState(false);

  // هذا بيكون شغال فقط على الكلينت
  useEffect(() => {
    setMounted(true);
  }, []);

  // قبل ما يتحمل الكومبوننت على الكلينت
  if (!mounted) {
    return (
      <div className={inter.className}>
        {children}
        <Toaster/>
      </div>
    );
  }

  // بعد ما يتحمل الكومبوننت على الكلينت
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      storageKey="dashboard-theme"
    >
      {children}
      <Toaster/>
    </ThemeProvider>
  );
}