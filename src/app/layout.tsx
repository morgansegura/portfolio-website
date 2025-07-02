import { fontSans } from "@/fonts";

import { PageLayout } from "@/components/layout/page/page";

import "@/styles/globals.css";

import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "UI/UX Frontend Developer & Full-Stack Engineer for Hire | Morgan Segura",
  description:
    "Hire Morgan Segura, a San Diego–based frontend developer and full-stack engineer. Specializing in React, TypeScript, and modern web apps. Available for freelance projects and contract work.",
  openGraph: {
    title: "Morgan Segura | Frontend Developer & Full-Stack Engineer for Hire",
    description:
      "Hire Morgan Segura, a San Diego–based frontend developer and full-stack engineer. Specializing in React, TypeScript, and modern web apps. Available for freelance projects and contract work.",
    url: "https://morgansegura.com",
    images: [
      {
        url: "https://morgansegura.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Morgan Segura Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morgan Segura | Frontend Developer & Full-Stack Engineer for Hire",
    description:
      "Hire Morgan Segura, a San Diego–based frontend developer and full-stack engineer. Specializing in React, TypeScript, and modern web apps. Available for freelance projects and contract work.",
    images: ["https://morgansegura.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
