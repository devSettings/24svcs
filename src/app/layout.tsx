import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "24svcs",
  description: "24svcs.com",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
