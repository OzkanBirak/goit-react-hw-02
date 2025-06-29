import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Feedback Statistics</h2>
      
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <span className={styles.label}>Good:</span>
          <span className={`${styles.value} ${styles.good}`}>{good}</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.label}>Neutral:</span>
          <span className={`${styles.value} ${styles.neutral}`}>{neutral}</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.label}>Bad:</span>
          <span className={`${styles.value} ${styles.bad}`}>{bad}</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.label}>Total:</span>
          <span className={styles.value}>{total}</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.label}>Positive:</span>
          <span className={`${styles.value} ${styles.percentage}`}>{positivePercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;