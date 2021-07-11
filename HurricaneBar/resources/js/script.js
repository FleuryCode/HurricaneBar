
// Making Modal Work

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('modal__overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// Setting Up Map

// Initialize and add the map
function initMap() {
    // The location of Hurricane
    const hurricane = { lat: 49.32247, lng: -0.00659 };
    // The map, centered at Hurricane
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: hurricane,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: hurricane,
      map: map,
    });
  }



//   jQuery

$(document).ready(function() {

    // For Sticky Nav
    $('.js--section__carte').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '140px'
    });

    // Navigation Scroll
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            window.location.hash = hash;
          });
        }
    });

    //Mobile Navigations
    $('.js--nav--icon').click(function(){
        const nav = $('.js--main-nav');
        
        nav.slideToggle(0);
        const icon = $('.js--nav--icon ion-icon');

        console.log(icon[0].name);
        if (icon[0].name === "menu-outline") {
            icon[0].name = "close";
        } else {
            icon[0].name = "menu-outline";
        }

        
    });
    
    

});