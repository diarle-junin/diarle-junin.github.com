pref_env = "/img/ENVASES/";

window.onload = function() {
    gettingAllImgNames();
};

function processImgs(img) {
    console.log(img);
}

function gettingAllImgNames() {
    fetch(pref_env+"files.json").then(env => env.json()).then(fileList => 
        {
           console.log(fileList); 
        });
}