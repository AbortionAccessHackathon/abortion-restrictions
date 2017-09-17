let x = -80;
let y = -24.5;
let personX = -5;
let personY = -45;

let transformIncrementX = 5;
let transformIncrementY = 2.3;
$("body").keydown(function(e) {

  if (personX > -20) {
    if(e.keyCode == 37) { // left
      x-=transformIncrementX;
      y+=transformIncrementY;
      personX -=transformIncrementX;
      personY +=transformIncrementY;

      let transformString = "translateX(" + x.toString() + "vh) translateY(" + y.toString() + "vh) rotate(-25deg) skewX(40deg)";
      $("#chasm-bottom").css("transform", transformString);

      let personTransform = "translateX(" + personX.toString() + "vh) translateY(" + personY.toString() + "vh)";
      $("#person").css("transform", personTransform);
    }
  }

  if (personX < 35) {
    if(e.keyCode == 39) { // right
    x+=transformIncrementX;
    y-=transformIncrementY;
    personX += transformIncrementX;
    personY -= transformIncrementY;
    let transformString = "translateX(" + x.toString() + "vh) translateY(" + y.toString() + "vh) rotate(-25deg) skewX(40deg)";

    let personTransform = "translateX(" + personX.toString() + "vh) translateY(" + personY.toString() + "vh)";
    $("#person").css("transform", personTransform);

    $("#chasm-bottom").css("transform", transformString);
  }
  }

});
