import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>{`
        h2 {
          font-size: 38px;
        }
        h3{
          font-size: 28px;
        }
      `}</style>
      <Head>
        <title>Coding Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQ-OdYjeNTHrpuh7lMt5TR2DdySHXaz2sSA&usqp=CAU"
        />
      </Head>
     
      <main className={styles.main}>
        <h1 className={styles.title}>Coding Blogs</h1>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.myImg}
            src="/home.jpg"
            width="237"
            height="158"
          />
        </div>
        <p className={styles.description}>A blog for coders</p>
        <div className="blogs">
          <h2>Latest Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javaScript in 2022</h3>
            <p>JavaScript is a object oriented scripting language</p>
          </div>
        </div>
      </main>
    </div>
  );
}
