let x = -45;
let y = -40.59;
let personX = 30;
let personY = -61.1;
let steps = 0;
yearCount = 11;

let transformIncrementX = 5;
let transformIncrementY = 2.3;
$("body").keydown(function(e) {

  if (steps < yearCount) {
    if(e.keyCode == 39) { // right, forward in time, wider
      x-=transformIncrementX;
      y+=transformIncrementY;
      personX -= transformIncrementX;
      personY += transformIncrementY;
      steps++;

      let transformString = "translateX(" + x.toString() + "vh) translateY(" + y.toString() + "vh) rotate(-25deg) skewX(40deg)";
      $("#chasm-bottom").css("transform", transformString);

      let personTransform = "translateX(" + personX.toString() + "vh) translateY(" + personY.toString() + "vh)";
      $("#person").css("transform", personTransform);
    }
  }

  if (steps > 0) {

    if(e.keyCode == 37) { // left, go backwards in time, narrow
      x+=transformIncrementX;
      y-=transformIncrementY;
      personX += transformIncrementX;
      personY -= transformIncrementY;
      steps--;

      let transformString = "translateX(" + x.toString() + "vh) translateY(" + y.toString() + "vh) rotate(-25deg) skewX(40deg)";

      let personTransform = "translateX(" + personX.toString() + "vh) translateY(" + personY.toString() + "vh)";
      $("#person").css("transform", personTransform);

      $("#chasm-bottom").css("transform", transformString);
    }
  }

});
