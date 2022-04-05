import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}> 
        <div className={styles.blogItem}>
          <Link href={'/blogpost/learn-javascript'}>
          <h3 className={styles.blogItemh3}>How to learn javaScript in 2022</h3></Link>
          <p>JavaScript is a object oriented scripting language</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
