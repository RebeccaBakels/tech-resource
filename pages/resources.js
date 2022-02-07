/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css';
import Header from '../components/home-button';

function Resources() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitles}>
        <Header />
        <h2 style={{ marginTop: '0', marginBottom: '0' }}>Resources</h2>
        <p>Online and in person resources to help you start learning</p>
      </div>
      <div className={styles.sub}>
        <h2>Free to Low Cost Options</h2>
        <div>
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Free Code Camp
          </a>
          <p>
            A nonprofit community that helps you learn to code by building
            projects. You'll learn to code by completing coding challenges and
            building projects. You'll also earn verified certifications along
            the way. There are thousands of videos, articles, and interactive
            coding lessons - all freely available to the public.
          </p>
        </div>
        <br />
        <div>
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            SheCodes
          </a>
          <p>
            SheCodes is here to help provide women in developing countries with
            the opportunity to learn how to code for free. SheCodes offers a
            solid introduction to product development, product design and
            product management.
          </p>
        </div>
        <br />
        <div>
          <a
            href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            The Coding Train
          </a>
          <p>
            The Coding Train is on its way with creative coding video tutorials
            on subjects ranging from the basics of programming languages like
            JavaScript to algorithmic art, machine learning, simulation,
            generative poetry, and more.
          </p>
        </div>
        <br />
        <div>
          <a
            href="https://www.traversymedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Traversy Media
          </a>
          <p>
            Practical project-based courses that are easy to understand and
            straight to the point with no fluff.
          </p>
        </div>
        <br />
        <h2>Coding Bootcamps (Big Bucks)</h2>
        <div>
          <a
            href="https://www.ironhack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            IronHack
          </a>
          <p>
            Immersive Web Development, UX/UI Design, Data Analytics, and
            Cybersecurity courses. Formats tailored to your needs: remote or on
            campus, full-time or part-time.
          </p>
        </div>
        <br />
        <div>
          <a
            href="https://brainstation.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            BrainStation
          </a>
          <p>
            BrainStation coding bootcamps are 400-hour, project-based programs
            that have helped thousands of bootcamp students launch new careers
            in the tech industry. Gain in-demand technical skills with full-time
            or part-time bootcamps in Web Development, UX Design, and Data
            Science.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Resources;
