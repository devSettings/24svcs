import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";
import { cn } from "~/lib/utils";
import TrialBanner from "~/components/24svcs/trial-banner";
import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "24svcs",
  description: "24svcs.com",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(inter.className, "min-h-screen bg-background antialiased")}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* <div className="mb-[5rem]">
            <TrialBanner />
          </div> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
