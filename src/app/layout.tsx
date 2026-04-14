import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BuildON Inc.",
  description:
    "We design, build, and scale innovative digital products — from concept to deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${redHat.variable}`}
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      suppressHydrationWarning
    >
      <head>
        <style>{`
          html::-webkit-scrollbar,
          body::-webkit-scrollbar {
            width: 0;
            height: 0;
            display: none;
          }
        `}</style>
      </head>
      <body
        className="min-h-screen antialiased"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
