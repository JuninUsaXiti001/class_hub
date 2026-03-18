import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";



export const metadata: Metadata = {
  title: "Class Hub - MC",
  description: "Gerenciador de tarefas do muquifo castelo",
}
import { PostFormProvider } from "@/app/hooks/usePostForm"
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`antialiased `}>

        <PostFormProvider>
          <Navbar />

          {children}

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnHover={true}
            theme="light"
          />
        </PostFormProvider>
      </body>
    </html>
  );
}
