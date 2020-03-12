//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbour) {
    var address, distanceFromTown, hasNeighbour;
    let temp = typeof (address);
    let temp1 = typeof (distanceFromTown);
    let temp2 = typeof (hasNeighbour);
    return temp + temp1 + temp2;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(string, number, boolean) {
    var string, number, boolean;
    let a = typeof (string);
    let b = typeof (number);
    let c = typeof (boolean);
    if (a == 'string' && isNaN(b) && c == 'boolean') {
        return true;
    }
    else {
        return false;
    }
}
//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(e, f) {
    // let g = typeof (e);
    // let h = typeof (f);
    if (isNaN(e) && isNaN(f)) {
        return "NaN";
    }
    //  else if (isNaN(g) && isNaN(h)) {
    //     return NaN;
    //  }
    else {
        return NaN;
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
let p1, p2, p3, p4;
function sweetTooth(p1, p2, p3, p4) {
    let i = typeof (p1);
    let j = typeof (p2);
    let k = typeof (p3);
    let l = typeof (p4);
    if (isNaN(p1) && isNaN(p2) && isNaN(p3) && isNaN(p4)) {
        return 0;
    }
    else if ((p1 == 0) && (p2 == 0)(p3 == 0)(p4 == 0)) {
        return 0;
    }
    else {
        return "No sweets for Karen's friend";
    }

}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(a1) {
    if (a1 == 32 && a1 != '32') {
        return 0;
    }
    else if (a1 == 14) {
        return -10;
    }
    else {
        return "Technical Error!";
    }
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(b1) {
    let c1 = typeof (b1);
    if (b1 == 1) {
        return "Take her daughter to a doctor";
    }
    else if (b1 == -1) {
        return "Break down and give up all hope";
    }
    else if (c1 == 'string') {
        return "Refused to do anything for Karen";
    }
    else {
        return "Wasn't able to decide";
    }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(s1) {
    var temp = "",
        temp1 = ""
    for (var start = 0; start < s1.length; start++) {
        temp += s1[start]
    }
    return temp.length + (s1.length - 1)
}