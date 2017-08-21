
//image-slider
var imageArray = ["assets/img/1.jpg", "assets/img/3.jpg", "assets/img/5.jpg","assets/img/6.jpg","assets/img/7.jpg","assets/img/8.jpg"];
var imageNumber = 0;
var imageLength = imageArray.length -1;
var time = 2300;

//function lineAnimation() {}

function changeImg(x) {
  imageNumber +=x;
  if (imageNumber > imageLength) {
    imageNumber = 0;
  }
  if (imageNumber < 0) {
    imageNumber = imageLength;
  }
  document.getElementById("mainImage").src = imageArray[imageNumber];

  return false;
}

function autoRun() {
  setInterval("changeImg(1)", 5000);
}
