<?php

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
                    ['Date' => new MongoDB\BSON\Regex($userInputValue, 'i')],
                ]
            ];
        }

        // Define a query with the filter
//        Database query with no limit.
//        $query = new MongoDB\Driver\Query($filter);

//        Only 50 records are pulled.
        $query = new MongoDB\Driver\Query($filter, ['limit' => 50]);

    } else {
//        10 records are pulled. This is similar to "SELECT * FROM"
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
