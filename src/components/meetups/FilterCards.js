import styles from './FilterCards.module.css';

function FilterCards(props) {
  return (
    <div
      className={`${styles.container} ${
        props.darkMode ? styles.darkMode : ""
      }`}
    >
      <div className={styles.bar}>
        filter zone 👷‍♂️
      </div>
    </div>
  );
}

export default FilterCards;