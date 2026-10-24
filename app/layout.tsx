import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rabin Madhu | Portfolio",
    template: "%s | Rabin Madhu",
  },
  description:
    "Rabin's personal portfolio showcasing web development skills, projects, and experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#09090b]">
        {/* Shared Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[120px]" />
          <div className="absolute -right-32 top-[35%] h-96 w-96 rounded-full bg-blue-500/6 blur-[120px]" />
        </div>

        {/* Shared Dot Pattern */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(var(--primary) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 85%)",
          }}
        />


        {/* Shared Dot Pattern */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(52, 211, 153, 0.5) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        /> */}


        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 flex-1">
          {children}
        </main>
      </body>
    </html>
  );


}
