//CONSTANTS FROM FILE vocabularyAppWebConstants.php
var TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER = "userInputTypeIsWordWithEnter_searchWordColumnOnly";
var TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER = "userInputTypeIsAllWithEnter_searchAllColumnsForWords";
var TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER = "userInputTypeIsWordWithoutEnter_searchWordColumnOnly";
var TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER = "userInputTypeIsAllWithoutEnter_searchAllColumnsForWords";
var USER_INPUT_VALUE = "valueInputByUser";
var USER_INPUT_TYPE = "userInputType";
var LABEL_MAGNIFY_USER_INPUT_LETTERS = "lbllettersTypedByUser";
var CB_MAGNIFY_USER_INPUT_LETTERS = "cbMagnifyLetters";
var CB_SELECT_ALL_TEXT_BOX_LETTERS_ON_FOCUS = "cbSelectTextboxOnFocus";
var CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY = "cbsearchMerriamWebsterDictionary";
var CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_FOR_ETYMOLOGY_SECTION = "cbsearchMerriamWebsterDictionaryForEtymologySection";
var CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_THESAURUS = "cbsearchMerriamWebsterThesaurus";
var CB_SHOW_SEARCH_RESULTS_FROM_OLAM_DICTIONARY = "cbsearchOlamDictionary";
var CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_SEARCH = "cbsearchGoogle";
var CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_IMAGES = "cbsearchGoogleImages";
var CB_SHOW_SEARCH_RESULTS_FROM_YOUTUBE = "cbsearchYouTube";
var CB_SEARCH_ONLY_IF_WORDS_ARE_NOT_IN_OWN_LIST = "cbsearchExternalSourcesIfNotFoundInYourOwnDB";
var CB_SELECT_ALL_EXTERNAL_SEARCH_OPTIONS = "cbsearchSelectAllExternalSearchOptions";
var CB_FOCUS_BACK_TO_VOCABULARY_APP_WEB_AFTER_SEARCHING_EXTERNAL_SOURCES = "cbFocusBackToVocabularyAppWebAfterExternalSearch";
var DIV_CONFIGURATION_SECTION = "divConfigurationSection";
var DIV_USER_INPUT_SECTION = "userInput";

var SYMBOL_HASH = "#";
var DELAY_FOR_TOAST_MESSAGE_IN_SECONDS = "10";

//OTHER CONSTANTS
var SERVER_URL = "vocabularyAppWebServer.php";

//INDEX.PHP TEXTBOX IDs
var USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER = SYMBOL_HASH + TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER;
var USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER = SYMBOL_HASH + TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER;
var USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER = SYMBOL_HASH + TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER;
var USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER = SYMBOL_HASH + TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER;
var LABEL_MAGNIFY_USER_INPUT_LETTERS_ID = SYMBOL_HASH + LABEL_MAGNIFY_USER_INPUT_LETTERS;
var CB_MAGNIFY_USER_INPUT_LETTERS_ID = SYMBOL_HASH + CB_MAGNIFY_USER_INPUT_LETTERS;
var CB_SELECT_ALL_TEXT_BOX_LETTERS_ON_FOCUS_ID = SYMBOL_HASH + CB_SELECT_ALL_TEXT_BOX_LETTERS_ON_FOCUS;
var CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_ID = SYMBOL_HASH + CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY;
var CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_FOR_ETYMOLOGY_SECTION_ID = SYMBOL_HASH + CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_FOR_ETYMOLOGY_SECTION;
var CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_THESAURUS_ID = SYMBOL_HASH + CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_THESAURUS;
var CB_SHOW_SEARCH_RESULTS_FROM_OLAM_DICTIONARY_ID = SYMBOL_HASH + CB_SHOW_SEARCH_RESULTS_FROM_OLAM_DICTIONARY;
var CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_SEARCH_ID = SYMBOL_HASH + CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_SEARCH;
var CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_IMAGES_ID = SYMBOL_HASH + CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_IMAGES;
var CB_SHOW_SEARCH_RESULTS_FROM_YOUTUBE_ID = SYMBOL_HASH + CB_SHOW_SEARCH_RESULTS_FROM_YOUTUBE;
var CB_SEARCH_ONLY_IF_WORDS_ARE_NOT_IN_OWN_LIST_ID = SYMBOL_HASH + CB_SEARCH_ONLY_IF_WORDS_ARE_NOT_IN_OWN_LIST;
var CB_SELECT_ALL_EXTERNAL_SEARCH_OPTIONS_ID = SYMBOL_HASH + CB_SELECT_ALL_EXTERNAL_SEARCH_OPTIONS;
var CB_FOCUS_BACK_TO_VOCABULARY_APP_WEB_AFTER_SEARCHING_EXTERNAL_SOURCES_ID = SYMBOL_HASH + CB_FOCUS_BACK_TO_VOCABULARY_APP_WEB_AFTER_SEARCHING_EXTERNAL_SOURCES;
var DIV_CONFIGURATION_SECTION_ID = SYMBOL_HASH + DIV_CONFIGURATION_SECTION;

