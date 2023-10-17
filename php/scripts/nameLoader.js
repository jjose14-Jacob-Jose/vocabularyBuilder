function wordEntered () {
//	var characterEntered = document.getElementById("txtName").value;
	var characterEntered = $('#txtName').val();
	if($.trim(characterEntered) != '')
		{
		
			$.post("backend.php", {charactersEntered : characterEntered}, function (data) {
				$('#name-data').text(data);
			});
		}
	
}


//$('input#btnName-submit').on('click', function () {
//	alert(11);
//});


//function clicked () {
//	alert ("hello");
//	$('input#btnName-submit').on('click', function () {
//	alert ("button has been clicked");
//});
//}


//$('input#btnName-submit').on('click', function () {
//	alert ("button has been clicked");
//});