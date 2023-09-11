const magicCTA = document.querySelector(".custom-image__btn");

magicCTA.addEventListener("click", function (e) {
  console.log(e.target.dataset.message.length);
  if (e.target.dataset.message.length) {
    alert(e.target.dataset.message);
    return;
  }

  alert("Hello, world!");
});
