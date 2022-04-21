import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';
import logo from '../../images/airvnv_dark.png';
import logoDark from '../../images/airvnv_blue.png';

function Layout(props) {
  return (
    <div
      className={`${styles.layout} ${
        props.darkMode ? styles.darkMode : ""
      }`}
    >

    <a
      href={'/'}
      title={'Accueil'}
      className={`${styles.logoContainer} ${
        props.darkMode ? styles.logoContainerDark : ""
      }`}
    >
      <img
        className={styles.logo}
        src={props.darkMode ? logoDark : logo}
        alt='logo'
      />
      <span>airvnv</span>
    </a>

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
