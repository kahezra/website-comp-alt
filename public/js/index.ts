let nav = document.querySelector<HTMLElement>('header .navbar')

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        if(nav) {
            nav.style = `position: fixed;`; 
        }
    } else {
        if(nav) {
            nav.style = `position: relative;`;
        }
    }
});
