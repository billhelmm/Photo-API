function revamp(string) {
    // return x+ 'something';
    /*  I want the function to take a string value,
        grab the right-hand portion starting from the 5th or 6th to last character,
        store that operation in a variable, then concatenate +` ${variable}w` to the end of the string
        Lastly, I'll return the result
    */
    // maybe I have to run a for loop in here for each source set...

    var subStr = '';    
    if (string.substr(-4, 1) == '='){
        subStr = string.substr(-3)+'w';
    } else if (string.substr(-5, 1) == '=') {
        subStr = string.substr(-4)+'w';
    } else {
        subStr = '';
    }
    newString = string + ` ${subStr}`;
    return newString;
};

function revamp(sourceSet) {
    // return x+ 'something';
    /*  I want the function to take a string value,
        grab the right-hand portion starting from the 5th or 6th to last character,
        store that operation in a variable, then concatenate +` ${variable}w` to the end of the string
        Lastly, I'll return the result
    */
    // maybe I have to run a for loop in here for each source set...
    sourceSet.forEach( function(source){
        console.log(sourceSet.length); //120
        var subStr = '';    
        if (source.substr(-4, 1) == '='){
            subStr = source.substr(-3)+'w';
        } else if (source.substr(-5, 1) == '=') {
            subStr = source.substr(-4)+'w';
        } else {
            subStr = '';
        }
        newSource = source + ` ${subStr}`;
        return newSource;
    });
};

// doesn't work as intended. 
var revampedSrcSet = [];
var finalSrcSetArr = [];
// console.log(srcSetsArr);
srcSetsArr.forEach( function(sourceSet){
    var revampedSrcSet = revamp(sourceSet);
    finalSrcSetArr.push(revampedSrcSet);
    });

console.log(finalSrcSetArr);