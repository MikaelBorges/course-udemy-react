import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div
      className={`${styles.layout} ${
        props.darkMode ? styles.darkMode : ""
      }`}
    >
      <MainNavigation isBigNav={props.isBigNav} allMeetups={props.meetupsLength} darkMode={props.darkMode} />
      <main>
        {props.children}
      </main>
      {!props.isLoading && (
        <footer className={styles.footer}>
          © 2022 mikaelborges.com
        </footer>
      )}
      
    </div>
  );
}

export default Layout;
