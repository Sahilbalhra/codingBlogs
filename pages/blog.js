import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "../styles/Blog.module.css";
// import data from "../blogdata/how-to-learn-flask.json"
//step 1: collect all the files from blogdata directory
//step 2: Iterate through the and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allblogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((apiData) => {
  //       return apiData.json();
  //     })
  //     .then((parseData) => {
  //       // console.log(parseData);
  //       setBlogs(parseData);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div className={styles.blogItem} key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
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
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allblogs = await data.json();

  return {
    props: { allblogs }, // will be passed to the page component as props
  };
}

export default Blog;
