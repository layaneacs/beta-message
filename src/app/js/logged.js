const answerBox = document.querySelectorAll('.answer-box-details p');
const answerBoxHtml = Array.from(answerBox)


answerBoxHtml.forEach(item => {
  console.log(item.innerText)
  item.addEventListener('contextmenu',(e) => e.preventDefault())
  item.addEventListener('dblclick',() =>{
    window.location.href = "chat.html"
  })
})