import Link from "next/link";
import React from "react";
import Styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav class={Styles.navbar}>
      <div>
        <Link class={Styles.logo} href="/">
          Next 13 Blog
        </Link>{" "}
      </div>
      <ul class={Styles.navLinks}>
        <li>
          <Link class={Styles.navLink} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link class={Styles.navLink} href="/blogs">
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
