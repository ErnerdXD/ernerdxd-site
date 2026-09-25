import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ErnerdXD | NFC Google Review Cards",
  description: "NFC and QR review cards for local businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
