const brain = require('brain.js')

// training data
const a = character(
  '.#####.' +
  '#.....#' +
  '#.....#' +
  '#######' +
  '#.....#' +
  '#.....#' +
  '#.....#'
)

const b = character(
  '######.' +
  '#.....#' +
  '#.....#' +
  '######.' +
  '#.....#' +
  '#.....#' +
  '######.'
)

const c = character(
  '#######' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#######'
)

// learn letters A through C
const net = new brain.NeuralNetwork()

net.train([
  {
    input: a,
    output: { a: 1 }
  },
  {
    input: b,
    output: { b: 1 }
  },
  {
    input: c,
    output: { c: 1 }
  }
])

// predict the letter A, even with a pixel off
const input =
  '.#####.' +
  '#.....#' +
  '#.....#' +
  '###.###' +
  '#.....#' +
  '#.....#' +
  '#.....#'

const result = brain.likely(character(input), net)

console.log(`Prediction: ${result}`)

// turn # into 1s and . into 0s
function character(string) {
  return string.trim().split('').map(str => str === '#' ? 1 : 0);
}
