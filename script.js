function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* pegar a tag img */
  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./Assets/assets/avatar1-light.png")
  } else {
    // se tiver night mode, adicionar a img night
    img.setAttribute("src", "./Assets/assets/avatar1.png")
  }
  const alt = document.querySelector("#profile img")
}
