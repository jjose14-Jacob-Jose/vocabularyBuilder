<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>Vocabulary Builder Web App</title>
<script type="text/javascript" src="../scripts/jquery-3.4.1.js"></script>
<script type="text/javascript" src="../scripts/vocabularyAppWebScripts.js"></script>
<link rel = "stylesheet"    type = "text/css"    href = "../css/vocabularyAppWebStyle.css" />
<?php include 'vocabularyAppWebConstants.php'?>

</head>
<body>
	<div id="userInput">
		<label> Meaning : </label>
		<input type="text" id="<?php echo (TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER); ?>" autofocus placeHolder="<?php echo (MSG_PLACEHOLDER_WORD_WITH_ENTER); ?>" class="txtUserInput">
		<label> All : </label> 
		<input type="text" id="<?php echo (TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER); ?>" placeHolder="<?php echo (MSG_PLACEHOLDER_WORD_WITH_ENTER); ?>" class="txtUserInput">
		
		<label> Meaning (without Enter): </label>
		<input type="text" id="<?php echo (TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER); ?>" onKeyUp="searchOnlyWordColumnWithoutEnter()" placeHolder="<?php echo (MSG_PLACEHOLDER_WORD_WITHOUT_ENTER); ?>" class="txtUserInput">
		<label> All (without Enter): </label> 
		<input type="text" id="<?php echo (TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER); ?>" onKeyUp="searchAllColumnsWithoutEnter()" placeHolder="<?php echo (MSG_PLACEHOLDER_WORD_WITHOUT_ENTER); ?>" class="txtUserInput">
		
		
		<label class="numberOfWords"></label> 
		
	</div>
	<hr>
	<div id="divWordsFromDB">
		<table id="tableWordsFromDB">
			<thead id="theadTableWordsFromDB" class="theadTableWordsFromDB">
				<th id="No">No</th>
				<th id="Word">Word</th>
				<th id="Meaning">Meaning</th>
				<th id="Definition">Definition</th>
				<th id="Additional_Info">Additional Information</th>
				<th id="Relevant_Example">Relevant Example</th>
				<th id="Root_Index">Root Index</th>
				<th id="Root_Unit">Root Unit</th>
				<th id="Date">Date</th>
			</thead>
			
			<tbody id="tbodyTableWordsFromDB" class="tbodyTableWordsFromDB">
			</tbody>
			
		</table>
		<img  id="imgWaitScreen" src="../images/loading-gif-1.gif" alt="Please wait" height="50%"/>

	</div>
	
	
	
<!-- 	DISCLAIMER INFORMATION -->
	<div>
      <ul style="list-style-type:disc;">
      <li><h3>Help</h3></li>
      <li>Enter word or characters in the 1st and 2nd TextBoxes and press 'Enter' key to search and display the words.</li>
      <li>Enter word or characters in the 3rd and 4th TextBoxes to search and display the words while you type.</li>
      <li>Simply press 'Enter' on 1st and 2nd TextBoxes WITHOUT any content to list all words.</li>
      <li>Delete ALL contents from 3rd and 4th TextBoxes to list all words.</li>
          
	</ul> 
	</div>
	
	
	<div>
      <ul style="list-style-type:disc;">
      <li><h3>Vocabulary App Web</h3></li>
      <li>Development started on 22-March-2020.</li>
      <li>Development completed on at 23:23 on 29-March-2020.</li>
      <li>Property of 'jacobjose123&trade;' -- All Rights Reserved.&reg;</li>

	</ul> 
	</div>
	

</body>
</html>