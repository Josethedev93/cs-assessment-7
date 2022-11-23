// function for addToZero

function addToZero(arr) {
       
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[(arr[i] * -1)]) {
      return true;
    } else {
      hash[arr[i]] = arr[i];
    }
  }
  
  return false;
}


console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// function for unique string
function hasUniqueChars(str) {
    return new Set(str).size == str.length;
  }

  console.log(hasUniqueChars("Monday"));
  console.log(hasUniqueChars("Moonday"))

//   function for pangram
  function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

  console.log(isPangram("I like cats, but not mice"));

//   function for findLongestWord

function findLongestWord(str) {
    let longest = 0;
    // str = str.split(' '); refers to if string is not split in an array ex the console.log below
    for(var i = 0; i < str.length; i++) {
       if(str[i].length >= longest) {
         longest = str[i].length;
          } 
       }
    return longest;
  }

    // console.log(findLongestWord("i love whataburger"));
    console.log(findLongestWord(["hi", "hello"]));