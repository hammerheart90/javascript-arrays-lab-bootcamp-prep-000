const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
kittens.push(name)
return kittens
}

function destructivelyPrependKitten(name) {
kittens.unshift()
return kittens
}

function destructivelyRemoveLastKitten(name) {
kittens.pop()
return kittens
}

function appendKitten(name){
var moreKittens = kittens.slice();
  return moreKittens
}