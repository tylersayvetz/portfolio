const elements = document.getElementsByClassName('content')
console.log(elements);

[...elements].forEach(element => {
  element.addEventListener('mouseenter', (e) => {
    e.target.firstChild.setAttribute('class', 'slide-drawer')

  } )
  element.addEventListener('mouseleave', (e) => {
    e.target.firstChild.setAttribute('class', 'drawer')
  } )
})

