import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
  import { ToastContainer, Slide } from "react-toastify";

  const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
  });

  const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Zainab Asif | Software Engineer",
    description:
      "Portfolio and projects of Zainab Asif, a full-stack developer specializing in Next.js, Tailwind, and modern web apps.",
    icons: {
      icon: "/ZainabAsif.svg",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: "Zainab Asif | Full Stack Developer",
      description: "Portfolio and projects of Zainab Asif",
      url: "https://yourdomain.com",
      siteName: "Zainab Asif",
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: "Preview of Zainab's Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zainab Asif | Full Stack Developer",
      description: "Portfolio and projects of Zainab Asif",
      images: ["/preview.png"],
    },
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={cn(
            `${poppins.variable} ${montserrat.variable} antialiased h-svh w-full flex flex-col max-w-[1750px] justify-self-center relative `
          )}
        >
          <Navbar />
          {/* Main content (scrollable + takes remaining height) */}
          <main className="flex-1 mt-15 sm:mt-24 bg-black overflow-y-visible p-3">
            {children}
          </main>
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
        </body>
      </html>
    );
  }
