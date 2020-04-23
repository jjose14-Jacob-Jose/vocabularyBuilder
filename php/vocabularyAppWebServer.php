<?php

include 'vocabularyAppWebConstants.php';

// CREATE CONNECION
$servername = "localhost";
$username = "adminJ";
$password = "adminJ";
$dbname = "vocabularyapp";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if(isset($_GET[USER_INPUT_TYPE]) && (isset($_GET[USER_INPUT_VALUE]))) {
    $userInputType = $_GET[USER_INPUT_TYPE];
    $userInputValue = $_GET[USER_INPUT_VALUE];
	$userInputType = mysqli_real_escape_string($conn, $userInputType);
	$userInputValue = mysqli_real_escape_string($conn, $userInputValue);

    if ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER){
        
        $query = "SELECT * FROM allwords WHERE word LIKE '%" . $userInputValue . "%' ORDER BY Word ASC, Date DESC";
        $sql = mysqli_query($conn, $query);
    }
    else if ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER){
        
        $query = "SELECT * FROM allwords WHERE No LIKE '%" . $userInputValue . "%' OR Word LIKE '%" . $userInputValue . "%' OR Meaning LIKE '%" . $userInputValue . "%' OR Definition LIKE '%" . $userInputValue . "%' OR Additional_Info LIKE '%" . $userInputValue . "%' OR Relevant_Example LIKE '%" . $userInputValue . "%' OR Root_Index LIKE '%" . $userInputValue . "%' OR Root_Unit LIKE '%" . $userInputValue . "%' OR Date LIKE '% " . $userInputValue . "%' ORDER BY Word ASC, Date DESC";
        $sql = mysqli_query($conn, $query);
    }
}
else {
    $query = "SELECT * FROM allwords WHERE 1 ORDER BY Word ASC, Date DESC";
    
	//COMMENT FOLLOWING LINE AFTER TESTING
	//$query = "SELECT * FROM allwords WHERE 1 LIMIT 100";
	
	
    $sql = mysqli_query($conn, $query);
}



// // STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>
