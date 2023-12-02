"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <main className="lg:mx-12 mx-5 lg:my-24 my-14 bg-white rounded-3xl py-8 lg:px-11 px-6">
            {children}
          </main>
        </body>
      </html>
    </QueryClientProvider>
  );
}
