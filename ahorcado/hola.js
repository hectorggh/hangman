/*var num=[2,3,4,5];
var griego=["alpha", "gamma", "delta"];
var numeros=[10,-10,-5,-3,2,1];

num.splice(1,1);
alert(num);

griego.splice(1,0,"beta");
alert(griego);

numeros.splice(1,3,9,8,7,6,5,4,3);
alert(numeros);

var nombre =["Héctor"];
var apellidos = ["Gutiérrez"];
var array = nombre.concat(apellidos);
var color=["Azul"];
array = color.concat(array);
array.splice(0,1);

var otroarray =[];
otroarray.splice(0,1,5);

otroarray.push("javascript");

otroarray = array.concat(otroarray);

alert(otroarray);



var arr=["JavaScript", "Python", "Ruby", "Elixir"];
arr.shift()
arr.pop();

arr= arr.concat("Haskell", "Clojure");

arr.splice(2,2);
arr.unshift("JavaScript");
arr.push("Elixir");


alert(arr);*/


/*var abecedario =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w","x","y","z"];

var string ="the quick brown fox jumps over the lazy do";

var contador = 0;

var array = string.split("");

for (i = 0; i < array.length; i++) { 
    for (j = 0; j < abecedario.length; j++){
        if(array[i] == abecedario[j]){
            contador++;
            abecedario.splice(j,1);
        }
    }
}

if(contador==26){
    alert("pangram");
}else{
    alert("No hay pangram, faltan las letras: " + abecedario);
}*/




/*var array=[];

for (i = 1; i < 100; i++) { 
    if(i%3==0){
        array.push("Fizz");
    }else if(i%5==0){
        ;array.push("FizzBuzz");
    }else if(i%15==0){
        array.push("Buzz")
    }else{
        array.push(i);
    }

}

alert(array);*/



/*var object = {
    nombre: "Hector",
    apellidos: "Gutierrez",
    raza: "blanca"
};

var i;

for (i in object) {
    if( i == "raza"){
       alert(object[i]);
    }
}*/





//function calculadora (fn,a,b=0){
//    return fn(a,b);
//}
//
//function suma(a,b){
//    return (a+b);
//}
//
//function resta(a,b){
//    return (a-b);
//}
//
//function modulo(a,b){
//    return a%2;
//}
//
//function division(a,b){
//    return (a/b);
//}
//
//function multiplodecinco (a){
//    if ((a%5) == 0){
//       return true;
//    }
//    else{
//        return false;
//    }
//}
////Terminamos la calculadora

// Function map

/*function map(array, fn){
    var arrayModificado = new Array();
    for (var i = 0; i < array.length; i++){
        arrayModificado[i] = fn(array[i]);
    }
    return arrayModificado;
}

map([1,2,3,4], function(val){
   return val * 2; 
});
*/

/*
function reject(array, fn){
    var arrayMod = [];
    for (var i in array){
        if(!fn(array[i])){
            arrayMod.push(array[i]);
        }
    }
    return arrayMod;
}

mayorquedos = reject([1,2,3,4], function (val){
    return val > 2;
});

modulodedos = reject ([1,2,3,4], function (val){
    return val === 2;
})
*/

/*var timerID = setInterval(function(){
    alert("miralo");
}, 1000);

setTimeout(function(){
    clearTimeout(timerID);
}, 3000);

*/


/*function createCounter(x){
    return function incrementa(n){
        return x +=n;
    } 
}

var primercontador = createCounter(7);

console.log(primercontador(5));
console.log(primercontador(3));
console.log(primercontador(2));


*/


/////////////////////////////     EJERCICIOS  /////////////////////////////////////////////////////////////////////////////////////////////////

//EJERCICIO 1 NESTED3

//rotate([1,2,3], 1) // [3,1,2]
//rotate([1,2,3], 2) // [2,3,1]
//rotate([1,2,3], 3) // [1,2,3]

//function rotate(array, n){
//    var narray = [];
//    for(i in array){
//        if(i==0){
//            narray[i]=array[(array.length)-n];
//        }else{
//            if(n>i){
//                var x = (i-n) ;
//                narray[i]=array[x];
//            }else{
//                narray[i]=array[i-n];
//            }
//        }
//    }
//    return narray;
//}
//
//
//console.log(rotate([1,2,3,4], 2));



/////////////////////// EJERCICIOS VIERNES - CLOSURES ///////////////////////////////////////////////////////////////////
////////EJERCICIO - 1 ---------------------------------------------------------------------------------------------------------------

//function countdown(number){
//    if (number != 0){
//        var intervalo = setInterval(function(){ 
//            console.log(number);
//            number--;
//            if (number == 0){
//                clearInterval(intervalo);
//                setTimeout(function(){
//                    console.log("DONE");
//                }, 1000);
//            }
//        }, 1000);
//    }  
//}
//
//countdown(6);


////////EJERCICIO - 2 ------------------------------------------------------------------------------------------------------------

//function randomGame(){
//    var counter = 0;
//    var intervalo = setInterval(function(){
//        var naleatorio = Math.random();
//        if (naleatorio < 0.75){
//            console.log(naleatorio);
//            counter++;
//        }else{
//            console.log(counter);
//            clearInterval(intervalo);
//        }
//    },1000)
//}
//
//randomGame();


