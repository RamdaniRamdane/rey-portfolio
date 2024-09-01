import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Buffer from "./components/buffer/buffer";
import styles from "./page.module.css";

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
        <div className={styles.wrapper}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <main className={styles.container}>
          <div className={styles.leftSide}>
            <NavBar />
          </div>
          <div className={styles.rightSide}>
            <Buffer />
            <div className={styles.vp}>
              <div className={styles.lineCounter}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p>17</p>
                <p>18</p>
                <p>19</p>
                <p>20</p>
                <p>21</p>
                <p>22</p>
                <p>23</p>
                <p>24</p>
                <p>25</p>
                <p>26</p>
                <p>27</p>
                <p>29</p>
                <p>30</p>
                <p>31</p>
                <p>32</p>
                <p>33</p>
                <p>34</p>
              </div>
              <div className={styles.displayContainer}>{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
