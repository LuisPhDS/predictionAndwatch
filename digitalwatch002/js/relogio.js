const hr = document.getElementById('horas')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')

const day = document.getElementById('Dia')
const mon = document.getElementById('Mes')
const ye = document.getElementById('Ano')

const Relogio = setInterval(() => {
    let result = new Date()

    let hora = result.getHours()
    let minutos = result.getMinutes()
    let segundos = result.getSeconds()

    let d = result.toLocaleDateString('pt-br')

    hora<10 ? hora = "0"+hora : hora
    minutos<10 ? minutos = "0"+minutos : minutos
    segundos<10 ? segundos = "0"+segundos : segundos

    


    hr.textContent = hora
    min.textContent= minutos
    seg.textContent = segundos
    day.textContent = d
   
    
});


