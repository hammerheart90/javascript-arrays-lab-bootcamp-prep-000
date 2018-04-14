const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
kittens.push()
}

function destructivelyPrependKitten(name) {
kittens.unshift()
}

function destructivelyRemoveLastKitten(name) {
kittens.pop()
}

function appendKitten(name){
var newArray = kittens.slice();
  return newArray
}