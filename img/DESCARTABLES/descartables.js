pref_env = "./img/DESCARTABLES/";

window.onload = function () {
    gettingAllImgNames();
};

/* *       <div class="col-6 col-lg-2 mb-4 gx-lg-3 d-flex justify-content-center">
            <div class="card text-center">
                <img src="./img/ENVASES/1000LAVANDINA.png" class="card-img-top" alt="Envase" />
                <div class="card-body">
                    <p class="card-text">Envase 1lt Lavandina</p>
                    <p class="card-text">Material: PET</p>
                </div>
            </div>
        </div>
 * */

function processImgs(img_url, descripcion) {
    var node = document.createElement("div");
    node.setAttribute("class", "col-6 col-lg-2 mb-4 gx-lg-3 d-flex justify-content-center");
    var card_node = document.createElement("div");
    card_node.setAttribute("class", "card text-center");
    var img_node = document.createElement("img");
    img_node.setAttribute("src", pref_env+img_url);
    img_node.setAttribute("class", "card-img-top");
    img_node.setAttribute("alt", descripcion);
    var card_body = document.createElement("div");
    card_body.setAttribute("class", "card-body");
    var node_description = document.createElement("p");
    var text_node = document.createTextNode(descripcion);
    node_description.appendChild(text_node);
    card_body.appendChild(node_description);
    card_node.appendChild(img_node);
    card_node.appendChild(card_body);
    node.appendChild(card_node);
    document.getElementById('row').appendChild(node);
}

async function gettingAllImgNames() {
    await fetch(pref_env + "files.json", {
        Origin: "https://diarle-junin.github.io/",
        ContentType: "text/plain"
    })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            var dataObj = JSON.parse(data);
            for (var i = 0; i < dataObj.envases.length; i++ ) {
                console.log("soy el descartable: ", dataObj.descartables[i] + " nombre: "+dataObj.nombres[i]);
                processImgs(dataObj.descartables[i], dataObj.nombres[i]);
            }
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
