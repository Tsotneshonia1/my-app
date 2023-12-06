import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const links = [
    {
      id: 1,
      title: "Facebook",
      url: "Facebook",
    },
    {
      id: 2,
      title: "Instagram",
      url: "Instagram",
    },
    {
      id: 3,
      title: "Tweeter",
      url: "Tweeter",
    },
    {
      id: 4,
      title: "Youtube",
      url: "youtube",
    },
  ];

  return (
    <div className={styles.container}>
      <div>all right reserve</div>

      <div className={styles.socIcons}>
        {/* hello */}
        <Link href="https://www.facebook.com/">
          {" "}
          <Image src="/1.png" width={15} height={15} alt="Facebook" />
        </Link>
        <Link href="https://www.instagram.com/">
          {" "}
          <Image src="/2.png" width={15} height={15} alt="Instagram" />
        </Link>
        <Link href="https://twitter.com/">
          {" "}
          <Image src="/3.png" width={15} height={15} alt="Tweeter" />
        </Link>
        <Link href="https://www.youtube.com/">
          {" "}
          <Image src="/4.png" width={15} height={15} alt="Youtube" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
