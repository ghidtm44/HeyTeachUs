document.addEventListener("DOMContentLoaded", function() {
    const lazyElements = document.querySelectorAll(".lazy");
  
    const lazyLoadOptions = {
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const lazyLoadObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const lazyElement = entry.target;
          if (lazyElement.tagName === "IMG") {
            lazyElement.src = lazyElement.dataset.src;
            lazyElement.classList.add("loaded");
          } else {
            lazyElement.classList.add("loaded");
          }
          lazyLoadObserver.unobserve(lazyElement);
        }
      });
    }, lazyLoadOptions);
  
    lazyElements.forEach(function(lazyElement) {
      lazyLoadObserver.observe(lazyElement);
    });
  });