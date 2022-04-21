import MeetupItem from "./MeetupItem";
import styles from './MeetupList.module.css';
import {useEffect,useRef} from 'react';

let saveOldScroll = 0;

function MeetupList(props) {

  function removeHandler(id) {
    props.removeMeetup(id);
  }

  const ul = useRef();
  // console.log('ul.current', ul.current?.scrollTop)
  /* useEffect(() => {
    if(!!window.IntersectionObserver) {
      let observer = new IntersectionObserver(entries => { 
        entries.forEach(entry => {
          // console.log(entry);
          // console.log(window.scrollY);
          const direction = window.scrollY > saveOldScroll ? 'down' : 'up';
          // console.log('direction', direction);
          if (entry.isIntersecting) {
            console.log('nav réduite');
            props.changeNav(false);
          }
          if (!entry.isIntersecting && direction === 'up') {
            console.log('nav agrandie');
            props.changeNav(true);
          }
          saveOldScroll = window.scrollY;
        });
      });
      document.querySelectorAll('.test-1').forEach(img => { observer.observe(img) });
    }
  }, []); */

  return (
    <ul className={styles.allMeetups} ref={ul}>
      {props.meetups.map((meetup, index) => (
        <MeetupItem
          index={index}
          key={index}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          removeHandle={removeHandler}
          meetupItemText={props.cardView}
          darkMode={props.darkMode}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
