"use client";
import styles from "./display.module.css";
import Index from "../../index";
import { usePathname } from "next/navigation";

function DisplayArea() {
  const router = usePathname();
  const pathname = router;
  const renderPage = () => {
    switch (pathname) {
      case "/index":
        return <Index />;
    }
  };
  return <div className={styles.container}>{renderPage()}</div>;
}

export default DisplayArea;
