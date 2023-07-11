import { createInterface } from "readline"
import fib from "./src/algo/fib.js"

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const reader = (msg: string) =>
  new Promise((resolve) => {
    readline.question(msg, (userInput) => resolve(userInput))
  })

const fibonacci = async () => {
  const answer: number = (await reader("Enter a number: ")) as number

  const res = fib(answer)

  console.log("Fibonacci: ", res)

  readline.close()
}

fibonacci()
