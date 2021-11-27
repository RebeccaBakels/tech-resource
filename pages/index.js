import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
        <h1 className={styles.title}>Welcome!</h1>

        <p className={styles.description}>
          If you&apos;re here it means you&apos;re interested in tech and want
          to know what your next steps should be. <br />
          I&apos;m here to help!
        </p>
        <iframe
          width="840px"
          height="630px"
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/watch?v=V-xS3g1RLhQ"
        ></iframe>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>FAQ</h2>
            <p>Commonly asked questions I get from people looking into tech</p>
          </div>

          <div className={styles.card}>
            <h2>Online Communities</h2>
            <p>
              List of online low pressure tech communities you can join today
            </p>
          </div>

          <div className={styles.card}>
            <h2> Resources </h2>
            <p>Links to free courses, bootcamps, and learning resources</p>
          </div>

          <div className={styles.card}>
            <h2>About </h2>
            <p>Learn more about my story and find out how to contact me</p>
          </div>
        </div>

        <div className={styles.subtitles}>
          <h2 style={{ marginTop: '0', marginBottom: '0' }}>FAQ</h2>
          <p>Commonly asked questions I get from people looking into tech</p>
        </div>

        <div className={styles.sub}>
          <h3> Do I need to be good at math?</h3>
          <h4>
            Not at all, you need to have basic math/order of operations
            knowledge for most developer jobs
          </h4>
          <h3>What if I&apos;m not smart enough?</h3>
          <h4>
            You are. I thought the same but you get out what you put into it.
            It&apos;s not about being &quot;smart&quot; it&apos;s about being
            committed fully
          </h4>
          <h3> Whats the worst part of the job?</h3>
          <h4>
            Imposter syndrome, my own brain getting in the way, telling me
            I&apos;m not meant to be in this field, being self-defeating. You
            need to be comfortable with not knowing the answers and know the
            right place to find them or reach out for help.
          </h4>
        </div>
        <div className={styles.subtitles}>
          <h2 style={{ marginTop: '0', marginBottom: '0' }}>
            Online Communities
          </h2>
          <p>Online low pressure tech communities you can join today</p>
        </div>
        <div className={styles.sub}>
          <div>
            <a
              href="https://techhubsouthflorida.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tech Hub South Florida Slack
            </a>
            <h4>
              Tech community based in South Florida but welcoming to anyone
              looking to get into tech
            </h4>
          </div>
          <br />
          <div>
            <a
              href="https://definitelywork.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Definitely Work Slack
            </a>
            <h4>
              Tech community made up of beginners and professionals looking to
              help and support each other
            </h4>
          </div>
          <br />
          <div>
            <a
              href="https://queerjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Queer.JS Discord
            </a>
            <h4>
              Worldwide queer tech community built to support LGBTQ+ individuals
              in tech
            </h4>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
