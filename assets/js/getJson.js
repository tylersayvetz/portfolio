
const contentArea = document.getElementById('_contentContainer');

data.forEach((entry, i) => {
  const newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'container content')
  newDiv.setAttribute('id', i)
  newDiv.setAttribute('style', `background-image: url('${entry.image}')`)
  addDrawer(entry, newDiv, i)
  contentArea.append(newDiv);
})

function addDrawer(data, parent, i) {
  const drawer = document.createElement('div')
  drawer.setAttribute('class', 'drawer')
  drawer.innerHTML = makeContent(data)
  parent.append(drawer)
}

function makeContent(data) {
  return (
    `<p>${data.content}</p>
    <a href="${data.link}">See More</a>
    
    `
  )
}
