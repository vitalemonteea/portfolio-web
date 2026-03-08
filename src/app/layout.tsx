import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const interSans = Inter({
  variable: "--font-geist-sans", // using the defined CSS variable for backward compatibility
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono", // using the defined CSS variable for backward compatibility
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jincheng Qian (钱金城) - AI-Native Product Manager",
  description: "AI-Native Product Manager | Full-Stack AI Delivery · B2B Product Architecture · Data-Driven Risk Control. HK PolyU MSc graduate based in Shenzhen.",
  keywords: ["Product Manager", "AI", "SCRM", "HK PolyU", "产品经理", "钱金城"],
  openGraph: {
    title: "Jincheng Qian - AI-Native Product Manager",
    description: "AI-Native Product Manager specializing in full-stack AI delivery and B2B product architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark scroll-smooth">
      <body
        className={`${interSans.variable} ${firaCode.variable} antialiased bg-background text-foreground selection:bg-primary/30 min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <div className="flex-1 w-full bg-[#0a0a0a] relative">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
