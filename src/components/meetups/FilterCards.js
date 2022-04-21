import styles from './FilterCards.module.css';

function FilterCards(props) {
  return (
    <div
      className={`${styles.container} ${
        props.darkMode ? styles.darkMode : ""
      }`}
    >
      <div className={styles.bar}>
        zone de filtres 👷‍♂️
      </div>
    </div>
  );
}

export default FilterCards;