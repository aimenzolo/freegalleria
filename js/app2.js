let imageNumber = localStorage.getItem("imageid");
let images;

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    images = JSON.parse(xhr.responseText);
    showSlides(imageNumber);
  }
};

xhr.open("GET", "data/data.json");
xhr.send();

function showSlides(imageNumber) {
  document.querySelector(".nameimage").innerHTML = images[imageNumber].name;
  document.querySelector(
    ".source"
  ).innerHTML = `<a href="${images[imageNumber].source}" targer="blank">GO TO SOURCE</a>`;
  document.getElementById("year").innerHTML = images[imageNumber].year;
  const progress =
    ((parseInt(imageNumber) + 1) / parseInt(images.length)) * 100;
  document.getElementById("progress").style.width = `${progress}%`;

  document.querySelector(".text").innerHTML = images[imageNumber].description;
  document.querySelector(".nameauthor").innerHTML =
    images[imageNumber].artist.name;
  document.getElementById(
    "authorphoto"
  ).innerHTML = `<img src="${images[imageNumber].artist.image}">`;
  document.querySelector(
    ".largeimage"
  ).style.backgroundImage = `url("${images[imageNumber].images.hero.small}")`;
}

function plusSlides(n) {
  imageNumber = parseInt(imageNumber) + n;

  if (imageNumber >= images.length - 1) {
    imageNumber = 0;
  }
  if (imageNumber < 0) {
    imageNumber = images.length - 1;
  }

  console.log(imageNumber);
  showSlides(imageNumber);
}

function imagemod() {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = images[imageNumber].images.hero.large;
  const span = document.querySelector(".close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}
