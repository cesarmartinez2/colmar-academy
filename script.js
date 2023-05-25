// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    window.onload = function() {
      // Loading Animations
            // Loading Animations

            const observer1 = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-fade');
                    } else {
                        // entry.target.classList.remove('show');
                    }
                });
            });
          
            const observer2 = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-slide-left');
                    } else {
                        // entry.target.classList.remove('show');
                    }
                });
            });
            
            const observer3 = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-slide-right');
                    } else {
                        // entry.target.classList.remove('show');
                    }
                });
            });
        
            const observer4 = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-slide-up');
                    } else {
                        // entry.target.classList.remove('show');
                    }
                });
            });

            const hiddenFadeElements = document.querySelectorAll('.hidden-fade');
            const hiddenSlideLeftElements = document.querySelectorAll('.hidden-slide-left');
            const hiddenSlideRightElements = document.querySelectorAll('.hidden-slide-right');
            const hiddenSlideUpElements = document.querySelectorAll('.hidden-slide-up');
            hiddenFadeElements.forEach((el) => observer1.observe(el));
            hiddenSlideLeftElements.forEach((el) => observer2.observe(el));
            hiddenSlideRightElements.forEach((el) => observer3.observe(el));
            hiddenSlideUpElements.forEach((el) => observer4.observe(el));

  
      // Header Background Change
      
      let className = "inverted";
      let scrollTrigger = 50;
      
      window.onscroll = function() {
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
          document.getElementById("header").classList.remove(className);
        } else {
          document.getElementById("header").classList.add(className);
        }
      };



    // Hamburger Menu

      let modalBtn = document.getElementById('open-btn');
      let modal = document.getElementById('modal');
      let closeBtn = document.getElementById('close-btn');
  
      let home = document.getElementById('modal-home');
      let about = document.getElementById('modal-about');
      let campus = document.getElementById('modal-campus');
      let online = document.getElementById('modal-online');
      let companies = document.getElementById('modal-companies');
  
      let open = function() {
        modal.style.display = 'block'
      }
  
      let close = function() {
        modal.style.display = 'none'
      }
          
      modalBtn.addEventListener('click', open);
      closeBtn.addEventListener('click', close);
      home.addEventListener('click', close);
      about.addEventListener('click', close);
      campus.addEventListener('click', close);
      online.addEventListener('click', close);
      companies.addEventListener('click', close);

    }
});