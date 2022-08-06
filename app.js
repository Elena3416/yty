const boton = document.getElementById("botn").addEventListener("click", mostrar);

function mostrar(){
    const name = String(document.getElementById("nombre").value);
    const imprimir1 = document.getElementById("imprimir");

    imprimir1.innerText = 'Mi nombre es ' + name;
}