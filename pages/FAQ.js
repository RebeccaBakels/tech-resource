import styles from '../styles/Home.module.css';
import Header from '../components/home-button';

function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.subtitles}>
        <Header />
        <h2 style={{ marginTop: '0', marginBottom: '0' }}>FAQ</h2>
        <p>Commonly asked questions I get from people looking into tech</p>
      </div>

      <div className={styles.sub}>
        <h3> Do I need to be good at math?</h3>
        <p>
          Not at all, you need to have basic math/order of operations knowledge
          for most developer jobs
        </p>
        <h3>What if I&apos;m not smart enough?</h3>
        <p>
          You are. I thought the same but you get out what you put into it.
          It&apos;s not about being &quot;smart&quot; it&apos;s about being
          committed fully
        </p>
        <h3> Whats the worst part of the job?</h3>
        <p>
          Imposter syndrome, my own brain getting in the way, telling me
          I&apos;m not meant to be in this field, being self-defeating. You need
          to be comfortable with not knowing the answers and know the right
          place to find them or reach out for help.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
