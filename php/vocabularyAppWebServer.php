<?php

//***************************** MySQL Code *****************************
//include 'vocabularyAppWebConstants.php';
//
//// CREATE CONNECION
//$servername = "localhost";
//$username = "adminJ";
//$password = "adminJ";
//$dbname = "vocabularyapp";
//$conn = mysqli_connect($servername, $username, $password, $dbname);
//
//if(isset($_GET[USER_INPUT_TYPE]) && (isset($_GET[USER_INPUT_VALUE]))) {
//    $userInputType = $_GET[USER_INPUT_TYPE];
//    $userInputValue = $_GET[USER_INPUT_VALUE];
//	$userInputType = mysqli_real_escape_string($conn, $userInputType);
//	$userInputValue = mysqli_real_escape_string($conn, $userInputValue);
//
//    if ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER){
//
//        $query = "SELECT * FROM allwords WHERE word LIKE '%" . $userInputValue . "%' ORDER BY Word ASC, Date DESC";
//        $sql = mysqli_query($conn, $query);
//    }
//    else if ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER){
//
//        $query = "SELECT * FROM allwords WHERE No LIKE '%" . $userInputValue . "%' OR Word LIKE '%" . $userInputValue . "%' OR Meaning LIKE '%" . $userInputValue . "%' OR Definition LIKE '%" . $userInputValue . "%' OR Additional_Info LIKE '%" . $userInputValue . "%' OR Relevant_Example LIKE '%" . $userInputValue . "%' OR Root_Index LIKE '%" . $userInputValue . "%' OR Root_Unit LIKE '%" . $userInputValue . "%' OR Date LIKE '% " . $userInputValue . "%' ORDER BY Word ASC, Date DESC";
//        $sql = mysqli_query($conn, $query);
//    }
//}
//else {
//    $query = "SELECT * FROM allwords WHERE 1 ORDER BY Word ASC, Date DESC";
//
//	//COMMENT FOLLOWING LINE AFTER TESTING
//	//$query = "SELECT * FROM allwords WHERE 1 LIMIT 100";
//
//
//    $sql = mysqli_query($conn, $query);
//}
//
//
//
//// // STORE DATA IN result VARIABLE
//$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
//
//exit(json_encode($result));


//***************************** MongoDB Code *****************************

    include 'vocabularyAppWebConstants.php';

    // Connect to the MongoDB server running on localhost
    $mongodb = new MongoDB\Driver\Manager("mongodb://host.docker.internal:27017");

    if (isset($_GET[USER_INPUT_TYPE]) && isset($_GET[USER_INPUT_VALUE])) {
        $userInputType = $_GET[USER_INPUT_TYPE];
        $userInputValue = $_GET[USER_INPUT_VALUE];
        $userInputType = filter_var($userInputType, FILTER_SANITIZE_STRING);
        $userInputValue = filter_var($userInputValue, FILTER_SANITIZE_STRING);

        if ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER) {
            // Define a filter based on your requirements
            $filter = ['Word' => new MongoDB\BSON\Regex($userInputValue, 'i')];
        } elseif ($userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER || $userInputType == TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER) {
            // Define a filter to search across various fields
            $filter = [
                '$or' => [
                    ['No' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                    ['Word' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                    ['Meaning' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                    ['Definition' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                    ['Additional_Info' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                    ['Root_Index' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                    ['Root_Unit' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                    ['Date' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                ]
            ];
        }

        // Define a query with the filter
//        $query = new MongoDB\Driver\Query($filter);
//        $query = new MongoDB\Driver\Query($filter).limit;
        $query = new MongoDB\Driver\Query($filter, ['limit' => 50]);

    } else {
        // If no specific filter is provided, get all records
        $query = new MongoDB\Driver\Query([], ['limit' => 10]);
    }

    // Execute the query against the MongoDB database
    $cursor = $mongodb->executeQuery('VocabularyBuilder.all_words', $query);

    // Convert the MongoDB cursor to an array
    $result = iterator_to_array($cursor);

    // Encode the results as JSON
    $jsonResult = json_encode($result);

    // Send the JSON response to the client
    echo $jsonResult;
?>
