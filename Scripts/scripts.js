function calularPropina(){

document.getElementById("resumen").classList.remove("sec");
document.getElementById("resumen").classList.add("section");

const boxcuenta = document.getElementById('boxcuenta').value;
const propina = document.getElementById('boxporcentaje').value;
const total = Number (boxcuenta);
const porcentaje= propina/100;
const resultado1 = total*porcentaje;
const resultado = total+resultado1;
const resultado2 = Number (resultado);


console.log(boxcuenta);
if ((boxcuenta == "") || (propina == ""))
{
    alert("Los campos no pueden quedar vacios");
    return false;
}

else
{
    document.querySelector('span').innerHTML =  total;
    document.getElementById('r2').innerHTML = resultado1;
    document.getElementById('r3').innerHTML = resultado2;

}
}
function limpiar(){
    document.getElementById("resumen").classList.remove("section");
    document.getElementById("resumen").classList.add("sec");
}

