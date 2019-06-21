
$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();

    // Collect name input.
    var name =
    $("#name").val();

    //Collect number input and convert to an integer.
    var number = parseInt(
    $("#number").val());

    //Display results.
    $("#result-section").show();
    $("#result-text").html(name+"<br>"+number);

  });
});
