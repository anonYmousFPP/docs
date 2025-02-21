import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { ConvexClientProvider } from "@/components/convex-client-provider";

import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Docs",
  description: "This is Docs application for collaboration and documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster/>
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
