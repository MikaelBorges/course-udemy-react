import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div className={styles.layout}>
      <button className={styles.themeButton}>theme</button>
      <MainNavigation allMeetups={props.meetupsLength} />
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
