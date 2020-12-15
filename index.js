let url= 'https://picsum.photos/500/400';
fetch(url)
.then(function(result){
displayResults(result);
})  
function displayResults(result){
let body = document.querySelector("body");
let img = document.createElement("img");
body.appendChild(img);
img.src = (result.url);    
}


