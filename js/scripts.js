//back end

var conditional = function(s1, s2, s3) {
  if ((s1 + s2)===s3) {
    $("#notTriangle").show();
  } else if (s1 === s2 && s2 === s3) {
    $("#equilateral").show();
  } else if (s1 === s2 || s2 === s3 || s1 === s3 ) {
    $("#isosceles").show();
  } else if (s1 !== s2 && s2 !== s3) {
    $("#scalene").show();
  }
}





// front end
$(document).ready (function () {

  $("form#triangle").submit(function (event) {
    $("#isosceles, #equilateral, #scalene, #notTriangle").hide();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    conditional(side1, side2, side3);
    event.preventDefault();
  });
});
