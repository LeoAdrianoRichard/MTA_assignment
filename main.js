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
    "latte-image": "images/Menu 1.png",
    "signature": "images/Menu 2.png",
    "fresher": "images/Menu 3.png",
    "chocolate": "images/Menu 4.png",
    "tea": "images/Menu 5.png"
  };

  // Update the displayed image
  if (images[imageId]) {
    menuImage.src = images[imageId];
    menuImage.style.display = "block"; // Make the image visible
  } else {
    console.error("Image not found for id: " + imageId);
  }

// Highlight the clicked menu category
const menus = document.querySelectorAll(".menu"); // Select all menu items
menus.forEach((menu) => {
  menu.classList.remove("clicked"); 
});


const clickedMenu = document.querySelector(`[onclick="displayMenu('${imageId}')"]`);
if (clickedMenu) {
  clickedMenu.classList.add("clicked");
}
}
