// selecting image element to be lazy loaded
let elem = $("img");
//retrieving url from ref-data attribute
let path = elem.attr("ref-data");
//creating a new image object
let loadingImage = new Image();
//this function is called when the image object
//is done loading it's image
loadingImage.onload = function(){
    //src attribute of elem is being replaced
    //with that of loadingImage because its done loading
    elem.attr("src", path);
}
//the path from elem has been assigned
//to the new image object for loading 
loadingImage.src = path;



let imgs = $("img");
for(let a=0;a<imgs.length;a++){
  loadImage(imgs[a]);
}
function loadImage(elem){
  let path = $(elem).attr("ref-src");
  let newImg = new Image();
  newImg.onload = function(){
    console.log("done loading");
    $(elem).attr("src", path);
  }
  newImg.src = path;
}