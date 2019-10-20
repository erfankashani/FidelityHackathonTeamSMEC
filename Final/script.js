function FirstNext(){
  $( ".card-01" ).hide();
  $( ".card-02" ).show();
  Reverse();
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