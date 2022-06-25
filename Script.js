var N = 8;
var points = 0.;

var links = {
    "grass" : "grass.png",
    "head" : "head.png",
    "rear" : "rear.png"
};



var body = document.getElementsByTagName("body");

for(var i = 0; i < N; i++){
    for(var j = 0; j < N; j++){
        var imm = createImage();
        body[0].appendChild(imm);
    }
    var aCapo = document.createElement("br");
    body[0].appendChild(aCapo);
}

var punti = document.createElement("div");
punti.textContent = 0.;
body[0].appendChild(punti);


function createImage(){
    var ret = document.createElement("img");
    ret.setAttribute("src", links["grass"]);

    var click = function(){
        switch (ret.getAttribute("src")) {
            case links["grass"]:
                points += 0
                punti.textContent = points
                break;
            case links["head"]:
                points += 100
                punti.textContent = points
                break;
            case links["rear"]:
                points -= 200.;
                punti.textContent = points
                break;
            default:
          }
        if(points<0){
            body[0].innerHTML = "HAI PERSO !"
        }else if(points>=1000){
            body[0].innerHTML = "HAI VINTO FRATM !"
        }
    }
    ret.addEventListener("click", click);

    var changeImage = function(){
        console.log("cambia");
        var random = Math.floor(Math.random() * 3);
        
        switch (random) {
            case 0:
                ret.setAttribute("src", links["grass"])
                break;
            case 1:
                ret.setAttribute("src", links["head"])
                break;
            case 2:
                ret.setAttribute("src", links["rear"])
                break;
            default:
          }
    }
    setInterval(changeImage, 1000)
    
    return ret;
}