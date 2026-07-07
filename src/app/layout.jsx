import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChEF FooD",
  description: "Welcome to our Food Corner!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <header  className="px-5 py-2 flex justify-between gap-5 items-center bg-stone-600">
        <Link href="/"><img src="/Editable-Photoshop-Food-Logo-Design-PNG-Transparent (1).png" alt="Logo" className="w-[120px]" /></Link>
        <div className="flex gap-5">
          <Link href="/foods" className="p-4 bg-white text-black font-bold rounded-2xl">Foods</Link>
            <Link href="/reviews" className="p-4 bg-white text-black font-bold rounded-2xl">Reviews</Link>
        </div>

      </header>

      <main className="px-3 py-8">
        <CartProvider> {children}</CartProvider>
      </main>
        
       
        </body>
    </html>
  );
}
