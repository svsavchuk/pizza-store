

function Pizza (topping, size) {
	this.topping = topping;
	this.size = size
	}

  var sizes = ["small", "medium", "large"]

  var tomatoes = {name: "Tomatoes", price: 0.99};
  var pepperoni = {name: "Pepperoni", price: 0.99};
  var bacon = {name: "Bacon", price: 0.99};
  var basil = {name: "Basil", price: 0.99};
  var toppings = {}


  Pizza.prototype.calculateTotal = function() {
    return t
  }




$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();

		//Verify that at least one topping has been selected
		var anyBoxesChecked = false;
		$("input:checkbox[name=topping-checkbox]").each(function() {
				if ($(this).is(":checked")) {
						anyBoxesChecked = true;
				}
		});

		if (anyBoxesChecked == false) {
			alert('Please select at least one topping');
			Swal.fire("Wait!","Please select at least one topping")
			// return false;
		}




// $("input[name=size-radio]:checked")

			// anyBoxesChecked = true
		  //   var anyBoxesChecked = false;
		  //   $("input[name=topping-checkbox]").each(function() {
		  //       if ($(this).is(":checked")) {
		  //           anyBoxesChecked == true;
		  //       }
		  //   });
			//
		  //   if (anyBoxesChecked == false) {
		  //     alert('Please select at least one topping');
		  //     return false;
		  //   }

    // Collect form inputs.
		var firstName = $("#input-first-name").val();
		var lastName = $("#input-last-name").val();
		var size = $("input:radio[name=size-radio]:checked").val();


		// $("input:checkbox[name=topping-checkbox]:checked").each(function(){
		// 	var toppings = $(this).val();
		//       $('#work-responses').append(workTransportationMode + "<br>");
		//     });



    var quanity = parseInt($("#input-quanity").val());

		alert(firstName+" "+lastName+" "+size+" "+quanity);

		// Alert user that Toppings section was not completed.



		// var checked = [];
		// $("input[name='items[]']:checked").each(function () {
		//   checked.push($(this).val());
		// });



    // Display results.
    // $("#result-section").show();
    // $("#result-text").html(name+"<br>"+number);

  });
});
