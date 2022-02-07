import styles from '../styles/Home.module.css';

function Welcome() {
  return (
    <div>
      <h1 className={styles.title}>Welcome, Friend!</h1>
      <p className={styles.description}>
        If you&apos;re here it means you&apos;re interested in tech and want to
        know what your next steps should be. <br />
        I&apos;m here to help!
      </p>
      <div style={{ display: 'flex' }}>
        <iframe
          poster="images/video.png"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V-xS3g1RLhQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}

export default Welcome;
