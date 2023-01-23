document.querySelector("#search-form").addEventListener("submit", function(form) {
    form.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var res = JSON.parse(xhttp.responseText);
            var photoData = res.photos;

            var gallery = document.querySelector("#photo-divs");
            gallery.innerHTML = '';
            
            // works as intended
            var srcSetsArr = []; //will become a 2d array
            photoData.forEach(function(photo) {
                var photoSrcURL = photo.src;
                var srcSet = [];
                var srcSet = Object.values(photoSrcURL);
                var newSrcSet = [];
                srcSet.forEach( function(source){
                    newSrcSet.push(revamp(source));
                })
                srcSetsArr.push(newSrcSet);    
            });

            var sizes = '(max-width: 650px) calc((100vw - 30px - 15px) / 2), (max-width: 900px) calc((100vw - 30px - 15px) / 2), (max-width: 1440px) calc((100vw - 60px - 60px) / 3), (max-width: 1600px) calc((100vw - 160px - 60px) / 3), calc((1600pxpx - 160px - 60px) / 3)';

            srcSetsArr.forEach( function(set){
                var photoDiv = document.createElement("div");
                photoDiv.classList.add("photo-div");
                photoDiv.innerHTML = `
                    <img class="photo-img" sizes="${sizes}" srcset="${set}">   
                `
                gallery.appendChild(photoDiv);
            })
        }
    };
var textValue = document.querySelector(".search-bar").value
xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
xhttp.setRequestHeader('Authorization', '563492ad6f917000010000015c4a92c945f0441db29a59ccfcf43031')
xhttp.send();
});

function revamp(string) {
    // return string + 'something';
    /*  I want the function to take a string value,
        grab the right-hand portion starting from the 5th or 6th to last character,
        store that operation in a variable, then concatenate +` ${variable}w` to the end of the string
        Lastly, I'll return the result
    */
    // maybe I have to run a for loop in here for each source set...

    var subStr = '';    
    if (string.substr(-4, 1) == '='){
        subStr = string.substr(-3)+'w';
        newString = string + ` ${subStr}`;
    } else if (string.substr(-5, 1) == '=') {
        subStr = string.substr(-4)+'w';
        newString = string + ` ${subStr}`;
    } else {
        newString = string+'';
    }
    return newString;
};

//     CSS  

// /* || PHOTO-DIVS */
// #photo-divs{
//     display: flex;
//     flex-flow: column wrap;
//     max-height: 2500px;
//     width: 95%;
//     overflow: hidden;
//     align-content: flex-start;
//     margin: 0 auto;
//   }
//   .photo-div{
//       margin-right: 5%;
//       width: 46%;
//       max-height: 608px;
//   }
//   .photo-img{
//       margin-bottom: 15px;
//       width: 100%;
//       object-fit: contain;
//   }
