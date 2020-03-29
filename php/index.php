<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>Vocabulary Builder Web App</title>
<script type="text/javascript" src="../scripts/jquery-3.4.1.js"></script>
<script type="text/javascript" src="../scripts/vocabularyAppWebScripts.js"></script>
<?php include 'vocabularyAppWebConstants.php'?>

</head>
<body>
	<div id="userInput">
		<label> Meaning : </label> <input type="text" id="<?php echo (USER_INPUT_TYPE_WORD); ?>">

		<label> All : </label> <input type="text" id="<?php echo (USER_INPUT_TYPE_ALL); ?>">
	</div>
	
	<div id="divWordsFromDB">
		<table id="tableWordsFromDB">
			<thead id="theadTableWordsFromDB">
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

	</div>

</body>
</html>