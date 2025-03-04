// Blogs Section JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Swiper slider for blogs
    const swiper = new Swiper(".blogs-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    })
  
    // Blog Read More/Less Toggle
    document.querySelectorAll(".blog-read-more").forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true"
        const blogCard = this.closest(".blog-card")
        const content = this.previousElementSibling
  
        if (!isExpanded) {
          content.style.display = "block"
          blogCard.style.height = "auto"
          content.style.maxHeight = content.scrollHeight + "px"
        } else {
          content.style.maxHeight = "0"
          setTimeout(() => {
            content.style.display = "none"
            blogCard.style.height = "550px"
          }, 300)
        }
      })
    })
  
    // Add animation to blog cards when they come into view
    const blogCards = document.querySelectorAll(".blog-card")
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  
    blogCards.forEach((card) => {
      observer.observe(card)
    })
  })
  
  