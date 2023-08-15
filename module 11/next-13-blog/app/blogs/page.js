import React from "react";
import styles from "./page.module.css";
import getBlogs from "@/lib/getBlogs";
import Link from "next/link";

export default async function Blogs() {
  const blogData = await getBlogs();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogGrid}>
        {blogData.posts.map((blog) => (
          <Link
            className={styles.blogCard}
            key={blog.id}
            href={`/blogs/${blog.id}`}
          >
            <div>
              <h2>{blog.title}</h2>
              <p className={styles.textTruncate}>{blog.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