var STRING_VALUE_UNDEFINED = undefined;
var STRING_VALUE_EMPTY = '';
var MSG_TOAST_CLOSE = 'Press any key or click close';
var MSG_WORD_NOT_FOUND = "I am sorry, the vocabulary list is not comprehensive."
	+ getStringConcatenated("<br>", 3)
	+ "Can you try another word?"
	+ getStringConcatenated("<br>", 3)
	+ "Thank you very much.";

var MSG_SERVER_ERROR	 = "Our server is currently facing outage."
	+ getStringConcatenated("<br>", 3)
	+ "Would you mind trying again after sometime."
	+ getStringConcatenated("<br>", 3)
	+ "Thank you for consideration.";


//CSS ELEMENT SIZES
TABLECOLUMN_NO_WIDTHPERCENT = 1;
TABLECOLUMN_WORD_WIDTHPERCENT = 10;
TABLECOLUMN_MEANING_WIDTHPERCENT = 17;
TABLECOLUMN_DEFINITION_WIDTHPERCENT = 51;
TABLECOLUMN_ADDITIONAL_INFO_WIDTHPERCENT = 16;
TABLECOLUMN_RELEVANT_EXAMPLE_WIDTHPERCENT = 5;
TABLECOLUMN_DATE_WIDTHPERCENT = 1;
TABLECOLUMN_TXTUSERINPUT_WIDTHPERCENT = 55;
ENTRIES_TO_BE_DISPLAYED_WITH_NEW_LINE= 20;


//URLs OF MERRIAM-WEBSTER AND OLAM
var URL_MERRIAM_WEBSTER_DICTIONARY = "https://www.merriam-webster.com/dictionary/";
var URL_MERRIAM_WEBSTER_THESAURUS = "https://www.merriam-webster.com/thesaurus/";
var URL_OLAM_DICTIONARY = "https://olam.in/Dictionary/en_ml/";
var URL_GOOGLE_SEARCH = "https://www.google.com/search?q=";
var URL_GOOGLE_IMAGES = "https://www.google.com/search?tbm=isch&q=";
var URL_YOUTUBE = "https://www.youtube.com/results?search_query=";

//TABS FOR LOADING DIFFERENT PAGES
var tabMerriamWebsterDictionary;
var tabMerriamWebsterThesaurus;
var tabOlam;
var tabGoogleSearch;
var tabGoogleImages;
var tabYoutube;
var tabMerriamWebsterDictionary2ForEymologySection;

var matchingWordsInOwnList;
var variableForTogglingTopAndConfigurationSectionOfPage = 0;
var timeStampOfLastTimeCloseAllTabsKeyIsPressed = 0;
var CONST_CLOSE_ALL_TABS_KEY_CONSECUTIVE_KEY_PRESS_INTERVAL_SECONDS = 2;

//FUNCTION TO FETCH USER-INPUT VALUE FROM TEXT FIELD
function getValueFromTextField (textFieldID)
{
	var textFieldValue = $(`${textFieldID}`).val();
	return(textFieldValue);
}

function getStringConcatenated(string, count) {
	let stringConcatenated = "";
	for(let i=0; i<count; i++) {
		stringConcatenated = stringConcatenated + string;
	}
	return stringConcatenated;
}

//FETCHING FROM DB (WORDS ONLY) FROM USER INPUT
function searchOnlyWordColumnWithEnter(){
	
	var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER;
	var userInputValue = getValueFromTextField(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER);
	
	var serverURL = SERVER_URL;
	
	if(userInputValue)
	{
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
		userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
		var userInputValueInURLFormat = "&" + USER_INPUT_VALUE + "=" + userInputValue;
		serverURL = serverURL + userInputType + userInputValueInURLFormat;
	}
	callServerAndDisplayServerResponse(userInputValue, serverURL);
	clearMagnifiedWords();
	clearTextBoxContents(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER);
};


