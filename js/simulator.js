//This function is executed when the submit button is clicked
function appendNumbers(){
	//MAX NUMBER IS 84, otherwise the page formats gets ruined
	var max = $('#txt_number').val(); //
	
	if(max >84){
		alert("This number is too big");
		return;
	}
	
	
	var counter = 0;
	
	$('.number_box').remove();
	$('br').remove();
	for(i=1;i<=max;i++){
		counter++;
		$('#main').append("<div class='number_box'> <span class='number'>" + i + " </span></div>");
		if(counter%14 == 0)
			$('#main').append("</br>");
	}
}