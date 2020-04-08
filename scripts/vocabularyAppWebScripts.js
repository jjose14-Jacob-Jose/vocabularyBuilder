//CONSTANTS FROM FILE vocabularyAppWebConstants.php
var TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER = "userInputTypeIsWordWithEnter_searchWordColumnOnly";
var TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER = "userInputTypeIsAllWithEnter_searchAllColumnsForWords";
var TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER = "userInputTypeIsWordWithoutEnter_searchWordColumnOnly";
var TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER = "userInputTypeIsAllWithoutEnter_searchAllColumnsForWords";
var USER_INPUT_VALUE = "valueInputByUser";
var USER_INPUT_TYPE = "userInputType";
var MSG_PLEASE_WAIT = "Searching for the word, please wait.";
var ENTER_KEY_HAS_TO_BE_PRESSED_RB_VALUE = "EnterKeyNeedNotBePressed";
var ENTER_KEY_NEED_NOT_HAS_TO_BE_PRESSED_RB_VALUE = "Searching EnterKeyNeedNotBePressed the word, please wait.";
var LABEL_MAGNIFY_USER_INPUT_LETTERS = "lbllettersTypedByUser";
var CB_MAGNIFY_USER_INPUT_LETTERS = "cbMagnifyLetters";


//OTHER CONSTANTS
var SERVER_URL = "vocabularyAppWebServer.php";

//INDEX.PHP TEXTBOX IDs
var USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER = "#" + TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER;
var USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER = "#" + TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER;
var USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER = "#" + TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER;
var USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER = "#" + TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER;
var LABEL_MAGNIFY_USER_INPUT_LETTERS_ID = "#" + LABEL_MAGNIFY_USER_INPUT_LETTERS;
var CB_MAGNIFY_USER_INPUT_LETTERS_ID = "#" + CB_MAGNIFY_USER_INPUT_LETTERS;

//CSS ELEMENT SIZES
TABLECOLUMN_NO_WIDTHPERCENT = 10;
TABLECOLUMN_WORD_WIDTHPERCENT = 40;
TABLECOLUMN_MEANING_WIDTHPERCENT = 35;
TABLECOLUMN_DEFINITION_WIDTHPERCENT = 35;
TABLECOLUMN_ADDITIONAL_INFO_WIDTHPERCENT = 25;
TABLECOLUMN_RELEVANT_EXAMPLE_WIDTHPERCENT = 10;
TABLECOLUMN_ROOT_INDEX_WIDTHPERCENT = 4;
TABLECOLUMN_ROOT_UNIT_WIDTHPERCENT = 3;
TABLECOLUMN_DATE_WIDTHPERCENT = 1;
TABLECOLUMN_TXTUSERINPUT_WIDTHPERCENT = 55;
ENTRIES_TO_BE_DISPLAYED_WITH_NEW_LINE= 20;





//FETCHING FROM DB (WORDS ONLY) FROM USER INPUT
function searchOnlyWordColumnWithEnter(){
	
	var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER;
	var userInputValue = $(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER).val();
	
	var serverURL = SERVER_URL;
	
	if(userInputValue)
	{
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
		userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
		userInputValue = "&" + USER_INPUT_VALUE + "=" + userInputValue;
		serverURL = serverURL + userInputType + userInputValue;
	}
	
	callServerAndDisplayServerResponse(serverURL);
	clearMagnifiedWords();
};


//FETCHING FROM DB (ALL COLUMN SEARCh) FROM USER INPUT
function searchAllColumnsWithEnter() {
	
	var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER;
	var userInputValue = $(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER).val();
	
	var serverURL = SERVER_URL;
	if(userInputValue)
	{
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
		userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
		userInputValue = "&" + USER_INPUT_VALUE + "=" + userInputValue;
		serverURL = serverURL + userInputType + userInputValue;
	}
	callServerAndDisplayServerResponse(serverURL);
	clearMagnifiedWords();
	
	
};
//FETCHING FROM DB (WORDS ONLY) FROM USER INPUT
function searchOnlyWordColumnWithoutEnter(){
		  
		  var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER;
		  var userInputValue = $(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER).val();
		  
		  var serverURL = SERVER_URL;
		  
		  if(userInputValue)
		  {
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
			  userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
			  userInputValue = "&" + USER_INPUT_VALUE + "=" + userInputValue;
			  serverURL = serverURL + userInputType + userInputValue;
		  }

		  callServerAndDisplayServerResponse(serverURL);
		  clearMagnifiedWords();
	};


