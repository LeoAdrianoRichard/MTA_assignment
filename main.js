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


  // Function to highlight the selected link
  function setActiveLink() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.topnav a');

    // Remove "active" class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add "active" class to the clicked link
    this.classList.add('active');
  }

  // Add click event listener to all navigation links
  const navLinks = document.querySelectorAll('.topnav a');
  navLinks.forEach(link => link.addEventListener('click', setActiveLink));

