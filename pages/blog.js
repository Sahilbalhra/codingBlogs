import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "../styles/Blog.module.css";
// import data from "../blogdata/how-to-learn-flask.json"
//step 1: collect all the files from blogdata directory
//step 2: Iterate through the and Display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((apiData) => {
        return apiData.json();
      })
      .then((parseData) => {
        console.log(parseData);
        setBlogs(parseData);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div className={styles.blogItem} key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.title}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p>{blogitem.content.substr(0, 400)}...</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
