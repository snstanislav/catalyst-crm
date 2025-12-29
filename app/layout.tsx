import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UIProvider } from "../context/UIContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalyst CRM",
  description: "Catalyst CRM",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const globals = "text-gray-600"

  return (
    <html lang="en">
      <body className={`${globals} ${geistSans.variable} ${geistMono.variable} flex flex-row justify-center bg-gray-500 antialiased`}>
        <div className="flex flex-row  w-screen max-w-400">
          <UIProvider>
            <Sidebar />
            <div className="flex flex-col flex-1 h-screen md:border-r-1 md:border-gray-300 overflow-y-auto">
              <Header />
              <main className="flex-1 bg-white">
                {children}
              </main>
            </div>
          </UIProvider>
        </div>
      </body>
    </html>
  );
}
