$(document).ready(function () {
  $('.order-btn').on('click', function () {
    Swal.fire({
      icon: 'success',
      title: 'Added to Order!',
      text: 'Item saved. You can checkout later.',
      timer: 2000,
      showConfirmButton: false
    });
  });
});


$(document).ready(function () {
  $('.order-btn').on('click', function () {
    Swal.fire({
      icon: 'success',
      title: 'Added to Order!',
      text: 'Item saved. You can checkout later.',
      timer: 2000,
      showConfirmButton: false
    });
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 }
    }
  });
});


$(document).ready(function () {
  $('.order-btn').on('click', function () {
    Swal.fire({
      icon: 'success',
      title: 'Added to Order!',
      text: 'Item saved. You can checkout later.',
      timer: 2000,
      showConfirmButton: false
    });
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 }
    }
  });

  // Contact form submission
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const phone = $('#phone').val().trim();
    const message = $('#message').val().trim();

    if (!name || !phone || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Please fill in all fields!'
      });
      return;
    }

    const whatsappURL = `https://wa.me/2349045371420?text=Hello%20SugarCrave%2C%20my%20name%20is%20${encodeURIComponent(name)}.%20My%20phone%20number%20is%20${encodeURIComponent(phone)}.%20I’d%20like%20to%20order%3A%20${encodeURIComponent(message)}`;

    Swal.fire({
      title: 'Send message via WhatsApp?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, open WhatsApp'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(whatsappURL, '_blank');
        $('#contactForm')[0].reset();
      }
    });
  });
});
