import styles from '../styles/Home.module.css';
import Header from '../components/home-button';

function Communities() {
  return (
    <>
      <div className={styles.subtitles}>
        <Header />
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
            className={styles.link}
          >
            South Florida Tech Hub Slack
          </a>
          <p>
            Tech community based in South Florida but welcoming to anyone
            looking to get into tech
          </p>
        </div>
        <br />
        <div>
          <a
            href="https://definitelywork.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Definitely Work Slack
          </a>
          <p>
            Tech community made up of beginners and professionals looking to
            help and support each other
          </p>
        </div>
        <br />
        <div>
          <a
            href="https://queerjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Queer.JS Discord
          </a>
          <p>
            Worldwide queer tech community built to support LGBTQ+ individuals
            in tech
          </p>
        </div>
      </div>
    </>
  );
}

export default Communities;
