<?php

include 'vocabularyAppWebConstants.php';

// CREATE CONNECION
$servername = "localhost";
$username = "adminJ";
$password = "adminJ";
$dbname = "vocabularyapp";
$conn = mysqli_connect($servername, $username, $password, $dbname);


$userInputType = $_GET[USER_INPUT_TYPE];
$userInputValue = $_GET[USER_INPUT_VALUE];

if ($userInputType == USER_INPUT_TYPE_WORD) {
    
    $query = "SELECT * FROM allwords WHERE word LIKE '%" . $userInputValue . "%'";
}
if ($userInputType == USER_INPUT_TYPE_ALL) {
    
    $query = "SELECT * FROM allwords WHERE No LIKE '%" . $userInputValue . "%' OR Word LIKE '%" . $userInputValue . "%' OR Meaning LIKE '%" . $userInputValue . "%' OR Definition LIKE '%" . $userInputValue . "%' OR Additional_Info LIKE '%" . $userInputValue . "%' OR Relevant_Example LIKE '%" . $userInputValue . "%' OR Root_Index LIKE '%" . $userInputValue . "%' OR Root_Unit LIKE '%" . $userInputValue . "%' OR Date LIKE '%" . $userInputValue . "%'";
}


// FETCH DATA

$sql = mysqli_query($conn, $query);


// // STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>
