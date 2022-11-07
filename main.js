// Whale Talk Project //
let input = "turpentine and turtles"

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []

for (let i = 0; i < input.length; i++){
    //console.log(i+'break')
    let inputI = input[i]
    if (inputI === 'e'){
        resultArray.push(inputI)
    }
    if (inputI === 'u'){
        resultArray.push(inputI)
    }
    for (let x = 0; x < vowels.length; x++){
        //console.log(x)
        if (inputI === vowels[x]){
            //console.log(vowels[x])
            resultArray.push(vowels[x])
            //console.log(resultArray)
        }
    }

}

let resultString = resultArray.join('')
console.log(resultString.toUpperCase())
