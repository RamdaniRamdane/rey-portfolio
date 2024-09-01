"use client";
import { useState, useCallback, useEffect } from "react";
import styles from "./navbar.module.css";
import { BiSolidFolder } from "react-icons/bi";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image"
import icon from "../../../../public/node-tree-svgrepo-com.svg"

function NavBar() {
  const [indicatorLeftSide, setIndicatorLeftSide] = useState(-1);
  const [indicatorAbout, setIndicatorAbout] = useState(1);
  const [indicatorProjects, setIndicatorProjects] = useState(1);
  const [indicatorContact, setIndicatorContact] = useState(1);
  const [indicatorHobies, setIndicatorHobies] = useState(1);
  const route = usePathname();
  const pathname = route;

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    console.log(`Key pressed: ${event.key}`);
    event.key == "t" && handleLeftSideDisplay();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress );
    return () => {
      document.removeEventListener("keydown", handleKeyPress );
    };
  }, [handleKeyPress]);

  function handleLeftSideDisplay() {
    setIndicatorLeftSide((a) => a * -1);
  }
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

  const handleClick = (name: string) => (name === "About") ?  handleAboutClick() : ((name === "Projects") ? handleProjectsClick() : ((name === "Contact") ? handleContactClick() : handleHobiesClick()))

  const AboutFiles = [
    { name: "index.html", path: "/" },
    { name: "experience.css", path: "/experience" },
    { name: "skils.js", path: "/skils" },
    { name: "projects.json", path: "/projects" },
  ];
  const Projects = [
    { name: "file1", path: "/projects/file1" },
    { name: "file2", path: "/projects/file2" },
  ];
  const Contacts = [
    { name: "file1", path: "/projects/file1" },
    { name: "file2", path: "/projects/file2" },
  ];
  const Hobies = [
    { name: "file1", path: "/projects/file1" },
    { name: "file2", path: "/projects/file2" },
  ];

  const Folders = [
    { name: "About", files: AboutFiles , indicator : indicatorAbout },
    { name: "Projects", files: Projects , indicator : indicatorProjects},
    { name: "Contact", files: Contacts , indicator : indicatorContact},
    { name: "Hobbies", files: Hobies , indicator: indicatorHobies},
  ];
  return (
    <div className={styles.container}>
      <div className={styles.joinMe}>
        <div className={styles.hamburger} onClick={handleLeftSideDisplay}>
            <Image
            src={icon}
            width={20} 
            height={20} 
            alt="tree"
            className={styles.icon}
          />
        </div>
      </div>
      {indicatorLeftSide > 0 && (
        <div className={styles.leftSide}>
          <div className={styles.logoContainer}>
            <h1 className={styles.logo}>REY</h1>
          </div>
          <ul className={styles.links}>
            <li className={styles.pwdName}>~/personal/portfolio{pathname}</li>

            {Folders.map((folder, index) => (
              <>
                <li
                  className={styles.folderName}
                  onClick={()=>handleClick(folder.name)}
                  key={index}
                >
                  <BiSolidFolder /> {folder.name}
                </li>
                {folder.indicator > 0 && (
                  <>
                    {folder.files.map((file, subindex) => (
                      <div key={subindex}>
                        <Link href={file.path}>
                          <li
                            className={
                              pathname === file.path
                                ? styles.fileNameA
                                : styles.fileName
                            }
                          >
                            {file.name}
                          </li>
                        </Link>
                      </div>
                    ))}
                  </>
                )}
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default React.memo(NavBar);
