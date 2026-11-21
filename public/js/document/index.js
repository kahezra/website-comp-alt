let nav = document.querySelector('header .navbar');
// CSS STYLING
function scrollEvent() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            if (nav) {
                nav.style = `position: fixed;`;
            }
        }
        else {
            if (nav) {
                nav.style = `position: relative;`;
            }
        }
    });
}
scrollEvent();
export {};
//# sourceMappingURL=index.js.map