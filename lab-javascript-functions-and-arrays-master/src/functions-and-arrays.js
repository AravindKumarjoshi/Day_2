// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

function greaterOfTwoNumbers(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

function maxOfTwoNumbers(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

// Progression #2: The lengthy word
const words = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot"
];

function findScaryWord(words) {
    var len_array = words.length;
    var max_length = 0;
    if (len_array == 0) {
        return null;
    }
    if (len_array == 1) {
        return words[0];
    } else {
        for (let i = 0; i < len_array; i++) {
            var wrd = words[i].length;
            if (wrd > max_length) {
                max_length = wrd;
                var word = words[i];
            }
        }
        return word;
    }
}
// console.log(findScaryWord());

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
    if (numbers.length == 0) {
        return 0;
    }
    if (numbers.length == 1) {
        var sum = 0;
        return (sum = sum + numbers[0]);
    } else {
        var sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            var num = numbers[i];
            sum = sum + num;
        }
        return sum;
    }
}

function add(arr) {
    var sum = 0;
    var len = arr.length;
    if (len == 0) {
        return sum;
    }
    if (len == 1) {
        return (sum = sum + arr[0]);
    }

    for (let i = 0; i < len; i++) {
        if (typeof arr[i] == "string") {
            let t = arr[i].length;
            sum = sum + t;
        }
        if (typeof arr[i] == "boolean") {
            if (arr[i] == true) {
                sum = sum + 1;
            }
        }
        if (typeof arr[i] == "number") {
            sum = sum + arr[i];
        }
        if (typeof arr[i] == "object" || typeof arr[i] == "array") {
            throw exception("Unsupported data type (object or array) present in the array");
        }
    }
    return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const arr1 = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arr1) {
    if (arr1.length == 0) {
        return null;
    } else {
        var average = netPrice(arr1);
        return average / arr1.length;
    }
}

// Progression 4.2: Array of strings
const wordsArr = [
    "seat",
    "correspond",
    "linen",
    "motif",
    "hole",
    "smell",
    "smart",
    "chaos",
    "fuel",
    "palace"
];

function averageWordLength(wordsArr) {
    var sum = 0;
    if (wordsArr.length == 0) return null;
    else {
        for (var i = 0; i < wordsArr.length; i++) {
            sum += wordsArr[i].length;
        }
        var x = sum / wordsArr.length;
        return x;
    }
}

function avg(arr) {
    var sum = 0;
    if (arr.length == 0) {
        return null;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "string") {
                let len = arr[i].length;
                sum = sum + len;
            } else if (typeof arr[i] == "boolean") {
                var l = arr[i] / 1;
                sum = sum + l;
            } else if (typeof arr[i] == "number") {
                sum = sum + arr[i];
            } else {
                throw exception("Unsupported data type (object or array) present in the array");
            }
        }
    }
    let avWrL = sum / arr.length;
    return Number(avWrL.toFixed(2));
}

// Progression #5: Unique arrays
const wordsUnique = [
    "bread",
    "jam",
    "milk",
    "egg",
    "flour",
    "oil",
    "rice",
    "coffee powder",
    "sugar",
    "salt",
    "egg",
    "flour"
];

function uniqueArray(array) {
    if (array.length == 0) {
        return null;
    }
    /*  else {
          let unique_return = array.filter(function (a, b) {
  
              return array.indexOf(a) === b;
          });*/
}

// Progression #6: Find elements
const wordsFind = [
    "machine",
    "subset",
    "trouble",
    "starting",
    "matter",
    "eating",
    "truth",
    "disobedience"
];

function searchElement(array, word) {
    if (array.length == 0) {
        return null;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == word) {
                return true;
            }
        }

        return false;
    }
}

// Progression #7: Count repetition
const wordsCount = [
    "machine",
    "matter",
    "subset",
    "trouble",
    "starting",
    "matter",
    "eating",
    "matter",
    "truth",
    "disobedience",
    "matter"
];

function howManyTimesElementRepeated(array, word) {
    var count = 0;
    if (array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == word) {
                count = count + 1;
            }
        }
        return count;
    }
}


// Progression #8: Bonus

const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct() {

}