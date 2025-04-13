"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
 import { Provider } from "react-redux"
import { store } from "@/store/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const queryClient = new QueryClient(); // Config queryClient

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>VeloceVault.</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
      </body>
    </html>
  );
}