//FETCHING FROM DB (ALL COLUMN SEARCh) FROM USER INPUT
function searchAllColumnsWithEnter() {
	
	var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER;
	var userInputValue = getValueFromTextField(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER);
	
	var serverURL = SERVER_URL;
	if(userInputValue)
	{
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
		userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
		var userInputValueInURLFormat = "&" + USER_INPUT_VALUE + "=" + userInputValue;
		serverURL = serverURL + userInputType + userInputValueInURLFormat;
	}
	callServerAndDisplayServerResponse(userInputValue, serverURL);
	clearMagnifiedWords();
	clearTextBoxContents(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER);
};

//FETCHING FROM DB (WORDS ONLY) FROM USER INPUT
function searchOnlyWordColumnWithoutEnter(){
		  
		  var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER;
		  var userInputValue = getValueFromTextField(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER);
		  
		  var serverURL = SERVER_URL;
		  
		  if(userInputValue)
		  {
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
			  userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
			  var userInputValueInURLFormat = "&" + USER_INPUT_VALUE + "=" + userInputValue;
			  serverURL = serverURL + userInputType + userInputValueInURLFormat;
		  }

		  callServerAndDisplayServerResponse(userInputValue, serverURL);
		  clearMagnifiedWords();
		  
	};


//FETCHING FROM DB (ALL COLUMN SEARCh) FROM USER INPUT
function searchAllColumnsWithoutEnter() {
		  
		  var userInputType = TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER;
  		  var userInputValue = getValueFromTextField(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER);

		  var serverURL = SERVER_URL;
		  if(userInputValue)
		  {
//			  IF THE USER HAS INPUT A WORD THEN DISPLAY ONLY WORDS HAVING USER INPUT
			  userInputType = "/?" + USER_INPUT_TYPE + "=" + userInputType;
			  var userInputValueInURLFormat = "&" + USER_INPUT_VALUE + "=" + userInputValue;
			  serverURL = serverURL + userInputType + userInputValueInURLFormat;
		  }
		  callServerAndDisplayServerResponse(userInputValue, serverURL);
		  clearMagnifiedWords();


	};

/**
 * Replace a string if its equal to a specific string.
 * @param stringOriginal : String whose value is to be checked.
 * @param stringToBeChecked : String against which the string must be checked.
 * @param stringReplacement : Replacement string.
 * @returns {*} : String
 */
function replaceStringWithString(stringOriginal, stringToBeChecked, stringReplacement) {
	if (stringOriginal === stringToBeChecked)
		return stringReplacement;
	else
		return stringOriginal;
}

//	FUNCTION TO CALL SERVER AND DISPLAY THE RESPONSE FROM SERVER
function callServerAndDisplayServerResponse(userInputValue, serverURL)
{
	document.querySelector('.tbodyTableWordsFromDB').innerHTML = "" ;
	document.getElementById("imgWaitScreen").style.visibility = 'visible';
	document.getElementById("imgWaitScreen").style.height = "50%";
	  fetch(serverURL).then((res) => res.json())
	  .then(response => {
	  	console.log(response);

		if(response.length === 0)
			showToast(MSG_WORD_NOT_FOUND, DELAY_FOR_TOAST_MESSAGE_IN_SECONDS);

	  	let output = '';
	  	matchingWordsInOwnList = 0;
	  	for(let i in response) {
	  		output += '<tr>';
	  		let valueFromJSON = '';

			output += '<td id="Word" class="tableRow" >';
			output += replaceStringWithString(response[i].Word, STRING_VALUE_UNDEFINED, STRING_VALUE_EMPTY) + '</td>';

			output += '<td id="Meaning" class="tableRow" >';
			output += replaceStringWithString(response[i].Meaning, STRING_VALUE_UNDEFINED, STRING_VALUE_EMPTY) + '</td>';

			output += '<td id="Definition" class="tableRow" >';
			output += replaceStringWithString(response[i].Definition, STRING_VALUE_UNDEFINED, STRING_VALUE_EMPTY) + '</td>';

			output += '<td id="Additional_Info" class="tableRow" >';
			output += replaceStringWithString(response[i].Additional_Info, STRING_VALUE_UNDEFINED, STRING_VALUE_EMPTY) + '</td>';

			output += '<td id="Date" class="tableRow" >';
			output += replaceStringWithString(response[i].Date, STRING_VALUE_UNDEFINED, STRING_VALUE_EMPTY) + '</td>';

	  		output += '</tr>';
	  		matchingWordsInOwnList = matchingWordsInOwnList + 1;
	  	}
	  	document.querySelector('.numberOfWords').innerHTML = "<br>" + matchingWordsInOwnList + " word(s) have been found.";
		
		//FUCNTION TO REPLACE NEW LINE WITH <br> SO THAT HTML DISPLAYS IT AS A NEW LINE WITH A CHECK TO REDUCE OVERHEAD
		if(matchingWordsInOwnList<ENTRIES_TO_BE_DISPLAYED_WITH_NEW_LINE)
		{
			output = output.replace(/(?:\r\n|\r|\n)/g, '<br>');
		}
		
		
	  	document.querySelector('.tbodyTableWordsFromDB').innerHTML = output;
	  	document.getElementById("imgWaitScreen").style.visibility = 'hidden';
	  	document.getElementById("imgWaitScreen").style.height = "0px";

		setElementWidthAccordingToScreenSize();
		closeAdditionalSearchTabs();
		getWordDefinitionFromOtherSources(userInputValue);


	  }).catch(error => {
		  console.log(error.stack);
		  document.getElementById("imgWaitScreen").style.visibility = 'hidden';
		  showToast(MSG_SERVER_ERROR, DELAY_FOR_TOAST_MESSAGE_IN_SECONDS);

	  });
}

