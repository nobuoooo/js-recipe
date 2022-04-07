const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  const card = creatCard(inputElement.value)

  container.append(card)
}

const creatCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  //todo　classの生成 => todoクラスに実際に追加したtodoを入れる
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  //削除ボタンを追加
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    //ちょっとしたモヤモヤ。cardクラスはほかにもいくつかある。それこそtodoリストを追加するごとに増えていくはずなのに、card.remove()では当該のtodoしか消えないのはなぜ？
    card.remove()
  }
  //"card"クラスに"todo"クラスを格納
  card.append(todo)

  card.append(deleteButton)
  //"card"クラスを全体のcards-containerに格納
  //入力欄を空に
  inputElement.value = ""

  return card
}