//////////EJERCICIO - 3 ------------------------------------------------------------------------------------------------------------------

//find([8,11,4,27], function(val){return val >= 10}); // 11


//function find (array,fn){
//    var nar = [];
//    for(i in array){
//        if (fn(array[i])){
//            nar.push(array[i]);
//        }
//    }
//    return nar;
//}
//
//alert (find([8,11,4,27], function(val){return val >= 10}));


////////////////EJERCICIO - 4 ----------------------------------------------------------------------------------------------------------------


//function findIndex (array,fn){
//    var nar = [];
//    for(i in array){
//        if (fn(array[i])){
//            nar.push(i);
//        }
//    }
//    return nar[0];
//}
//
//alert (findIndex([8,11,4,27], function(val){return val > 9}));


///////////-------------- El ahorcado ----------------------------------------------------------------------------------------------------------


var letras = ["undefined","a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
var vidas = 1;
var espacios = 0;
var correcto = 0;
var time = 60;
var marcador = [win= localStorage.getItem("win") ,lose= localStorage.getItem("lose")];

var buttons = document.getElementsByTagName("button");
document.getElementById("win").innerHTML=win;
document.getElementById("lose").innerHTML=lose;
document.getElementById("timer").innerHTML=time;

for (var i=1; i<buttons.length; i++){
    buttons[i].innerHTML=letras[i];
    buttons[i].setAttribute("id",i);
    buttons[i].addEventListener("click",function(){
        buttons[this.id].setAttribute("disabled" , true );
        buttons[this.id].setAttribute("class" , "deshabilita" );
        var cuenta = 0;
        for (i in fraseArrayIndex){
            if(fraseArrayIndex[i] == this.id){
                arrayOculto[i] = letras[this.id];
                document.getElementById("frase").innerHTML=arrayOculto.join("");
                correcto++;
                if(correcto == espacios){
                    alert ("Has ganado");
                    var won = parseInt(win);
                    localStorage.setItem("win", ++won);
                    document.getElementById("win").innerHTML=win;
                }
            }else{
                cuenta++;
                if(cuenta == fraseArrayIndex.length){
                    vidas--;
                    document.getElementById("vidas").innerHTML=vidas;
                }
                if (vidas == 0){
                    alert("Fin del juego");
                    var loser = parseInt(lose);
                    localStorage.setItem("lose", ++loser);
                    document.getElementById("lose").innerHTML=lose;
                    for (i in buttons){
                        buttons[i].setAttribute("disabled" , true);
                        buttons[this.id].setAttribute("class" , "deshabilita" );
                    }
                }
            }
        }
    });
}

var objetoOriginal ={aristoteles: "El ignorante afirma, el sabio duda y reflexiona" ,
                     platon: "La música es para el alma lo que la gimnasia para el cuerpo", 
                     pitagoras:"Educad a los niños y no será necesario castigar a los hombres, 
                     arquimedes:"Aquel que lo intentó y no lo consiguió es superior al que ni lo intentó", 
                     diogenes:"pista", 
                     heraclito: "pista", 
                     timeo:"pista", 
                     gorgias:"pista", 
                     anaxagoras:"pista", 
                     euclides:"pista", 
                     epicuro:"pista"};

var registroOriginal =["aristoteles" , "platon", "pitagoras", "arquimedes", "diogenes", "heraclito", "timeo", "gorgias", "anaxagoras", "euclides", "epicuro"];

var registroRandom = registroOriginal[Math.floor(Math.random() * registroOriginal.length)];
var objetoAleatorio = objetoOriginal[registroRandom];
console.log(objetoAleatorio);
var fraseArray = registroRandom.split("");
var arrayOculto=[];

//Creamos un array de guiones que sustituyen las letras del fraseArray
for (i in fraseArray){
    if(fraseArray[i] == " "){
        arrayOculto.push(" ");
    }else{
        arrayOculto.push(" - ");
    }
}


//Creamos un array con los indices de cada letra de la frase para poder compararlo con los botones
var fraseArrayIndex=[];
for (i in fraseArray){
    for (j in letras){
        if(fraseArray[i] == letras[j]){
            fraseArrayIndex.push(j);
            espacios++;
        }else if(fraseArray[i] == " "){
            fraseArrayIndex[i]= " ";
        }
    }
}


document.getElementById("frase").innerHTML=arrayOculto.join("");
document.getElementById("vidas").innerHTML=vidas;

//timer

var timer = setInterval(function(){
    --time;
    if (time == -1){
        clearInterval(timer);
        alert("Se te ha acabado el tiempo");
        ++time;
        var loser = parseInt(lose);
        localStorage.setItem("lose", ++loser);
}
    document.getElementById("timer").innerHTML=time;
},1000);


//Boton de pista

btnPista = document.getElementById("btn-pista");
btnPista.addEventListener("click", function(){
    document.getElementById("pista").innerHTML= "La pista es : " + "<br>" + objetoOriginal[registroRandom];
    btnPista.setAttribute("class", "deshabilita");
})



































































































