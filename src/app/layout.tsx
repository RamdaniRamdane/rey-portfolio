import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Buffer from "./components/buffer/buffer";
import styles from "./page.module.css";
import LineCounter from "./components/linecounter/linecouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rey",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.container}>
          <div className={styles.leftSide}>
            <NavBar />
          </div>
          <div className={styles.rightSide}>
            <Buffer />
            <div className={styles.vp}>
              <LineCounter />
              <div id="display" className={styles.displayContainer}>
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
