const tiles = document.querySelectorAll('.tile');

tiles.forEach((tiles) => {
  tiles.addEventListener('click', () => {
    //   window.open("http://127.0.0.1:5501/build/", '_blank');
      tiles.forEach((tiles) => {
          tiles.classList.remove("active");
        });
        tiles.classList.add("active");
  })
});