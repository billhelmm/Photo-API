var searchForm = document.getElementById("search-form");

searchForm.innerHTML = `
<input class="search-bar" placeholder="Search for free photos" type="text">
    <button class="search-button" type="submit">
        <img src="images/search-icon-png-9966.png"/>
    </button>
`;

var searchSection = document.getElementById("search-section");
searchSection.innerHTML = `
<div class="header">
    <div class="header-logo">
        <a href="index.html">
           <img class="header-img" src="images/Pexels.png"> 
        </a>
    </div>
    <div class="header-menu">
        <div class="menu-navbar">
            <a>Explore</a>
            <a>License</a>
            <a>Upload</a>
            <button class="ellipses-btn">
                <img src="images/icons8-menu-78.png"/>
            </button>
            <a class="join-btn"> Join </a>
            <button class="mobile-btn"> ≡ </button>
        </div>
    </div>
</div>
<div class="search">
    <h1 class="search-header">
        The best free stock photos, 
        royalty free images & videos shared by creators.
    </h1>
    ${searchForm.outerHTML}
    <p class="trending"> 
        <span>Trending:</span> <span>ocean</span>, <span>animal</span>,
        <span>dark</span>, <span>nature</span> 
    </p>   
</div>
<div class="photo-credits">
    <p> Photo By 
        <span class="api-photographer"></span> 
    </p>    
</div>
`;

getHeroAPI();

var tabs = document.getElementById("tabs");
tabs.innerHTML = `
    <a> Home </a>
    <a> Videos </a>
    <a> Leaderboard </a>
    <a> Challenges </a>
`

var galleryHeader = document.getElementById("gallery-header");
galleryHeader.innerHTML = `
    <h2> Free Stock Photos </h2>
    <select class="gallery-btn">
        <option> Trending </option>
        <option> New </option>
    </select>
`

var footer = document.querySelector("#footer");
footer.innerHTML = `
<div class="footer-sitemap">
    <ul class="pexels-column">
        <h4 class="footer-header"> Pexels </h4>
        <li class="footer-list">
            <a href="#"> Free Stock Photos </a>
            <a href="#"> Free Videos </a>
            <a href="#"> Popular searches </a>
            <a href="#"> Collections </a>
            <a href="#"> Challenges </a>
            <a href="#"> Leaderboard </a>
            <a href="#"> Other plugins & apps </a>
        </li>
    </ul>
    <ul class="contact-column">
        <h4 class="footer-header"> Company </h4>
        <li class="footer-list">
            <a href="#"> About </a>
            <a href="#"> Blog </a>
            <a href="#"> FAQ </a>
            <a href="#"> Become a hero </a>
            <a href="#"> Partner with Pexels </a>
            <a href="#"> Image & Video API </a>
            <a href="#"> Sign Up </a>
        </li>
    </ul>
</div>
<div class="footer-legal">
    <a> © 2023 Pexels </a>
    <a href="#"> Terms of Use </a>
    <a href="#"> Privacy Policy </a>
    <a href="#"> License </a>
    <a href="#"> Imprint </a>
</div>
<div class="footer-icons">
    <div class="icon-div">
        <a href="#">
            <img 
                src="images/facebook-icon-png-774-copy.jpg"
                class="icon-img"    
            />
        </a>
    </div>
    <div class="icon-div">
        <a href="#">
            <img 
                src="images/twitter-32.png"
                class="icon-img"     
            />
        </a>
    </div>
    <div class="icon-div">
        <a href="#">
            <img 
                src="images/Instagram Logo PNG Transparent & SVG Vector - Freebie Supply.png"
                class="icon-img"  
            />
        </a>
    </div>
    <div class="icon-div">
        <a href="#">
            <img 
                src="images/pinterest-32.png"   
                class="icon-img"    
            />
        </a>
    </div>
</div>
`;

function getHeroAPI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            var curatedPhotoData = res.photos;
            var photographer = curatedPhotoData[0].photographer;
            var backgroundImg = curatedPhotoData[0].src.landscape;
            searchSection.style.backgroundImage = `url(${backgroundImg})`;
            var span = document.querySelector(".api-photographer");
            span.textContent = photographer;
        }
      };
      xhttp.open("GET", "https://api.pexels.com/v1/curated?per_page=1", true);
      xhttp.setRequestHeader('Authorization', '563492ad6f917000010000015c4a92c945f0441db29a59ccfcf43031')
      xhttp.send();
}
    
var gallery = document.querySelector("#photo-divs");

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
            
            photoData.forEach( function(photo){
                var photoDiv = document.createElement("div");
                photoDiv.classList.add("photo-div");
                var src = photo.src.medium;
                photoDiv.innerHTML = `
                    <img class="photo-img" src="${src}">   
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


