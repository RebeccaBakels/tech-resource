/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css';
import Header from '../components/home-button';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitles}>
        <Header />
        <h2 style={{ marginTop: '0', marginBottom: '0' }}>Hi, I'm Becca</h2>
      </div>
      <div className={styles.sub}>
        <p>
          Mid-2019, during the pandemic, I quit my job as a store manager of 5
          years for a major retail chain after losing all resemblance of
          work-life balance and noticing my mental health deteriorating. My job
          was not only unfulfilling but I was made to feel disposable and was
          subjected to daily verbal abuse. Feeling pushed to the absolute edge I
          put in my two weeks and made the decision to put all my brainpower and
          energy into something that would challenge and grow with me.
        </p>
        <br />
        <p>
          I was inspired by my sister, Michelle Bakels, a talented and driven
          software developer down here in South Florida who made the switch from
          Gallery Director and Art-History Major. I thought{' '}
          <i>well if SHE can do it, so can I</i>. Kidding. In all seriousness, I
          saw how happy she was and I couldn't remember the last time I could
          truly say I was happy.
        </p>
        <br />
        <p>
          So I put in the work, immediately started attending free online tech
          meetups and seminars through South Florida Tech Hub. I signed up for
          multiple short courses including: User Experience (UX) Design, Intro
          to Web Dev, Game Development (this one was just for fun) and after
          completing these took the plunge into a 10-week Software Engineering
          bootcamp. Best choice I've ever made. Was it tough? Absolutely, but
          not for the reason you'd think. It was a mental hurdle to believe I am
          capable of learning these things, to be comfortable with the unknown
          and understand how to find the right answers not memorize them.
          Imposter syndrome hit me hard about 8 weeks in when I realized how
          much I didn't know and how massive the world of tech is. It felt like
          I was swimming in a pond only to look around and realize I was
          actually in the middle of the Pacific Ocean.
        </p>
        <br />
        <p>
          This is where my support system was key. I had my person, my sister,
          to talk to in those low moments when I thought I really couldn't make
          it through. She heard me out, sympathize with my struggle, gave me the
          reality check I needed, and held me accountable and, before I knew it,
          I was graduating and the last 10 weeks, 50 days, 400 hours-felt like a
          fever dream and as I took my certificate, started interviewing,
          accepted my first job as an intern software engineer, joined the
          digital software engineering team at City Furniture, then making my
          first Pull Requests and demoing changes I made to the entire tech
          department-the dream never faded away.
        </p>
        <br />
        <p>
          Here I am, a year after I started my bootcamp, still living in that
          dream Waking up every day excited to start working, making twice as
          much as I did at the top volume store in my district at my previous
          job, having my weekends and holidays, able to pick up and visit my
          friend in North Carolina working remotely, opening up my life to
          things I thought were impossible.
        </p>
        <h3>And you can do it too.</h3>
        <br />
        <h2>Want to talk about it?</h2>

        <a
          href="https://www.instagram.com/beccalytics/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <br />
        <a
          href="https://www.twitter.com/beccalytics/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/rebecca-bakels/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          href="https://definitelywork.com/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Definitely Work Slack
        </a>
        <br />
        <a
          href="https://techhubsouthflorida.org/slack/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          SF Tech Hub Work Slack
        </a>
      </div>
    </div>
  );
}

export default About;
