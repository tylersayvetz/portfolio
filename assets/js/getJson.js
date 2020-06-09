const contentArea = document.getElementById('_contentContainer');

data.forEach((entry, i) => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'container content');
    newDiv.setAttribute('id', 'content_' + i);
    newDiv.setAttribute('style', `background-image: url('${entry.image}')`);
    addDrawer(entry, newDiv);
    contentArea.append(newDiv);
});

function addDrawer(data, parent) {
    const drawer = document.createElement('div');
    drawer.setAttribute('class', 'drawer');
    drawer.innerHTML = makeDrawerContent(data);
    parent.append(drawer);
}

function makeDrawerContent(data) {
    return (
        `
            <h2>${data.title}</h2>
            <p>${data.content}</p>
            <a href="${data.gh}">Project Repository</a>
            <a href="${data.link}">${data.linkText}</a>
        `
    );
}
