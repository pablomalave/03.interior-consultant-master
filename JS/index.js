let modeButton = document.querySelector("input#mode-checkbox");
modeButton.checked = false;

let menuButton = document.querySelector("input#menu-checkbox");
menuButton.checked = false;

modeButton.addEventListener("change", modeButtonChange);

menuButton.addEventListener("change", setMenuButton);

function modeButtonChange() {
    if (modeButton.checked) {
        lightMode();
    } else {
        darkMode();
    }
}

function lightMode() {
    //body
    document.querySelector("body").classList.add("bgLight", "textLight");
    //h2
    document.querySelector("h2").classList.add("borderLight");
    //nav
    document.querySelector("nav").classList.add("bgLight");
    let navItems = document.querySelectorAll("li a");
    navItems.forEach(item => {
        item.classList.add("textLight");
    });
    //a
    document.querySelector("main a").classList.add("textLight");
    //.main-example-author
    document.querySelector(".main-example-author").classList.add("bgLight2");
    //footer
    document.querySelector("footer").classList.add("textLight");
    //main a img
    document.querySelector("main a img").setAttribute("src","./images/trending_flat_black_24dp.svg");
    //label#mobile-button span img
    setMenuButton();
}

function darkMode() {
    //body
    document.querySelector("body").classList.remove("bgLight", "textLight");
    //h2
    document.querySelector("h2").classList.remove("borderLight");
    //nav
    document.querySelector("nav").classList.remove("bgLight");
    let navItems = document.querySelectorAll("li a");
    navItems.forEach(item => {
        item.classList.remove("textLight");
    });
    //a
    document.querySelector("main a").classList.remove("textLight");
    //.main-example-author
    document.querySelector(".main-example-author").classList.remove("bgLight2");
    //footer
    document.querySelector("footer").classList.remove("textLight");
    //main a img
    document.querySelector("main a img").setAttribute("src","./images/trending_flat_white_24dp.svg");
    //label#mobile-button span img
    setMenuButton();
}

function setMenuButton() {
    let color = "white";
    let icon = "menu";

    if (modeButton.checked) {
        color = "black";
    }

    if (menuButton.checked) {
        icon = "close";
    }

    let path = "./images/"+ icon +"_"+color+"_24dp.svg";

    document.querySelector("label#mobile-button span img").setAttribute("src", path);
}
