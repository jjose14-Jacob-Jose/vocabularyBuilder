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

    if ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER){
        
        $query = "SELECT * FROM allwords WHERE word LIKE '%" . $userInputValue . "%'";
        $sql = mysqli_query($conn, $query);
    }
    else if ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER){
        
        $query = "SELECT * FROM allwords WHERE No LIKE '%" . $userInputValue . "%' OR Word LIKE '%" . $userInputValue . "%' OR Meaning LIKE '%" . $userInputValue . "%' OR Definition LIKE '%" . $userInputValue . "%' OR Additional_Info LIKE '%" . $userInputValue . "%' OR Relevant_Example LIKE '%" . $userInputValue . "%' OR Root_Index LIKE '%" . $userInputValue . "%' OR Root_Unit LIKE '%" . $userInputValue . "%' OR Date LIKE '%" . $userInputValue . "%'";
        $sql = mysqli_query($conn, $query);
    }
}
else {
    $query = "SELECT * FROM allwords WHERE 1";
    $sql = mysqli_query($conn, $query);
}



// // STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>
