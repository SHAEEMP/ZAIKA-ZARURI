
    /* Nav bar Manu*/
    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    }

    /*Dropdown */

    document.addEventListener("DOMContentLoaded", function() {
        const dropdowns = document.querySelectorAll(".dropdown");

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener("click", function(event) {
                const submenu = this.querySelector(".submenu");
                if (submenu) {
                    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
                }
                event.stopPropagation();
            });
        });

        // Close dropdowns if clicking anywhere outside
        document.addEventListener("click", function(event) {
            dropdowns.forEach(dropdown => {
                const submenu = dropdown.querySelector(".submenu");
                if (submenu && !dropdown.contains(event.target)) {
                    submenu.style.display = "none";
                }
            });
        });
    });



    // Enable click-based dropdown for mobile and tablet
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function () {
          this.parentElement.classList.toggle('active');
        });
      });



    /* carousel */

    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.dot');

        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            dots[i].classList.remove('active');
        }

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function currentSlide(index) {
        showSlide(index - 1);
    }

    setInterval(nextSlide, 3000); // Automatic play every 3 seconds

    showSlide(currentIndex); // Initialize the first slide


    /* Demo purposes only div hover effect */
    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );



    /* Product Description */

    // Update total price based on quantity selection
    function updatePrice() {
        const price = 1000; // Price of the product (₹)
        const quantity = document.getElementById('quantity').value;
        const totalPrice = price * quantity;
        document.getElementById('total-price').innerText = '₹' + totalPrice;
      }

    // Add to cart function (basic)
    function addToCart() {
        const quantity = document.getElementById('quantity').value;
        const price = 1000; // Price of the product
        const totalPrice = price * quantity;
        alert('Added ' + quantity + ' items to cart. Total Price: ₹' + totalPrice);
    }

      // Initial call to set total price when the page loads
      updatePrice();


    /* form whast and email */

    // Get the modal, button and close button
    var modal = document.getElementById('formModal');
    var buyNowBtn = document.getElementById('buyNowBtn');
    var closeBtn = document.getElementById('closeBtn');
    
    // When the user clicks the "Buy Now" button, open the modal
    buyNowBtn.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks the close button, close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Handle form submission
    document.getElementById('orderForm').onsubmit = function(e) {
        e.preventDefault();  // Prevent the form from reloading the page
    
        // Get form values
        var name = document.getElementById('name').value;
        var mobile = document.getElementById('mobile').value;
        var address = document.getElementById('address').value;
        var quantity = document.getElementById('quantity').value;
        var weight = document.getElementById('weight').value;
    
        // Send details via WhatsApp
        var whatsappMessage = `Order Details:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nQuantity: ${quantity}\nWeight: ${weight}g`;
        var whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    
        // Send details via Email (using a mailto link)
        var emailSubject = 'New Product Order';
        var emailBody = `Order Details:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nQuantity: ${quantity}\nWeight: ${weight}g`;
        var emailUrl = `mailto:support@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = emailUrl;
    
        // Close the modal
        modal.style.display = "none";
    }
    
//* Tabs contents *//



$(document).ready(function(){
  
	function mobileTabDropdown(){
			jQuery('.nav-tabs.mobile-tabs .nav-item').on('click', function(){
				jQuery(this).parent().prepend(jQuery(this));
				jQuery('.nav-tabs.mobile-tabs .nav-item').toggleClass('visible-xs visible-sm');
			});
	}

	if($(window).width() < 992) {
	 mobileTabDropdown();
	}

	$(window).resize(function() {
	 if($(window).width() < 992) {
			mobileTabDropdown();
		}
		else {
		 jQuery('.nav-tabs.mobile-tabs .nav-item').off();
		}
	});

});





/* Tab menu 

const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
        
        tabPanes.forEach((tabPane) => tabPane.classList.remove('active'));
        tabPanes[index].classList.add('active');
    });
});

/ Animate tabs

const animateTabs = () => {
    tabs.forEach((tab, index) => {
        tab.style.transform = `translateY(${index * 10}px)`;
        tab.style.transition = 'transform 0.3s ease-in-out';
    });
};
*/



/* Slick Slider */

$(".slick-slider").slick({
    slidesToShow: 4,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
      // dots: false, Boolean
     // arrows: false, Boolean
   });
 

   /*  */


   // Selecting the testimonial container and individual testimonials
const testimonials = document.querySelectorAll('.testimonial');


// Function to show the current testimonial
function showTestimonial(index) {
    // Reset all testimonials
    testimonials.forEach((testimonial, i) => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateX(100%)';
    });
    // Show the current testimonial
    testimonials[index].style.opacity = '1';
    testimonials[index].style.transform = 'translateX(0)';
}

// Function to move to the next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

// Initial testimonial display
showTestimonial(currentIndex);

// Set interval for autoplay (change every 4 seconds)
setInterval(nextTestimonial, 4000);

//* Contact form *//

function sendMessage() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (!name || !phone || !email || !subject || !message) {
        alert('Please fill all the required fields.');
        return;
    }

    /* Mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`)}`;
    */

    // WhatsApp link
    const whatsappLink = `https://wa.me/9561225793?text=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`)}`;

    // Open links
    window.open(mailtoLink, '_blank');
    window.open(whatsappLink, '_blank');
}




