// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    return cats.push("Ralph")
} 

function destructivelyPrependCat() { 
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

destructivelyRemoveFirstCat = () => cats.shift()

function appendCat(){
    return [...cats, "Broom"]
}

function prependCat(){
    return ["Arnold", ...cats]
}

function removeLastCat(){
    const newCatList = [...cats]
    newCatList.pop()
    return newCatList
}

function removeFirstCat(){
    const newerCatList = [...cats]
    newerCatList.shift()
    return newerCatList
}

