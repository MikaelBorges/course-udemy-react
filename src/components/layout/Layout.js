import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';
import logo from '../../images/airvnv_pink.png';

function Layout(props) {
  return (
    <div
      className={`${styles.layout} ${
        props.darkMode ? styles.darkMode : ""
      }`}
    >

      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={logo}
          alt='logo'
        />
        <span>airvnv</span>
      </div>

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
