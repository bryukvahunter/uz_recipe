import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUiProvider } from "@/provider/HeroUiProvider";
import Header from "@/components/UI/Header";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUiProvider>
          <Header />
          <main
            className="flex flex-col  w-full justify-start items-center"
            style={{
              height: `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})`,
            }}
          >
            {children}
          </main>
          <footer
            className="flex justify-center items-center "
            style={{ height: `${layoutConfig.footerHeight}` }}
          >
            {siteConfig.description}
          </footer>
        </HeroUiProvider>
      </body>
    </html>
  );
}
