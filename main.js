function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function displayMenu(imageId) {
  const menuImage = document.getElementById("menu-image");
  const images = {
    "latte-image": "images/latte-removebg.png",
    "signature": "images/Signature.png",
    "fresher": "images/fresher.png",
    "coffee-free": "images/coffee-free.png",
    "frappe": "images/MontiFrappe.png"
  };

  // Check if the imageId exists in the images object
  if (images[imageId]) {
    // Set the source of the image to the corresponding one from the images object
    menuImage.src = images[imageId];
    menuImage.style.display = "block"; // Make the image visible
  } else {
    console.error("Image not found for id: " + imageId);
  }
}