function showToast(message, delayInSeconds) {
	// Create a toast element
	const toast = document.createElement('div');
	toast.classList.add('toast');
	toast.innerHTML = message;

	// Create a close button
	const toastCloseButton = document.createElement('span');
	toastCloseButton.textContent = MSG_TOAST_CLOSE; // Display "x" as the close button
	toastCloseButton.classList.add('toastCloseButton');
	toastCloseButton.addEventListener('click', () => {
		document.body.removeChild(toast);
	});
	toast.appendChild(toastCloseButton);
	document.body.appendChild(toast);
	// Hiding toast after the delay.
	setTimeout(() => {
		document.body.removeChild(toast);
	}, delayInSeconds * 1000);

	// Hide the toast if the user clicks on the screen.
	document.addEventListener('click', () => {
		// Hide the toast element
		document.body.removeChild(toast);
	});
	document.addEventListener('keypress', () => {
		// Hide the toast element
		document.body.removeChild(toast);
	});
}

//FUNCTION TO HIDE THE LOAD SCREEN GIF
$(document).ready(function() {
document.getElementById("imgWaitScreen").style.visibility = 'hidden';
document.getElementById("imgWaitScreen").style.height = "0px";
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

//Assigning Events to each Key Press
$(document).keyup(function(event) {
   keyPressEvent(event.keyCode)
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
	
	 document.getElementById("Word").style.width = TABLECOLUMN_WORD_WIDTHPERCENT * screenWidthDecimalMultiplier;
	 document.getElementById("Meaning").style.width = TABLECOLUMN_MEANING_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Definition").style.width = TABLECOLUMN_DEFINITION_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Additional_Info").style.width = TABLECOLUMN_ADDITIONAL_INFO_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Date").style.width = TABLECOLUMN_DATE_WIDTHPERCENT * screenWidthDecimalMultiplier;
	 
	 document.getElementById("Word").style.maxWidth = TABLECOLUMN_WORD_WIDTHPERCENT * screenWidthDecimalMultiplier;
	 document.getElementById("Meaning").style.maxWidth = TABLECOLUMN_MEANING_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Definition").style.maxWidth = TABLECOLUMN_DEFINITION_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Additional_Info").style.maxWidth = TABLECOLUMN_ADDITIONAL_INFO_WIDTHPERCENT * screenWidthDecimalMultiplier; 
	 document.getElementById("Date").style.maxWidth = TABLECOLUMN_DATE_WIDTHPERCENT * screenWidthDecimalMultiplier;
	 
	 /*
	 //The following section is causing an exception. 
	 
	 document.getElementById(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 document.getElementById(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 document.getElementById(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 document.getElementById(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER).style.width = tableColumn_txtUserInput_WidthPercent * screenWidthDecimalMultiplier; 
	 */
	
}
//FUNCTION TO DISPLAY THE WORDS INPUT BY USER MAGNIFIED BELOW
function displayLettersMagnified(inputTextBoxId)
{
	var textFieldContents = $(SYMBOL_HASH + inputTextBoxId).val()
	
	if($(CB_MAGNIFY_USER_INPUT_LETTERS_ID).is(":checked")) {
		
		var magnifiedLetters = "<label id=\"lbllettersTypedByUser\" >" + textFieldContents + "</label>";
		document.querySelector("#lettersTypedByUserMagnified").innerHTML = magnifiedLetters;
		document.querySelector("#divFloating").style.position = "relative";
	} else {
		clearMagnifiedWords();
	}
	
	if(textFieldContents.length === 0)
		clearMagnifiedWords();
}	

//FUNCTION CLEAR THE MAGNIFIED WORDS
function clearMagnifiedWords()
{
	document.querySelector("#divFloating").style.position = "absolute";
}

//FUNCTION TO SELECT ALL TEXTBOX CONTENTS 
function clearTextBoxContents(textBoxID)
{
	if (!textBoxID.startsWith("#")) {
		textBoxID = "#" + textBoxID;
	}

	if($(CB_SELECT_ALL_TEXT_BOX_LETTERS_ON_FOCUS_ID).is(":checked")) {
		
		//Adding # if the textbox ID passed does not have a # at its front
		if(textBoxID.charAt(0) !== SYMBOL_HASH)
			textBoxID = SYMBOL_HASH + textBoxID;
		
		
		document.querySelector(textBoxID).select();
	}
	document.querySelector(textBoxID).focus();
		
}


//FUNCION TO SEARCH THE USER INPUT WORD IN EXTERNAL SOURCES
function getWordDefinitionFromOtherSources (userInputWord)
{
	var greenFlagToSearchOtherLists = 1;
	
	if($(CB_SEARCH_ONLY_IF_WORDS_ARE_NOT_IN_OWN_LIST_ID).is(":checked")) {
		
		if (matchingWordsInOwnList > 0)
		{
			greenFlagToSearchOtherLists = 0;
		}
	}
	
	window.name = "vocabularyAppWebHomePage";
	
	if($(CB_SHOW_SEARCH_RESULTS_FROM_YOUTUBE_ID).is(":checked") && greenFlagToSearchOtherLists) {
		tabYoutube = window.open(URL_YOUTUBE + userInputWord, '_blank');
	}
	
	
	if($(CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_IMAGES_ID).is(":checked") && greenFlagToSearchOtherLists) {
		tabGoogleImages = window.open(URL_GOOGLE_IMAGES + userInputWord, '_blank');
	}
	
	if($(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_FOR_ETYMOLOGY_SECTION_ID).is(":checked") && greenFlagToSearchOtherLists) {
		tabMerriamWebsterDictionary2ForEymologySection = window.open(URL_MERRIAM_WEBSTER_DICTIONARY + userInputWord, '_blank');
	}
			
	if($(CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_SEARCH_ID).is(":checked") && greenFlagToSearchOtherLists) {
		tabGoogleSearch = window.open(URL_GOOGLE_SEARCH + userInputWord + " meaning", '_blank');
	}
	
	if($(CB_SHOW_SEARCH_RESULTS_FROM_OLAM_DICTIONARY_ID).is(":checked") && greenFlagToSearchOtherLists) {
		tabOlam = window.open(URL_OLAM_DICTIONARY + userInputWord, '_blank');
	}
	
	if($(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_THESAURUS_ID).is(":checked") && greenFlagToSearchOtherLists) {
		tabMerriamWebsterThesaurus = window.open(URL_MERRIAM_WEBSTER_THESAURUS + userInputWord, '_blank');
	}
	
	if($(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_ID).is(":checked") && greenFlagToSearchOtherLists) {
		tabMerriamWebsterDictionary = window.open(URL_MERRIAM_WEBSTER_DICTIONARY + userInputWord, '_blank');
	}	
	
	if($(CB_FOCUS_BACK_TO_VOCABULARY_APP_WEB_AFTER_SEARCHING_EXTERNAL_SOURCES_ID).is(":checked") && greenFlagToSearchOtherLists) {
			var vocabularyAppWebHomeTab = window.open('', 'vocabularyAppWebHomePage');
		vocabularyAppWebHomeTab.focus();
	}	

}	


//FUNCTION TO CLOSE THE ADDITIONAL TABS OPENED
function closeAdditionalSearchTabs()
{
	if(tabMerriamWebsterDictionary != null) { 	
		tabMerriamWebsterDictionary.close();	
	} 
	
	if(tabMerriamWebsterDictionary2ForEymologySection != null) { 	
		tabMerriamWebsterDictionary2ForEymologySection.close();	
	} 
	
		
	if( tabMerriamWebsterThesaurus != null) { 	
		tabMerriamWebsterThesaurus.close();	
	} 
	
	if( tabOlam != null) { 	
		tabOlam.close();	
	} 
	
	if( tabGoogleSearch != null) { 	
		tabGoogleSearch.close();	
	} 
	
	if( tabGoogleImages != null) { 	
		tabGoogleImages.close();
	} 
	
	if( tabYoutube != null) { 	
		tabYoutube.close();
	} 

}

//FUNCTION TO TOGGLE BETWEEN TOP AND CONFIGURATION SECTION OF PAGE
function goToTopOrConfigurationSection()
{
	if (variableForTogglingTopAndConfigurationSectionOfPage == 0) {
	document.getElementById(DIV_CONFIGURATION_SECTION).scrollIntoView();
	variableForTogglingTopAndConfigurationSectionOfPage = 1;
	}
	else {
	document.getElementById(DIV_USER_INPUT_SECTION).scrollIntoView();
	variableForTogglingTopAndConfigurationSectionOfPage = 0;
	}
		
}
//FUNCTION TO SELECT ALL EXTERNAL SEARCH CHECKBOXES
function selectAllExternalSearchOptions()
{
	if($(CB_SELECT_ALL_EXTERNAL_SEARCH_OPTIONS_ID).is(":checked"))
	{
		$(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_ID).prop("checked", true);
		$(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_FOR_ETYMOLOGY_SECTION_ID).prop("checked", true);
		$(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_THESAURUS_ID).prop("checked", true);
		$(CB_SHOW_SEARCH_RESULTS_FROM_OLAM_DICTIONARY_ID).prop("checked", true);
		$(CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_SEARCH_ID).prop("checked", true);
		$(CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_IMAGES_ID).prop("checked", true);
		$(CB_SHOW_SEARCH_RESULTS_FROM_YOUTUBE_ID).prop("checked", true);
		$(CB_SEARCH_ONLY_IF_WORDS_ARE_NOT_IN_OWN_LIST_ID).prop("checked", true);
		$(CB_FOCUS_BACK_TO_VOCABULARY_APP_WEB_AFTER_SEARCHING_EXTERNAL_SOURCES_ID).prop("checked", true);
	}
	else
	{
		$(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_ID).prop("checked", false);
		$(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_FOR_ETYMOLOGY_SECTION_ID).prop("checked", false);
		$(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_THESAURUS_ID).prop("checked", false);
		$(CB_SHOW_SEARCH_RESULTS_FROM_OLAM_DICTIONARY_ID).prop("checked", false);
		$(CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_SEARCH_ID).prop("checked", false);
		$(CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_IMAGES_ID).prop("checked", false);
		$(CB_SHOW_SEARCH_RESULTS_FROM_YOUTUBE_ID).prop("checked", false);
		$(CB_SEARCH_ONLY_IF_WORDS_ARE_NOT_IN_OWN_LIST_ID).prop("checked", false);
		$(CB_FOCUS_BACK_TO_VOCABULARY_APP_WEB_AFTER_SEARCHING_EXTERNAL_SOURCES_ID).prop("checked", false);
	}
	

}


//FUNCTION TO BLUR OUT OF TEXTBOXES WHEN A DIGIT KEY ABOVE ALPHABETS IS PRESSED
function blurOutOfAllTextBoxes()
{
	$(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER).blur();
	$(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER).blur();
	$(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER).blur();
	$(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER).blur();
	
}

function shortcutKeyPressedForClosingAdditionalTabs()
{
    var currentTimestamp = new Date().getTime();
    if(timeStampOfLastTimeCloseAllTabsKeyIsPressed>0)
    {
        var timeDifferenceInMilliSeconds = currentTimestamp - timeStampOfLastTimeCloseAllTabsKeyIsPressed;
        if(timeDifferenceInMilliSeconds <= (CONST_CLOSE_ALL_TABS_KEY_CONSECUTIVE_KEY_PRESS_INTERVAL_SECONDS * 1000))
        {
            closeAdditionalSearchTabs();
        }
    }
    timeStampOfLastTimeCloseAllTabsKeyIsPressed = currentTimestamp;
}
	
//FUNCTION TO BIND KEY PRESS TO EVENTS
function keyPressEvent(eventKeyCode)
{
		switch (eventKeyCode) {

		case 27:shortcutKeyPressedForClosingAdditionalTabs();
		        break;

		case 48:goToTopOrConfigurationSection();
				blurOutOfAllTextBoxes();		
				break;	
			
		case 49:toggleCheckBox(CB_SEARCH_ONLY_IF_WORDS_ARE_NOT_IN_OWN_LIST_ID);
				blurOutOfAllTextBoxes();		
				break;
				
		case 50:toggleCheckBox(CB_SELECT_ALL_EXTERNAL_SEARCH_OPTIONS_ID);
				selectAllExternalSearchOptions();
				blurOutOfAllTextBoxes();		
				break;
				
		case 51:toggleCheckBox(CB_MAGNIFY_USER_INPUT_LETTERS_ID);
				blurOutOfAllTextBoxes();		
				break;
				
		case 52:toggleCheckBox(CB_SELECT_ALL_TEXT_BOX_LETTERS_ON_FOCUS_ID);		
				blurOutOfAllTextBoxes();
				break;
				
		case 53:toggleCheckBox(CB_FOCUS_BACK_TO_VOCABULARY_APP_WEB_AFTER_SEARCHING_EXTERNAL_SOURCES_ID);		
				blurOutOfAllTextBoxes();	
				break;
								
		case 54:toggleCheckBox(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_ID);
				toggleCheckBox(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_DICTIONARY_FOR_ETYMOLOGY_SECTION_ID);
				blurOutOfAllTextBoxes();		
				break;
				

		case 55:toggleCheckBox(CB_SHOW_SEARCH_RESULTS_FROM_MERRIAM_WEBSTER_THESAURUS_ID);		
				blurOutOfAllTextBoxes();		
				break;
				
		case 56:toggleCheckBox(CB_SHOW_SEARCH_RESULTS_FROM_OLAM_DICTIONARY_ID);		
				blurOutOfAllTextBoxes();		
				break;
				
		case 57:toggleCheckBox(CB_SHOW_SEARCH_RESULTS_FROM_GOOGLE_SEARCH_ID);		
				blurOutOfAllTextBoxes();
				break;
				
		case 107:clearTextBoxContents(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITH_ENTER);		
				break;
				
		case 109:clearTextBoxContents(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITH_ENTER);		
				break;
				
		case 106:clearTextBoxContents(USER_INPUT_TYPE_WORD_WORD_ONLY_TEXTBOX_ID_WITHOUT_ENTER);		
				break;
				
		case 111:clearTextBoxContents(USER_INPUT_TYPE_ALL_TEXTBOX_ID_WITHOUT_ENTER);		
				break;
				
		}

}

//FUNCTION TO TOGGLE CHECKBOXS BETWEEN checked AND unchecked
function toggleCheckBox (checkBoxID)
{
	if($(checkBoxID).is(":checked"))
		$(checkBoxID).prop("checked", false);
	else 
		$(checkBoxID).prop("checked", true);

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

/**
 * Scroll and display the HTML element in the middle of the screen.
 * Show red border around the object.
 * @param elementId : ID of the HTML element to be rendered.
 */
function scrollToMiddle(elementId) {
	// Get the element by its ID
	var element = document.getElementById(elementId);
	if (element) {
		// Calculate the middle position of the element
		var position = element.offsetTop;
		var middle = position - window.innerHeight / 2;

		// Scroll to the middle of the element
		window.scrollTo(0, middle);

		// Add a red border to the element
		element.style.border = "2px solid red";

		// Add a click event listener to the document to remove the border
		document.addEventListener("click", function() {
			// Remove the red border
			element.style.border = "none";
		});
	}
}


function onClick(e) {
	e.preventDefault();
	grecaptcha.ready(function() {
		grecaptcha.execute('6LekFAwpAAAAALCkFj2KbJ64l2d2Uth42ti3weOq', {action: 'submit'}).then(function(token) {
			// Add your logic to submit to your backend server here.
			getToken(token);
		});
	});
}


function getToken(token) {
	console.info("token: "+token);
}

function getGoogleToken() {
	// Simulate a click event on an HTML element associated with onClick
	var dummyElement = document.createElement("div");
	dummyElement.onclick = onClick;
	dummyElement.click();
}