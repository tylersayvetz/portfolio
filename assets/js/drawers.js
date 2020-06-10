const elements = document.getElementsByClassName('content');

[...elements].forEach((element) => {
    // describes whether user fired a touchmove event
    let movingTouch = false;

    //vanilla mouseenter/leave events.
    element.addEventListener('mouseenter', slideOut);
    element.addEventListener('mouseleave', slideIn);

    //At touch start, set movingTouch to false. If the user triggers a move event at any time, set movingTouch to true.
    element.addEventListener('touchstart', () => {
        movingTouch = false;
    });
    element.addEventListener('touchmove', () => {
        movingTouch = true;
    });

    //At the end of a touch, determine if it was a click or a move.
    element.addEventListener('touchend', (e) => {
        if (movingTouch === false) toggleSlide(e);
    });
});

//Collapse all drawers. Then slide out the selected drawer.
function slideOut(e) {
    const container = document.getElementById('_contentContainer');
    const cards = Array.from(container.childNodes).filter((card) => card !== e.target);
    const drawers = cards.map((card) => card.firstChild);

    //Collapse and add filtering
    for (const card of cards) {
        card.setAttribute('class', 'container content darkened');
        card.firstChild.setAttribute('class', 'drawer');
    }
    e.target.setAttribute('class', 'container content')
    e.target.firstChild.setAttribute('class', 'drawer-out');
}

function slideIn(e) {
    const container = document.getElementById('_contentContainer');
    for (const card of Array.from(container.childNodes)) {
        card.setAttribute('class', 'container content');
    }

    e.target.firstChild.setAttribute('class', 'drawer');
}

//Do nothing when user taps/clicks on a link within the drawer. Otherwise toggle the drawer.
function toggleSlide(e) {
    if (eventExceptions(e)) return;

    return e.target.firstChild.className === 'drawer-out' ? slideIn(e) : slideOut(e);
}

//Determines if the passed event meets any of the defined criteria
function eventExceptions(e) {
    const Tags = {
        A: 'A'
    };
    //Tag name exeptions
    if (Tags[e.target.tagName]) return true;

    return false;
}
