//vareduras de elementos html
const hr = document.getElementById('horas');
const min = document.getElementById('minutos');
const seg = document.getElementById('segundos');

const relogio = setInterval(function tempo (){
    let dataDeHoje = new Date();

    let hora = dataDeHoje.getHours();
    let minuto = dataDeHoje.getMinutes();
    let segundos = dataDeHoje.getSeconds();
   
    if(hora<10){
        hora = '0' +hora 
    }
    if(minuto<10){
        minuto = '0' +minuto 
    }
    if(segundos<10){
        segundos = '0' +segundos
    } 
    
    hr.textContent = hora;
    min.textContent = minuto;
    seg.textContent = segundos;



});