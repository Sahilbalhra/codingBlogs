import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";
// import data from "../blogdata/how-to-learn-flask.json"
//step 1: collect all the files from blogdata directory
//step 2: Iterate through the and Display them

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
