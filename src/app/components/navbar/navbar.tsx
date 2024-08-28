"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import { BiSolidFolder } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function NavBar() {
    const [indicatorAbout, setIndicatorAbout] = useState(1);
    const [indicatorProjects, setIndicatorProjects] = useState(1);
    const [indicatorContact, setIndicatorContact] = useState(1);
    const [indicatorHobies, setIndicatorHobies] = useState(1);
    const route = usePathname();
    const pathname = route;
    console.log(pathname);
    function handleAboutClick() {
        setIndicatorAbout((a) => a * -1);
    }
    function handleProjectsClick() {
        setIndicatorProjects((a) => a * -1);
    }
    function handleContactClick() {
        setIndicatorContact((a) => a * -1);
    }
    function handleHobiesClick() {
        setIndicatorHobies((a) => a * -1);
    }

    return (
        <div className={styles.leftSide}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>REY</h1>
            </div>
            <ul className={styles.links}>
                <li className={styles.pwdName}>~/personal/portfolio</li>
                <li className={styles.folderName} onClick={handleAboutClick}>
                    <BiSolidFolder /> About
                </li>
                {indicatorAbout > 0 && (
                    <>
                        <div>
                            <Link href="/">
                                <li
                                    className={
                                        pathname === "/"
                                            ? styles.fileNameA
                                            : styles.fileName
                                    }
                                >
                                    index.html
                                </li>
                            </Link>
                        </div>
                        <div>
                            <Link href="/experience">
                                <li
                                    className={
                                        pathname === "/experience"
                                            ? styles.fileNameA
                                            : styles.fileName
                                    }
                                >
                                    experience.css
                                </li>
                            </Link>
                        </div>
                        <div>
                            <Link href="/skils">
                                <li
                                    className={
                                        pathname === "/skils"
                                            ? styles.fileNameA
                                            : styles.fileName
                                    }
                                >
                                    skils.js
                                </li>
                            </Link>
                        </div>
                        <div>
                            <Link href="/projects">
                                <li
                                    className={
                                        pathname === "/projects"
                                            ? styles.fileNameA
                                            : styles.fileName
                                    }
                                >
                                    projects.ts
                                </li>
                            </Link>
                        </div>
                    </>
                )}
                <li className={styles.folderName} onClick={handleProjectsClick}>
                    <BiSolidFolder /> Projects
                </li>
                {indicatorProjects > 0 && (
                    <li
                        className={
                            pathname === "/ii"
                                ? styles.fileNameA
                                : styles.fileName
                        }
                    >
                        files
                    </li>
                )}
                <li className={styles.folderName} onClick={handleContactClick}>
                    <BiSolidFolder /> Contact
                </li>
                {indicatorContact > 0 && (
                    <li
                        className={
                            pathname === "/ii"
                                ? styles.fileNameA
                                : styles.fileName
                        }
                    >
                        files
                    </li>
                )}
                <li className={styles.folderName} onClick={handleHobiesClick}>
                    <BiSolidFolder /> Hobies
                </li>
                {indicatorHobies > 0 && (
                    <li
                        className={
                            pathname === "/ii"
                                ? styles.fileNameA
                                : styles.fileName
                        }
                    >
                        <BiLogoJavascript /> file.js
                    </li>
                )}
            </ul>
        </div>
    );
}

export default React.memo(NavBar);
