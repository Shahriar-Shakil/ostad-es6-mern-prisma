import React from "react";
import styles from "./SingleBlogPage.module.css";
import getBlogs from "@/lib/getBlogs";

export default async function SingleBlog({ params }) {
  const data = await getBlogs();
  const blogContent = data.posts?.find((item) => item.id == params.id);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogPost}>
        <h1 className={styles.title}>{blogContent.title}</h1>
        <div className={styles.info}>
          <p className={styles.author}>{blogContent.author}</p>
          <p className={styles.date}>{blogContent.date}</p>
        </div>
        <div className={styles.content}>{blogContent.content}</div>
      </div>
    </div>
  );
}
