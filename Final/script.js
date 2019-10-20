function FirstNext(){
  $( ".card-01" ).hide();
  $( ".card-02" ).show();
  NextAnimation();
}

function SecondNext(){
  $( ".card-02" ).hide();
  $( ".card-03" ).show();
  NextAnimation();
}

function FinalSubmit(){
  console.log("Submit button");
  $( ".container1" ).hide();
  $( ".container2" ).show();
  NextAnimation();
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

var counter = 1;
function   NextAnimation() {
  console.log("ADG" + counter++);
  animItem.play();
  setInterval("animItem.pause();", 7000);
}
function Reverse2() {
  console.log("ADG");
  animItem.play();
}
$('.btn').click(function () {
  $(this).toggleClass("active"); //addCss("active");
})