import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div
      className={`${styles.layout} ${
        props.darkMode ? styles.darkMode : ""
      }`}
    >
      <MainNavigation allMeetups={props.meetupsLength} darkMode={props.darkMode} />
      <main>
        {props.children}
      </main>
      <footer className={styles.footer}>
        <div>© 2022 mikaelborges.com</div>
        <div>tous droits réservés</div>
      </footer>
    </div>
  );
}

export default Layout;
