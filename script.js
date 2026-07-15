




//EVENTS

$(function() {
  // Owl Carousel
  var owl = $(".carousel-one");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
	autoplayTimeout:4000,
	autoplay: true,
	autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1 // 1 item for screen width 0px and up
      },
      600: {
        items: 1 // 2 items for screen width 600px and up
      },
      1000: {
        items: 3 // 3 items for screen width 1000px and up
      }
    }
  });
});

// REVIEWS

$(function() {
  // Owl Carousel
  var owl = $(".carousel-two");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1 // 1 item for screen width 0px and up
      },
      600: {
        items: 1 // 2 items for screen width 600px and up
      },
      1000: {
        items: 3 // 3 items for screen width 1000px and up
      }
    }
  });
});

// MOBILE HEADER SIDE MENU
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overLay");

 menuToggle.addEventListener("click", () => {
 sideMenu.classList.toggle("active"); 
 overlay.classList.toggle("active");
 });
 
 overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active"); 
  overlay.classList.remove("active");
  });
  closeMenu.addEventListener("click", () => { // ✅ NEW
  sideMenu.classList.remove("active"); 
  overlay.classList.remove("active");
});

// header
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll("#topheadRight .menu");

  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });


  // Show popup on page load
  window.onload = function() {
    document.getElementById("popup-overlay").style.display = "flex";
  };
    setTimeout(function () {
      document.getElementById("popup-overlay").style.display = "flex";
    }, 5000);

   // Close popup on button click
  document.getElementById("close-btn").onclick = function() {
   document.getElementById("popup-overlay").style.display = "none";
  };



  // Show popup on click button
  function openPopup() {
    document.getElementById("overlay-popup").style.display = "flex";
  };

  // Close popup on button click
  document.getElementById("close-button").onclick = function() {
   document.getElementById("overlay-popup").style.display = "none";
  };




//   Gallery page


    function openLightbox(el) {
      const imgSrc = el.querySelector('img').src;
      document.getElementById('lightbox-img').src = imgSrc;
      document.getElementById('lightbox').style.display = 'flex';
    }

    function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }

    // Optional: Close modal on click outside image
    document.getElementById('lightbox').addEventListener('click', function(e) {
      if (e.target.id === 'lightbox') closeLightbox();
    });
 


  



