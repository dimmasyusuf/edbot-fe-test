import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/lib/providers";

export const metadata: Metadata = {
  title: "Ed the Learning Bot - Your Personal Tutor",
  description:
    "Learn anything and everything on Ed the Learning Bot, available to you completely free of charge!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
