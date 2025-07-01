const tiler = document.getElementById("descriptor");
const tooltip = document.getElementById("tooltipContent");
const popperInstance = Popper.createPopper(tiler, tooltip, {
  placement: "right",
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 10],
      },
    },
  ],
});
// Show tooltip on tile hover
tiler.addEventListener("mouseenter", function () {
  tooltip.classList.remove("d-none");
  popperInstance.update();
});

// Hide tooltip on tile mouseleave
tiler.addEventListener("mouseleave", function () {
  tooltip.classList.add("d-none");
});

function blurry(){
const currentLevel = parseInt(overlay.dataset.blurlevel, 4);
  const increasedLevel = currentLevel + 1;
  this.dataset.blurlevel = increasedLevel;
  this.style.backdropFilter = `blur(${increasedLevel}px)`;
}

blurred = document.querySelectorAll(".tile")
blurred.forEach(element => {
  element.addEventListener('mouseenter', blurry)
});