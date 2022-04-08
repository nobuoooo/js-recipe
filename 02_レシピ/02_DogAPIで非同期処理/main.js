const imageElement = document.getElementById("dog-image")

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    console.log(res)
    return res.json()
  })
  .then((data) => {
    console.log(data)
    imageElement.src = data.message
  })
