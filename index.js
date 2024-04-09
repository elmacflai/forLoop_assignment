let i = prompt("Indica de que numero quieres ver la tabla de multiplicar");

let pares = [];

if (i == null || i == "" ) {
    alert("Debes introducir un valor");
}

for (let j = 1; j <=10; j++){
     {
       alert(i + "*" + j + "=" + (i * j));
        /*console.log(i + "*" + j + "=" + (i * j));*/
    }
}
document.getElementById("salida").innerHTML = i;