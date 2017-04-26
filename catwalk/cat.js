
var img = document.getElementsByTagName('img')[0];

var miStorage = [posicion= localStorage.getItem("posicion") ,sentido= localStorage.getItem("sentido")];
var walkForwards = localStorage.getItem("sentido");
    if(sentido == "false"){
        walkForwards = false;
    }


function catWalk() {
    var currentLeft = parseInt(localStorage.getItem("posicion"));
    
    
    console.log(posicion);
    console.log(sentido);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
    
    localStorage.setItem("posicion", parseInt(img.style.left));
    if(walkForwards == false){
        localStorage.setItem("sentido", false);
    }else{
        localStorage.setItem("sentido", true);
    }
    
    
}
window.setInterval(catWalk, 50);