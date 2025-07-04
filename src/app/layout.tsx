import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../../themes.css';    
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Buffer from "./components/buffer/buffer";
import styles from "./page.module.css";
import LineCounter from "./components/linecounter/linecouter";
import VimCmd from "./components/vimCmd/vimCmd";
import SideBarProvider from "./context/naveBarContext";
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

    <SideBarProvider>
        <main className={styles.containerg}>
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
          <div className={styles.command}>
            <VimCmd/> 
          </div>
        </main>

    </SideBarProvider>
      </body>

    </html>
  );
}