//FETCHING FROM DB (ALL COLUMN SEARCh) FROM USER INPUT
function searchAllColumnsWithoutEnter() {
		  
		  var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER;
		  var userInputValue = $(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER).val();
		  
		  var serverURL = SERVER_URL;
		  if(userInputValue)
		  {
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
			  userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
			  userInputValue = "&" + USER_INPUT_VALUE + "=" + userInputValue;
			  serverURL = serverURL + userInputType + userInputValue;
		  }
		  callServerAndDisplayServerResponse(serverURL);
		  clearMagnifiedWords();


	};

//	FUNCTION TO CALL SERVER AND DISPLAY THE RESPONSE FROM SERVER
function callServerAndDisplayServerResponse(serverURL)
{
	document.querySelector('.tbodyTableWordsFromDB').innerHTML = "" ;
	document.getElementById("imgWaitScreen").style.visibility = 'visible';
	  fetch(serverURL).then((res) => res.json())
	  .then(response => {
	  	console.log(response);
	  	let output = '';
	  	var responseElementCount = 0;
	  	for(let i in response) {
	  		output += '<tr>';
	  		
	  		output += '<td id="No" class="tableRow" >';
	  			output += response[i].No;
	  			output += '</td>';		
	  			
	  			output += '<td id="Word" class="tableRow" >';
	  			output += response[i].Word;
	  			output += '</td>';		
	  			
	  			output += '<td id="Meaning" class="tableRow" >';
	  			output += response[i].Meaning;
	  			output += '</td>';
	  			
	  			output += '<td id="Definition" class="tableRow" >';
	  			output += response[i].Definition;
	  			output += '</td>';		
	  			
	  			output += '<td id="Additional_Info" class="tableRow" >';
	  			output += response[i].Additional_Info;
	  			output += '</td>';		
	  			
	  			output += '<td id="Relevant_Example" class="tableRow" >';
	  			output += response[i].Relevant_Example;
	  			output += '</td>';
	  			
	  			output += '<td id="Root_Index" class="tableRow" >';
	  			output += response[i].Root_Index;
	  			output += '</td>';		
	  			
	  			output += '<td id="Root_Unit" class="tableRow" >';
	  			output += response[i].Root_Unit;
	  			output += '</td>';		
	  			
	  			output += '<td id="Date" class="tableRow" >';
	  			output += response[i].Date;
	  			output += '</td>';
	  		
	  		output += '</tr>';
	  		responseElementCount = responseElementCount + 1;
	  	}
	  	document.querySelector('.numberOfWords').innerHTML = responseElementCount + " word(s) have been found.";
		
		//FUCNTION TO REPLACE NEW LINE WITH <br> SO THAT HTML DISPLAYS IT AS A NEW LINE WITH A CHECK TO REDUCE OVERHEAD
		if(responseElementCount<ENTRIES_TO_BE_DISPLAYED_WITH_NEW_LINE)
		{
			output = output.replace(/(?:\r\n|\r|\n)/g, '<br>');
		}
		
		
	  	document.querySelector('.tbodyTableWordsFromDB').innerHTML = output;
	  	document.getElementById("imgWaitScreen").style.visibility = 'hidden';
		setElementWidthAccordingToScreenSize();

	  }).catch(error => console.log(error.stack));
	}

//FUNCTION TO HIDE THE LOAD SCREEN GIF
$(document).ready(function() {
document.getElementById("imgWaitScreen").style.visibility = 'hidden';
clearInputTextFields();

//UNCOMMENT IF YOU WANT TO LOAD ALL WORDS WHEN PAGE LOADS
//callServerAndDisplayServerResponse(SERVER_URL);

//Assigning Enter Press key Event to Word Only Textbox.
$(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER).keyup(function(event) {
	if (event.keyCode === 13) {
		searchOnlyWordColumnWithEnter();
		
	}
});

//Assigning Enter Press key Event to ALL Textbox.
$(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER).keyup(function(event) {
    if (event.keyCode === 13) {
    	searchAllColumnsWithEnter();
    }
});


});

