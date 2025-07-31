import styles from "../styles/Blog.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>

      <p className={styles.paragraph}>
        We’d love to hear from you! If you have any questions, feedback, or service inquiries, feel free to reach out.
      </p>

      <h2 className={styles.subheading}>Phone</h2>
      <p className={styles.paragraph}>
        <a href="tel:+919148644611">+91 91486 44611</a>
      </p>
      <p className={styles.paragraph}>
        <a href="tel:+919844299703">+91 98442 99703</a>
      </p>

      <h2 className={styles.subheading}>Email</h2>
      <p className={styles.paragraph}>
        <a href="mailto:gagankumar8294@gmail.com">gagankumar8294@gmail.com</a>
      </p>

      <h2 className={styles.subheading}>Business Hours</h2>
      <p className={styles.paragraph}>
        Monday to Saturday: 9:00 AM – 6:00 PM<br />
        Sunday: Closed
      </p>

      <h2 className={styles.subheading}>Address</h2>
      <p className={styles.paragraph}>
        Rajarajeshwari Nagar, Bangalore, Karnataka<br />
        India, 560098
      </p>
    </div>
  );
};

export default Contact;
