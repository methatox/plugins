
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (event) => {
        debugger;
        event.target.style.background = override.adding;
        event.target.setAttribute("title", "detail.beeingAddet")
    }, false);
}