import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext, useRef, useEffect, useState } from "react";
import FavoritesContext from "../../store/favorites-context";

let tab = [];

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler(e) {
    e.stopPropagation();
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  function addToRecycleBin(e, id) {
    e.stopPropagation();
    props.removeHandle(id);
  }

  function editMeetup(e, id) {
    console.log("editer");
    e.stopPropagation();
    
  }

  function viewMeetup(id) {
    console.log("voir");
    
  }

  // const [first, setFirst] = useState(true);
  const li = useRef();
  
  useEffect(() => {
    let curOffset = li.current.offsetTop;
    console.log('current offsetTop', curOffset);
    tab.push(curOffset);
    console.log('tab', tab);

    /* console.log('first', first);
    if (first) {
      setFirst(false);
    }
    else {
      console.log('current offsetTop', curOffset);
    } */
  }, []);

  /* window.onscroll = function (e) {  
  // called when the window is scrolled.
  console.log(window.scrollY);
  } */

  /* var el = document.getElementsByTagName('li');
  var element = document.getElementsByTagName('li');
  var topPos = element.getBoundingClientRect().top + window.scrollY;
  var leftPos = element.getBoundingClientRect().left + window.scrollX;
  console.log('element', element)
  console.log('topPos', topPos)
  console.log('leftPos', leftPos) */

  // STICKY AU SCROLL :
  /* $(window).on('resize scroll', function() {
    var scrollPosition = $(window).scrollTop();
    $('.stw-module-1').each(function() {
        var $self = $(this),
        topPosition = $self.offset().top + parseInt($self.css('padding-top'), 10), // prise en compte du padding du module
        bottomPosition = topPosition + $self.height() - parseInt($self.css('padding-bottom'), 10) - $self.find('.button').height(),
        topPart = $self.find('.top-part'),
        stickyState = topPart.hasClass('sticky');

        if ((scrollPosition <= topPosition) && stickyState) {
            topPart.removeClass('sticky');
        }
        
        if ( (scrollPosition > topPosition) && (scrollPosition <= bottomPosition) && !stickyState ) {
            topPart.addClass('sticky').fadeIn(250);
        }

        if ((scrollPosition > bottomPosition) && stickyState) {
            topPart.fadeOut(250, function() {
                $(this).removeClass('sticky');
            });
        }
    });
  }); */

  return (
    <li className={`${styles.meetup} test-${props.index}`} ref={li}>
      <Card darkMode={props.darkMode}>
        <div className={styles.meetupCard} onClick={() => viewMeetup(props.id)}>
          <div className={styles.meetupImagePart}>
            <div className={styles.actions}>
              <div className={styles.actionsLeft}>
                <button
                  className={`${styles.action} ${
                    props.darkMode ? styles.darkMode : ""
                  }`}
                  onClick={(e) => editMeetup(e, props.id)}
                >
                  🖍
                </button>
                <button
                  className={`${styles.action} ${
                    props.darkMode ? styles.darkMode : ""
                  }`}
                  onClick={(e) => addToRecycleBin(e, props.id)}
                >
                  🗑
                </button>
              </div>
              <div className={styles.actionsRight}>
                <button
                  className={`${styles.action} ${
                    props.darkMode ? styles.darkMode : ""
                  } ${
                    itemIsFavorite ? styles.activeFavorite : ""
                  }`}
                  onClick={toggleFavoriteStatusHandler}
                >
                  ❤️
                </button>
              </div>
            </div>
            <img
              src={props.image}
              className={`${
                props.meetupItemText ? "" : styles.roundedImageMeetup
              }`}
            />
          </div>
          {props.meetupItemText && (props.title || props.address || props.description) && (
            <div
              className={`${styles.meetupTextPart} ${
                props.darkMode ? styles.darkMode : ""
              }`}
            >
              {props.title && (
                <h3 className={`${styles.meetupTextElement} ${styles.titleMeetup}`}>{props.title}</h3>
              )}

              {props.address && (
                <address className={styles.meetupTextElement}>{props.address}</address>
              )}

              {props.description && (
                <p className={styles.meetupTextElement}>{props.description}</p>
              )}
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
