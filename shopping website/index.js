document.getElementById("shopNow").addEventListener('click', function () {
  window.scrollBy({
    top: 500,
    left: 0,
    behavior: 'smooth'
  })
});

const imgContainer = document.getElementById("imgContainer");
imgContainer.addEventListener("click", () => {
   window.location.href = "cart.html";
});


