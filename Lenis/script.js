const lenis = new Lenis(); //raf= Request Animation Frame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
