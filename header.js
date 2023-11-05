document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const icons = document.querySelectorAll('.nav-link i');
  
    // Function to toggle the visibility of the <p> and <i> elements
    function toggleVisibility() {
      navLinks.forEach(link => {
        const pElement = link.querySelector('p');
        const iElement = link.querySelector('i');
        if (pElement && iElement) {
          pElement.style.display = navbarToggler.getAttribute('aria-expanded') === 'true' ? 'inline' : 'none';
          iElement.style.display = navbarToggler.getAttribute('aria-expanded') === 'true' ? 'none' : 'inline';
        }
      });
    }
  
    // Initially hide the <p> and <i> elements
    toggleVisibility();
  
    // Add an event listener to the navbar-toggler button
    navbarToggler.addEventListener('click', toggleVisibility);
    
    icons.forEach(icon => {
      icon.addEventListener('mouseover', function(){
        icon.style.color = 'black';
        icon.classList.add('fa-beat-fade');
      })
      icon.addEventListener('mouseout', function(){
        icon.style.color = 'white';
        icon.classList.remove('fa-beat-fade');
      })
    })
  });

