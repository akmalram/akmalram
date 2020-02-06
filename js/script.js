const ready = (callback) => {
    window.addEventListener('DOMContentLoaded', (e) => {
        callback(e);
    })
}

ready(() => {
    const MenuClassToggler = () => {
        const btn = document.querySelector('nav .toggle-btn input');
        const menu = document.querySelector('nav .nav-menu');
        const navcontacts = document.querySelector('nav .nav-contacts');

        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
            navcontacts.classList.toggle('active');
            document.querySelector('body').classList.toggle('overhidden');
        });
    }

    MenuClassToggler();
});

ready(() => {
    if(window.navigator.getBattery) {
        const my = window.navigator.getBattery();
        my.then(data => console.log(data));
    }
})


// const fontAwesomeFreeObserver = new FontFaceObserver('Font Awesome 5 Free');
// const fontAwesomeBrandsObserver = new FontFaceObserver('Font Awesome 5 Brands');
// const gilroyObserver = new FontFaceObserver('Gilroy');

// Promise.all([
//     fontAwesomeFreeObserver.load(),
//     fontAwesomeBrandsObserver.load(),
//     gilroyObserver.load()
// ]).then(() => {
//     document.querySelector('html').classList.add('fonts-loaded');
// });