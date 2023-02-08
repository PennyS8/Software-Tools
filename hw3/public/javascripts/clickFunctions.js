//makes this code available after the webpage has loaded
$(document).ready(function () {

	order = function(){
		/*#values of Id's are vars*/
		notes = $("#instructions").val();
		quantity = $("#numToppings").val();
		/*store flavor as a var*/

		/*If text area says 'vegan' show dairy content warning*/
		if ($("#instructions").val().includes('vegan')) {
			alert("Warning: All cheesecakes contain dairy");
		} else {//else show order made

			flavor = $("input[name='flavor']:checked").val();
			$("#toppings-confirm").text('Topping: ' + flavor);

			$("#quantity-confirm").text('Quantity: ' + quantity);
			$("#notes-confirm").text('Notes: ' + notes);

			$("#remove").hide();
			$("#show").show();
			
		}
	}
	$("#order").click(order);

	/*
	$("#dropdown-box a").click(function(){
		$("#dropdown-top").text($(this).text());
	})
	*/
	dropClick = function(){
		$("#dropdown-top").text($(this).text());
	}
	$("#dropdown-box a").click(dropClick);

});
