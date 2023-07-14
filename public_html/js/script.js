// calculadora dias de viaje
const inicio_date = document.querySelector('#inicio_date');
const fin_date = document.querySelector('#fin_date');
const btnCalc = document.getElementsByClassName("calc-days");
btnCalc[0].addEventListener('click',(e)=>{
    var initDate = new Date(inicio_date.value);
    var endDate = new Date(fin_date.value);
    const diffTime = Math.abs(endDate - initDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const dias = (diffDays + 1);
    if (dias!=NaN) {
        document.getElementsByClassName("resultado_dias")[0].value = ""+dias;
    } 
});


// convertidor de dolares a pesos

const btnCalDo = document.getElementsByClassName("calc-convert");
btnCalDo[0].addEventListener('click', (e)=>{
const dolares = document.querySelector('#dolar').value;
const trmval = document.querySelector("#dolar_value").value;
var convertir = Math.round(dolares * trmval);
var total = new Intl.NumberFormat('es-ES').format(convertir);
if (total != NaN){
        document.getElementsByClassName("pesos")[0].value = ""+total;
    }
});

