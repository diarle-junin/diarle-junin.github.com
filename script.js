window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};


function resizeProductos() {
    console.log('resize?');
    var height = document.getElementById("header").offsetHeight;
    document.getElementById("productos").style.marginTop = height + 'px';    
}


window.onresize = resizeProductos();
