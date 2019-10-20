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
  $( ".container1" ).hide();
  $( ".container2" ).show();
  
}

$(document).ready(function() {
    $( ".card-03" ).hide();
    $( ".card-02" ).hide();
    $( ".container2" ).hide();
    
});

var x = 1;
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  autoplay: false,
  loop: false,
  path: 'https://raw.githubusercontent.com/saamerm/FidelityHackathonTeamSMEC/master/Lottie/data2.json'
});
function Reverse() {
  console.log("ADG");
  animItem.play();
}

$('.btn').click(function () {
  $(this).toggleClass("active"); //addCss("active");
})