function checkAnagram(word1, word2){
    let diffNum = 0;
    for (let i =0; i<word1.length; i++){
        if(!word2.includes(word1[i])){
            diffNum++;
        }else if(!word1.includes(word2[i])){
            diffNum++
        }
    }
    return diffNum;
}
function getMinimumDifference(a, b) {
    const results = [];
    const checkCharacters = /^[a-z]+$/g;
    const isArraySizeValid = 1 <= a.length <= 100;
    if (!isArraySizeValid){
        results.push(-1);
    }
    for (let i = 0; i < a.length ; i++){
        const isArrayCharacterLengthValid = 0<= a[i].length <= Math.pow(10,4) && 0<= b[i].length <= Math.pow(10,4)  ;
        const isWordsSumCharacterLengthValid = 0<= a[i].length + b[i].length  <= Math.pow(10,4);
        if (!isArrayCharacterLengthValid && !isWordsSumCharacterLengthValid){
            results.push(-1)
        }
        const isWordsCharactersInValid = !checkCharacters.test(a[i]) || !checkCharacters.test(b[i]);
        if (!isWordsCharactersInValid){
            results.push(-1)
        }
        if (a[i].length !== b[i].length){
           results.push(1)
        }else{
            results.push(checkAnagram(a[i], b[i]))
    }
}
    return results;
}
const a = [ "abc","aaa", "mon", "aa", "ghj"]
const b = [ "bac","aab", "kjn", "b", "gil"]
console.log(getMinimumDifference(a, b))
