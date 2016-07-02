//This function is executed when the submit button is clicked
function appendNumbers(){
	var max = $('#txt_number').val();
	
	for(i=1;i<=max;i++){
		$('#main').append("<p style='display:inline;'>Test</p>");
	}
}