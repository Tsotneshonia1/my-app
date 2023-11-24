import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div>all right reserve</div>
      
      <div className={styles.socIcons}>
        <Image src="/1.png" width={15} height={15} alt="Facebook" />
        <Image src="/2.png" width={15} height={15} alt="Instagram" />
        <Image src="/3.png" width={15} height={15} alt="Tweeter" />
        <Image src="/4.png" width={15} height={15} alt="Youtube" />
      </div>
    </div>
  );
}

export default Footer;
