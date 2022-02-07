import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import Welcome from '../components/welcome';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Resource</title>
        <meta
          name="description"
          content="A website to help non-technical people join the tech community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome, Friend!</h1>
        <p className={styles.description}>
          If you&apos;re here it means you&apos;re interested in tech and want
          to know what your next steps should be. <br />
          I&apos;m here to help!
        </p>
        <div className={styles.video}>
          <iframe
            className={styles.video}
            poster="images/video.png"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/V-xS3g1RLhQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={styles.grid}>
          <Link href={'/FAQ'} passHref>
            <div className={styles.card}>
              <h2>FAQ</h2>
              <p>
                Commonly asked questions I get from people looking into tech
              </p>
            </div>
          </Link>
          <Link href={'/communities'} passHref>
            <div className={styles.card}>
              <h2>Online Communities</h2>
              <p>
                List of online low pressure tech communities you can join today
              </p>
            </div>
          </Link>
          <Link href={'/resources'} passHref>
            <div className={styles.card}>
              <h2> Resources </h2>
              <p>Links to free courses, bootcamps, and learning resources</p>
            </div>
          </Link>
          <Link href={'/about'} passHref>
            <div className={styles.card}>
              <h2>About </h2>
              <p>Learn more about my story and find out how to contact me</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
