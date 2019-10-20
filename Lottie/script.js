/* Shapes */
var x = 1;
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/saamerm/FidelityHackathonTeamSMEC/master/Lottie/data2.json'
});
function Reverse() {
  console.log("ADG");
  x *= -1;
  animItem.setSpeed(x);
}