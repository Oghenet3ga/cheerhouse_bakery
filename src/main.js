const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  //reset: true//
});
sr.reveal(`#home`);
//sr.reveal(`.home_image`, { origin: "bottom" });//
sr.reveal(`#about`, { origin: "left" });
sr.reveal(`.right`, { origin: "right" });
sr.reveal(`.left`, { origin: "left" });

sr.reveal(`#gallery`);
sr.reveal(`#contact`, { origin: "bottom" });
