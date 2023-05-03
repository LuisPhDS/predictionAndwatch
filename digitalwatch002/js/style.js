const Salvador = document.getElementById('Salvador');
const Recife = document.getElementById('Recife');
const SP = document.getElementById('SP');
const imagem = document.getElementById('img')
const txt = document.getElementById('texto')

Salvador.addEventListener('click', ()=>{
    imagem.src = 'images/dia-chuvoso.png'
    txt.textContent = "Chuvoso - 23°"
})
Recife.addEventListener('click', ()=>{
    imagem.src = 'images/ensolarado.png'
    txt.textContent = "Claro - 28°"
})
SP.addEventListener('click', ()=>{
    imagem.src = 'images/nublado.png'
    txt.textContent = "Nublado - 25°"
})


