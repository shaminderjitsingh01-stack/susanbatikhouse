import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/lib/cart-context";

// Lazy load chatbot to improve LCP
const Chatbot = dynamic(() => import("@/components/chat/Chatbot"), {
  ssr: false,
  loading: () => null,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Susan Batik House | Traditional Batik, Kebaya & Cheongsam in Singapore",
  description: "Since 1989, Susan Batik House offers the finest handcrafted batik, Nyonya kebaya, Peranakan cheongsam, and traditional wear. Visit us at New Market Road, Singapore.",
  keywords: "batik singapore, kebaya, cheongsam, nyonya kebaya, peranakan, traditional wear, singapore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <Chatbot />
        </CartProvider>
      </body>
    </html>
  );
}
