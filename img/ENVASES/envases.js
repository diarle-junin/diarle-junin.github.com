pref_env = "./img/ENVASES/";

window.onload = function () {
    gettingAllImgNames();
};

function processImgs(img) {
    console.log(img);
}

async function gettingAllImgNames() {
    await fetch(pref_env + "files.json", { 
        "Origin": "https://diarle-junin.github.io/",
        ContentType: 'text/plain' })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            console.log(data ? JSON.parse(data) : {});
        })
        .catch((error) => {
            console.log(error);
        });

    /* (env => env.json()).then(fileList => 
        {
           console.log(fileList);
            console.log(fileList[0]);
        });
        */
}
