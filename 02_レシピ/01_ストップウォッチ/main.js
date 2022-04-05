const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  display.textContent = count / 100
}
let id = null
button.onclick = function () {
  if (id === null) {
    //スタートの場合
    id = setInterval(countUp, 10)
    console.log(id)
    button.textContent = "Stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "Start"
  }
}
