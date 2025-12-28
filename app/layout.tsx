import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UIProvider } from "./UIContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
      <body className={`${globals} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-row">
          <UIProvider>
            <Sidebar />
            <div className="flex flex-col w-full h-screen md:border-r-1 md:border-gray-300">
              <Header />
              <main className="flex-1">
                {children}
              </main>
            </div>
          </UIProvider>
        </div>
      </body>
    </html>
  );
}
