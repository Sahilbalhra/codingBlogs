import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/BlogPost.module.css";

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid vero
          doloribus dolore libero totam illum quibusdam porro error cumque! Sint
          dolore distinctio, fugiat unde, facilis necessitatibus fugit debitis
          dolor magnam laboriosam placeat incidunt nulla ipsum libero? Odit
          natus perferendis blanditiis reprehenderit dolorum harum aperiam,
          aspernatur quidem commodi deleniti ut tempore hic! Quo dolorem esse
          dolores deleniti impedit quia aperiam dolore dolor possimus, quisquam
          voluptatum reiciendis officiis earum mollitia animi eveniet minus
          incidunt nam ut iusto! Amet recusandae, nostrum illo velit cum
          voluptatum possimus ad nisi illum maxime ratione porro doloribus, fuga
          mollitia quibusdam praesentium deserunt at vero obcaecati? Dolorum,
          qui?
        </div>
      </main>
    </div>
  );
};

export default slug;
