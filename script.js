var menu = document.getElementById("div-menu");

var celu = (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))? true : false;
var low_width = false;

window.onscroll = function () {
    var header = document.getElementById("header");
    if (window.pageYOffset > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    hideShowDivMenu();
};

function resizeProductos() {
    var height = document.getElementById("header").offsetHeight;
    document.getElementById("productos").style.marginTop = height-45 + "px";
}

window.onresize = resizeProductos();

window.onload = function () {
    low_width = (window.innerWidth < 768) ? true : false;
    console.log(window.innerWidth);
};

function hideShowDivMenu() {
    var top = document.body.scrollTop + document.documentElement.scrollTop == 0;
    if (!top && low_width) {
        document.getElementById("div-menu").style.opacity = 0;
        document.getElementById("div-menu").style.height = 0;
    } else {
        document.getElementById("div-menu").style.opacity = 1;
        document.getElementById("div-menu").style.height = 'fit-content';
    }

    //document.getElementById('div-menu').style.display = top ? 'flex' : 'none';
    // document.getElementById('div-menu').style.display = top ? 'none' : 'flex';
}
