$(document).ready(function() {
  $("form#person").submit(function(event) {
    var age = parseInt($("input#age").val());
    var height = parseFloat($("input#height").val());
    var weight = parseInt($("input#weight").val());

    if (age && weight && height) {
      if (age < 18 || weight < 60 || height < 1.6) {
        $("#cat").show();
      } else if (age === 18) {
        $("#cat, #dog").show();
      } else {
        $("#dog").show();
      }
    } else {
      alert('Please enter all information.');
      }

    event.preventDefault();
  });
});
