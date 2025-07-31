import styles from "../styles/Blog.module.css";

const RefundCancellation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Refund & Cancellation Policy</h1>

      <p className={styles.paragraph}>
        Upon completing a Transaction, you are entering into a legally binding and enforceable agreement with us to purchase the product and/or service. After this point, you may cancel the Transaction only if specifically provided for on the Platform. Any such cancellation is subject to the terms mentioned on the Platform.
      </p>

      <p className={styles.paragraph}>
        We retain full discretion in approving cancellation requests and may request additional details before processing them.
      </p>

      <h2 className={styles.subheading}>Refund Eligibility</h2>
      <p className={styles.paragraph}>
        Once you have received the product and/or service, you may only request a refund or replacement if it does not match the description provided on the Platform.
      </p>

      <p className={styles.paragraph}>
        Refund requests must be submitted within three days from the date of the Transaction or as prescribed on the Platform (not less than three days).
      </p>

      <h2 className={styles.subheading}>How to Request a Refund</h2>
      <p className={styles.paragraph}>
        To submit a refund request, raise a ticket or contact us at{" "}
        <a href="mailto:seller+3bee9af6aada46ca8a9583df4ffc1490@instamojo.com">
          seller+3bee9af6aada46ca8a9583df4ffc1490@instamojo.com
        </a>. Your request should include a clear and specific reason, the terms violated, and any relevant proof, if required.
      </p>

      <p className={styles.paragraph}>
        We will review your request and may ask for further clarification or evidence before making a decision. Whether a refund is approved is at our sole discretion.
      </p>

      <h2 className={styles.subheading}>Need Help?</h2>
      <p className={styles.paragraph}>
        If you have any concerns or questions about your refund or cancellation request, feel free to contact us.
      </p>
    </div>
  );
};

export default RefundCancellation;