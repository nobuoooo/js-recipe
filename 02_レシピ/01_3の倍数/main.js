// const genkiFunction = function (number) {
//   for (let n = 1; n < number; n++) {
//     if (n % 3 === 0) {
//       console.log(n + "!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }

// genkiFunction(50)

// FizzBuzz
// const FizzBuzz = function (number) {
//   for (let n = 1; n < number; n++) {
//     if (n % 15 === 0) {
//       console.log("FizzBuzz")
//     } else if (n % 5 === 0) {
//       console.log("Buzz")
//     } else if (n % 3 === 0) {
//       console.log("Fizz")
//     } else {
//       console.log(n)
//     }
//   }
// }

// FizzBuzz(50)

// 3が大好き
const love3 = function (number) {
  for (let n = 1; n < number; n++) {
    if (String(n).indexOf("3") !== -1) {
      console.log(n + "!!!!")
    } else {
      console.log(n)
    }
  }
}
love3(50)
