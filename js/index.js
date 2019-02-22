function openNav() {
    document.querySelector(".dropdown").style.width = "100%";
    document.querySelector(".menu-close").style.display = "block";
    document.querySelector(".menu-expand").style.display = "none";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.querySelector(".dropdown").style.width = "0%";
    document.querySelector(".menu-close").style.display = "none";
    document.querySelector(".menu-expand").style.display = "block";
  }