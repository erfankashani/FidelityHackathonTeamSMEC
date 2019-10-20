/* Shapes */
var x = 1;
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
});
function Reverse() {
  console.log("ADG");
  x *= -1;
  animItem.setSpeed(x);
}