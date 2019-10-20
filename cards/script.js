function FirstNext(){
  $( ".card-01" ).hide();
  $( ".card-02" ).show();
}

function SecondNext(){
  $( ".card-02" ).hide();
  $( ".card-03" ).show();
}

function FinalSubmit(){
  console.log("Submit button");
}

$(document).ready(function() {
    $( ".card-03" ).hide();
    $( ".card-02" ).hide();
});

var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
});
function Reverse() {
  console.log("ADG");
  animItem.setSpeed(-.5);
}