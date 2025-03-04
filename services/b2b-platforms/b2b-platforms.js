document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    })
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  
    // Video Background Fallback
    const video = document.getElementById("myVideo")
    if (video) {
      video.addEventListener("error", () => {
        video.style.display = "none"
        document.querySelector(".hero-section-services").style.backgroundImage =
          'url("../../assets/images/fallback-bg.jpg")'
      })
    }
  
    // Enhanced hover effects for solution cards
    const solutionCards = document.querySelectorAll(".solution-card")
    solutionCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px)"
        this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
        this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)"
      })
    })
  })
  
  