//FUNCTION TO CLEAR TEXTBOXs
function clearInputTextFields()
{
	valueOnLoad = "";
	
	$(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER).val(valueOnLoad);
	$(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER).val(valueOnLoad);
	$(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER).val(valueOnLoad);
	$(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER).val(valueOnLoad);
	
}

//FUNCTION TO SET WIDTH TO SCREEN ELEMENTS BASED ON SCREEN WIDTH
function setElementWidthAccordingToScreenSize()
{
	
	
	var screenWidth = screen.width;
	var screenWidthDecimalMultiplier = screenWidth / 100;
	
	 document.getElementById("No").style.maxWidth = TABLECOLUMN_NO_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Word").style.maxWidth = TABLECOLUMN_WORD_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 
	 document.getElementById("Meaning").style.maxWidth = TABLECOLUMN_MEANING_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Definition").style.maxWidth = TABLECOLUMN_DEFINITION_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Additional_Info").style.maxWidth = TABLECOLUMN_ADDITIONAL_INFO_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Root_Index").style.maxWidth = TABLECOLUMN_ROOT_INDEX_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Root_Unit").style.maxWidth = TABLECOLUMN_ROOT_UNIT_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Date").style.maxWidth = TABLECOLUMN_DATE_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 
	 document.getElementById(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 document.getElementById(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 document.getElementById(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 document.getElementById(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 
	
}
//FUNCTION TO DISPLAY THE WORDS INPUT BY USER MAGNIFIED BELOW
function displayLettersMagnified(inputTextBoxId)
{
	var textFieldContents = $("#" + inputTextBoxId).val()
	
	if($(CB_MAGNIFY_USER_INPUT_LETTERS_ID).is(":checked")) {
		
		var magnifiedLetters = "<label id=\"lbllettersTypedByUser\" >" + textFieldContents + "</label>";
		document.querySelector("#lettersTypedByUserMagnified").innerHTML = magnifiedLetters;
	}
}	

//FUNCTION CLEAR THE MAGNIFIED WORDS
function clearMagnifiedWords()
{
	document.querySelector("#lbllettersTypedByUser").remove();
	
}

////FETCH DATA
//var serverURL = 'wordlisterServer.php';
////fetch('wordListerServer.php').then((res) => res.json())
//fetch(serverURL).then((res) => res.json())
//.then(response => {	
//	console.log(response);
//	let output = '';
//	for(let i in response) {
//		output += '<tr>';
//			output += '<td id="No" class="tableRow" >';
//			output += response[i].No;
//			output += '</td>';		
//			
//			output += '<td id="Word" class="tableRow" >';
//			output += response[i].Word;
//			output += '</td>';		
//			
//			output += '<td id="Meaning" class="tableRow" >';
//			output += response[i].Meaning;
//			output += '</td>';
//			
//			output += '<td id="Definition" class="tableRow" >';
//			output += response[i].Definition;
//			output += '</td>';		
//			
//			output += '<td id="Additional_Info" class="tableRow" >';
//			output += response[i].Additional_Info;
//			output += '</td>';		
//			
//			output += '<td id="Relevant_Example" class="tableRow" >';
//			output += response[i].Relevant_Example;
//			output += '</td>';
//			
//			output += '<td id="Root_Index" class="tableRow" >';
//			output += response[i].Root_Index;
//			output += '</td>';		
//			
//			output += '<td id="Root_Unit" class="tableRow" >';
//			output += response[i].Root_Unit;
//			output += '</td>';		
//			
//			output += '<td id="Date" class="tableRow" >';
//			output += response[i].Date;
//			output += '</td>';
//		
//		output += '</tr>';
//	}
//	document.querySelector('.tbody').innerHTML = output;
//}).catch(error => console.log(error));
//
////SEARCHING ALL DATA
//$(document).ready(function(){
//
//	
////OLD METHOD SEARCHING ALL
//$("#txtUserInputAll").on("keyup", function() {
//  var value = $(this).val().toLowerCase();
//  $("#wordListTableBody tr").filter(function() {
//    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//  });
//});
//});
//
//////OLD METHOD SEARCHING ONLY MEANING
////$("#txtUserInputMeaning").on("keyup", function() {
////  var value = $(this).val().toLowerCase();
////  $("#wordListTableBody tr").filter( "#meaning" ,function() {
////    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
////  });
////});
//
//
////$(document).ready(function() {
////	// Setup - add a text input to each footer cell
////    $('#tableWords thead tr').clone(true).appendTo( '#tableWords thead' );
////    $('#tableWords thead tr:eq(1) th').each( function (i) {
////        var title = $(this).text();
////        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
////        $( 'input', this ).on( 'keyup change', function () {
////        if ( table.column(i).search() !== this.value ) {
////                table
////                    .column(i)
////                    .search( this.value )
////                    .draw();
////            }
////        } );
////    } );
//// 
////    var table = $('#tableWords').DataTable( {
////        orderCellsTop: true,
////        fixedHeader: true
////    } );
////} );
//
//
//
////FROM NEW SITE TO SEARCH MEANINGS ONLY
//$(document).ready(function() {
//	(function($) {
//		$("#tableWords tbody").addClass("search");
//		$('#txtUserInputMeaning').keyup(function() {
//			
//			var rex = new RegExp($(this).val(), 'i');
//			$('.search tr ').hide();
//			
//			//Recusively filter the jquery object to get results.
//			$('.search tr ').filter(function(i, v) {
//				var $t = $(this).children(":eq(" + "1" + ")");
//				return rex.test($t.text());
//			}).show();
//		})
//		
//	}(jQuery));
//	
//});



////FETCHING FROM DB BASED ON USER INPUT
//$(document).ready(function(){
//	  $("#txtUserInputMeaningNew").change(function(){
////	    alert("The text has been changed.");
//		  
//		  var serverURLWordOnly= "wordListerServerUserInputWord.php";
//		  var getMethodVariable = "/?userInputWord=";
//		  var userInputWord= $("#txtUserInputMeaningNew").val();
//		  if(userInputWord)
//			  {
//			  serverURLWordOnly = serverURLWordOnly + getMethodVariable + userInputWord;
//			  }
//		  else
//			  {
//			  
//			  serverURLWordOnly = serverURL;
//			  }
//		   
//		  
//		  
//		  fetch(serverURLWordOnly).then((res) => res.json())
//		  .then(response => {	
//		  	console.log(response);
//		  	let output = '';
//		  	for(let i in response) {
//		  		output += '<tr>';
//		  			output += '<td id="No" class="tableRow" >';
//		  			output += response[i].No;
//		  			output += '</td>';		
//		  			
//		  			output += '<td id="Word" class="tableRow" >';
//		  			output += response[i].Word;
//		  			output += '</td>';		
//		  			
//		  			output += '<td id="Meaning" class="tableRow" >';
//		  			output += response[i].Meaning;
//		  			output += '</td>';
//		  			
//		  			output += '<td id="Definition" class="tableRow" >';
//		  			output += response[i].Definition;
//		  			output += '</td>';		
//		  			
//		  			output += '<td id="Additional_Info" class="tableRow" >';
//		  			output += response[i].Additional_Info;
//		  			output += '</td>';		
//		  			
//		  			output += '<td id="Relevant_Example" class="tableRow" >';
//		  			output += response[i].Relevant_Example;
//		  			output += '</td>';
//		  			
//		  			output += '<td id="Root_Index" class="tableRow" >';
//		  			output += response[i].Root_Index;
//		  			output += '</td>';		
//		  			
//		  			output += '<td id="Root_Unit" class="tableRow" >';
//		  			output += response[i].Root_Unit;
//		  			output += '</td>';		
//		  			
//		  			output += '<td id="Date" class="tableRow" >';
//		  			output += response[i].Date;
//		  			output += '</td>';
//		  		
//		  		output += '</tr>';
//		  	}
//		  	document.querySelector('.tbody').innerHTML = output;
//		  }).catch(error => console.log(error));
//	  });
//	});

