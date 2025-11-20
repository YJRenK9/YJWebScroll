// document.addEventListener("DOMContentLoaded", function () {
//     // Your code here will run after the DOM is fully loaded
//     console.log("Document is ready!");

//     // global functions go here
//     this.style.backgroundColor = "aqua";
// });
const siteNav = document.querySelector('.site-nav');
const menuButton = document.querySelector('.menu-button');

// Ensure the menu is closed when resizing above 768px?
// menuButton.addEventListener('resize', () => {
//     if(window.outerWidth > 768) {
//         siteNav.setAttribute('data-menustate', 'closed');
//     }
// });

menuButton.addEventListener('click', () => {
    const currentState = siteNav.getAttribute('data-menustate');

    if (siteNav.getAttribute('data-menustate') === 'open') {
        siteNav.setAttribute('data-menustate', 'closed');
    } else {
        // creates a "data-menustate" attribute
        console.log(siteNav.getAttribute('data-menustate'));
        // if (siteNav.getAttribute('data-menustate') === null) {
        //     moveDown();
        //     setTimeout(() => {
        //         siteNav.setAttribute('data-menustate', 'open');
        //     }, 0.333);
            
        // } 
            siteNav.setAttribute('data-menustate', 'open');
        
        
        //siteNav.style.transition = "translate 0.667s ease-in-out";
    }

    console.log("Ay you got any ramen yo!");
    console.log(siteNav.getAttribute('data-menustate'));
});

function moveDown() {
    const mobileNav = document.querySelector('.site-nav ul');
    var pos = -125;
    var id = setInterval(frame, 0.667);
    function frame() {
        if (pos === 0) {
            clearInterval(id);
        } else {
            pos++;
            mobileNav.style.translate = "0 " + pos + "%";
        }
    }

}

// remove the data attribute on resize to fix drawer nav animation 
window.onresize = () => {
    // console.log("window resized!");
    // removes the "data-menustate" attribute
    siteNav.removeAttribute("data-menustate");
};

// Scroll-triggered Animation
// change active state for all target elements with intersection observer
const myObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // element is within the webpage (onscreen)
      entry.target.setAttribute("data-viewstate", "active");
    } else {
      // element is offscreen
      entry.target.setAttribute("data-viewstate", "inactive");
    }
  });
});

const mytargets = document.querySelectorAll('.observe-me');
mytargets.forEach(el => {
  // observes the element that has the 'observe-me' class
  myObserver.observe(el); 
});