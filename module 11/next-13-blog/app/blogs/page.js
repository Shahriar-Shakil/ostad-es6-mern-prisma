import React from "react";
import styles from "./page.module.css";
import getBlogs from "@/lib/getBlogs";

export default async function Blogs() {
  const blogData = await getBlogs();
  console.log(blogData, "ddd");
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogGrid}>
        {blogData.posts.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <h2>{blog.title}</h2>
            <p>In this post, we'll explore the basics of cooking...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
