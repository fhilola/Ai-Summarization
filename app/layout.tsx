import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./ui/layout";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "AI Summary - AI - Powered PDF Summarization",
  description:
    "Save hours of reading time. Transform lengthy PDFs into clear, accurate summarize in seconds with out advanced AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${fontSans.variable}  antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
