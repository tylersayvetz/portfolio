const elements = document.getElementsByClassName('content');

[...elements].forEach((element) => {
    // describes whether user fired a touchmove event
    let movingTouch = false;

    //vanilla mouseenter/leave events.
    element.addEventListener('mouseenter', slideOut);
    element.addEventListener('mouseleave', slideIn);

    //At touch start, set movingTouch to false. If the user triggers a move event at any time, set movingTouch to true.
    element.addEventListener('touchstart', () => { movingTouch = false });
    element.addEventListener('touchmove', () => { movingTouch = true })

    //At the end of a touch, determine if it was a click or a move.
    element.addEventListener('touchend', (e) => {
      if (movingTouch === false) toggleSlide(e)
    })
});

function slideOut(e) {
  e.target.firstChild.setAttribute('class', 'slide-drawer');
}

function slideIn(e) {
  e.target.firstChild.setAttribute('class', 'drawer');
}

function toggleSlide(e) {
if (e.target.firstChild.className === 'slide-drawer') slideIn(e)
else slideOut(e);
}
