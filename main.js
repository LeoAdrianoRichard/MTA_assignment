function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x.classList.contains("responsive")) {
    x.classList.add("closing");
    setTimeout(() => {
      x.classList.remove("responsive", "closing");
    }, 300); 
  } else {
    x.classList.remove("closing");
    x.classList.add("responsive");
  }
}

let slideIndex = 0;
let slideshowTimer; 

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    slideshowTimer = setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    clearTimeout(slideshowTimer); 
    
    slideIndex += n;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    slideshowTimer = setTimeout(showSlides, 5000); // Restart after 5 seconds
}

showSlides();

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
