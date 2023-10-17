<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
    <title>Word Lister</title>
    <script type="text/javascript" src="scripts/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="scripts/wordListerScript.js"></script>
     <link rel = "stylesheet"    type = "text/css"    href = "css/wordlist.css" />
</head>
<body>

	<label> Meaning : </label>
	<input type="text" id="txtUserInputMeaning">
	
	<label> All : </label>
	<input type="text" id="txtUserInputAll">
	
	<label> Meaning NEW : </label>
	<input type="text" id="txtUserInputMeaningNew">
	
		<label> All NEW : </label>
	<input type="text" id="txtUserInputAllNew">
	
	
	
	<div class="container">
		<div class="row">
			<table class="table" id="tableWords">
				<thead>
					<th id="No" class="tableRow" >No</th>
					<th id="Word" class="tableRow">Word</th>
					<th id="Meaning" class="tableRow">Meaning</th>
					<th id="Definition" class="tableRow">Definition</th>
					<th id="Additional_Info" class="tableRow">Additional Information</th>
					<th id="Relevant_Example" class="tableRow">Relevant Example</th>
					<th id="Root_Index" class="tableRow">Root Index</th>
					<th id="Root_Unit" class="tableRow">Root Unit</th>
					<th id="Date" class="tableRow">Date</th>					
				</thead>
			<tbody class="tbody" id="wordListTableBody">
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>