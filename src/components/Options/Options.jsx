import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button 
          className={`${styles.button} ${styles.good}`}
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </button>
        <button 
          className={`${styles.button} ${styles.neutral}`}
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button 
          className={`${styles.button} ${styles.bad}`}
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </div>
      
      {/* Step 4: Reset button - only show if there's feedback */}
      {totalFeedback > 0 && (
        <button 
          className={`${styles.button} ${styles.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;