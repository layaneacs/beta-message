const form = document.querySelector('form');
const textArea = document.querySelector('.text-area');

form.addEventListener('submit',(e) =>{
e.preventDefault()
let mensagem = form.send.value
const textoEnviado = document.createElement('p')
const textoCriado = document.createTextNode(mensagem)

textoEnviado.classList.add('sendText')
textoEnviado.appendChild(textoCriado)
textArea.appendChild(textoEnviado)

textArea.scroll(textArea.scrollHeight,textArea.scrollWidth)
console.log(textArea.scrollHeight,textArea.scrollWidth)

form.send.value = ''
})