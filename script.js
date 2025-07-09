const tiler = document.querySelectorAll(".descriptor");
const tooltip = document.querySelectorAll(".tooltipContent");
const popperInstances = [];
tooltip.forEach((item, index) => item.classList.add(`tooltip${index}`))
tiler.forEach((tile, index) => {
  const tooltipElement = document.querySelector(`.tooltip${index}`);
  const popperInstance = Popper.createPopper(tile, tooltipElement, {
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
  popperInstances.push(popperInstance);
})

// Show tooltip on tile hover
tiler.forEach((item, index) => item.addEventListener("mouseenter", () => {
  const showtooltip = document.querySelector(`.tooltip${index}`);
  showtooltip.classList.remove("d-none");
  const popperInstance = popperInstances[index];
  popperInstance.update();
}));
// Hide tooltip on tile mouseleave
tiler.forEach((item, index) => item.addEventListener("mouseleave", () => {
  const hidetooltip = document.querySelector(`.tooltip${index}`);
  hidetooltip.classList.add("d-none");
}));


// const tiler2 = document.querySelectorAll(".descriptor2");

// const popperInstances2 = [];
// tooltip.forEach((item, index) => item.classList.add(`tooltip${index}`))
// tiler2.forEach((tile, index) => {
//   const tooltipElement = document.querySelector(`.tooltip${index}`);
//   const popperInstance = Popper.createPopper(tile, tooltipElement, {
//   placement: "left",
//   modifiers: [
//     {
//       name: "offset",
//       options: {
//         offset: [0, 10],
//       },
//     },
//   ],
// });
//   popperInstances2.push(popperInstance);
// })

// // Show tooltip on tile hover
// tiler2.forEach((item, index) => item.addEventListener("mouseenter", () => {
//   const showtooltip = document.querySelector(`.tooltip${index}`);
//   showtooltip.classList.remove("d-none");
//   const popperInstance = popperInstances2[index];
//   popperInstance.update();
// }));
// // Hide tooltip on tile mouseleave
// tiler2.forEach((item, index) => item.addEventListener("mouseleave", () => {
//   const hidetooltip = document.querySelector(`.tooltip${index}`);
//   hidetooltip.classList.add("d-none");
// }));


// function blurry(){
// const currentLevel = parseInt(overlay.dataset.blurlevel, 4);
//   const increasedLevel = currentLevel + 1;
//   this.dataset.blurlevel = increasedLevel;
//   this.style.backdropFilter = `blur(${increasedLevel}px)`;
// }

// blurred = document.querySelectorAll(".tile")
// blurred.forEach(element => {
//   element.addEventListener('mouseenter', blurry)
// });