pref_env = "./img/ENVASES/";

window.onload = function () {
    gettingAllImgNames();
};

/* 
*       <div class="col-6 col-lg-2 mb-4 gx-lg-3 d-flex justify-content-center">
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
    var node = document.createElement('div');
    node.setAttribute('class', 'col-6 col-lg-2 mb-4 gx-lg-3 d-flex justify-content-center');
    var card_node = document.createElement('div');
    card_node.setAttribute('class', 'card text-center');
    var img_node = document.createElement('img');
    img_node.setAttribute('src', img_url);
    img_node.setAttribute('class', "card-img-top");
    img_node.setAttribute('alt', descripcion);
    var card_body = document.createElement('div');
    card_body.setAttribute('class', 'card-body');
    var node_description = document.createNode('p');
    var text_node = document.createTextNode(descripcion);
    node_description.appendChild(text_node);
    card_body.appendChild(node_description);
    card_node.appendChild(img_node);
    card_node.appendChild(card_body);
    node.appendChild(card_node);
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
