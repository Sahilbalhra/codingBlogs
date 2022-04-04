import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQ-OdYjeNTHrpuh7lMt5TR2DdySHXaz2sSA&usqp=CAU"
        />
      </Head>
      <nav className={styles.mainNav}>
        <ul>
          <Link href='/home'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Coding Blog</h1>
        <p className={styles.description}>A blog for coders</p>
        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javaScript in 2022</h3>
            <p>JavaScript is a object oriented scripting language</p>
          </div>
        </div>
      </main>
    </div>
  );
}
