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


//Collapse all drawers. Then slide out the selected drawer.
function slideOut(e) {
  const cards = document.getElementById('_contentContainer');
  const drawers = Array.from(cards.childNodes).map(node => node.firstChild)
  for (const drawer of drawers) {
    drawer.setAttribute('class', 'drawer')
  }

  e.target.firstChild.setAttribute('class', 'drawer-out');
}

function slideIn(e) {
  e.target.firstChild.setAttribute('class', 'drawer');
}

//Do nothing when user taps/clicks on a link within the drawer. Otherwise toggle the drawer.
function toggleSlide(e) {
  if (eventExceptions(e)) return;

  return (e.target.firstChild.className === 'drawer-out') ?  slideIn(e) : slideOut(e);
}

//Determines if the passed event meets any of the defined criteria
function eventExceptions(e) {
  const Tags = {
    A: 'A'
  }
  //Tag name exeptions
  if (Tags[e.target.tagName]) return true

  return false;
}
