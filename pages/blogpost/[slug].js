import * as fs from "fs";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";
//step 1: find the file according to the slug
//step 2: Populate through the and Display them

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(content) {
    return {__html: content};
  }
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
        {/* <div>{blog && blog.content}</div> */}
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>
    </div>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  // const { slug } = context.query;
  // let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  // let myBlog = await data.json();
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
