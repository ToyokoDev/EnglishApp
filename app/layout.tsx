import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Plan App by ToyokoKid",
  description: "Plan day with this my App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.className}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <div className="flex-1 p-16 ">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
