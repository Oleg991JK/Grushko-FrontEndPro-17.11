window.addEventListener("DOMContentLoaded", () => {
     const showForm = document.querySelector(".btn-black")
     const form = document.querySelector(".form");
     const inputs = document.querySelector(".input");
  
     showForm.addEventListener("click", () => {
          form.style.display = "block";
     })
     
     form.addEventListener('submit', (event) => {
          event.preventDefault();     
          const data = Object.fromEntries(new FormData(event.target).entries());
          console.log(data);

     })

})
