import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div className={styles.layout}>
      <button>theme</button>
      <MainNavigation allMeetups={props.meetupsLength} />
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
