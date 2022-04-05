// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";
//step 1: find the file according to the slug
//step 2: Populate through the and Display them

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((apiData) => {
  //       return apiData.json();
  //     })
  //     .then((parseData) => {
  //       // console.log(parseData);
  //       setBlog(parseData);
  //     });
  // }, [router.isReady]);

  // console.log(router.query);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default slug;
