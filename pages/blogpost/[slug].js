import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/BlogPost.module.css";
//step 1: find the file according to the slug
//step 2: Populate through the and Display them

const slug = () => {
  const router = useRouter();
  // console.log(router.query);
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug} </h1>
        <hr/>
        <div>
          
        </div>
      </main>
    </div>
  );
};

export default slug;
