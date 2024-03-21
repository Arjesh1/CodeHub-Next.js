import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeHub",
  description: "Save, share code snippet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userData = {
    uid: 12122,
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header userData={userData} />
        <div className="p-4 md:p-8">{children}</div>
        <ToastContainer />
      </body>
    </html>
  );
}
