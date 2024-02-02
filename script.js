const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');



    openMenu.addEventListener('click', ()=> {
    mainMenu.classList.toggle ('hide');
});
//openMenu.addEventListener('click',close);

//openMenu.onclick = function (e) {
//    e.preventDefault();
//    mainMenu.style.display = "flex";
 //   mainMenu.style.top = '0';
//}

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}
