let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Wrap around
    showTestimonial(currentIndex);
}

// Show the first testimonial on load
showTestimonial(currentIndex);

// Change testimonial every 5 seconds
setInterval(nextTestimonial, 5000);

//tabs
const tabs = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = document.getElementById(tab.dataset.tab);

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    targetTab.classList.add('active');
  });
});

//menu
function toggleMenu() {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("show");
  }

//call header
document.addEventListener("DOMContentLoaded", function() {
    fetch('../Custom-Website_Beloman---v2/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
});

//call navigation bar
document.addEventListener("DOMContentLoaded", function() {
    fetch('../Custom-Website_Beloman---v2/components/nav-bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-bar').innerHTML = data;
        });
});

//call testimionials box


//call footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
//sticky bar
const rightColumn = document.querySelector('.right-column');
const gridContainer = document.querySelector('.left-column');

window.addEventListener('scroll', () => {
  const gridContainerBottom = gridContainer.offsetTop + gridContainer.offsetHeight;
  const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // threshold to control when the sticky behavior stops
  const threshold = gridContainerBottom - 100;

  if (windowScrollTop > threshold) {
    rightColumn.style.position = 'static';
  } else {
    rightColumn.style.position = 'sticky';
    rightColumn.style.top = '0';
  }
});
    