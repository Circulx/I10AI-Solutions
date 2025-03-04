document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
  })

  // Counter Animation for Stats
  function animateCounter(element, target) {
    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      element.textContent = Math.floor(current)
      if (current >= target) {
        element.textContent = target
        clearInterval(timer)
      }
    }, 20)
  }

  // Intersection Observer for Stats
  const statsSection = document.querySelector(".stats")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".stat-card h3").forEach((counter) => {
            const target = Number.parseInt(counter.textContent)
            animateCounter(counter, target)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  if (statsSection) {
    observer.observe(statsSection)
  }

  // Service Cards Hover Effect
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
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
})

