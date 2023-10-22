<?php 
    define("TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITH_ENTER", "userInputTypeIsWordWithEnter_searchWordColumnOnly");
    define("TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITH_ENTER", "userInputTypeIsAllWithEnter_searchAllColumnsForWords");
    define("TEXTBOX_ID_USER_INPUT_TYPE_WORD_WITHOUT_ENTER", "userInputTypeIsWordWithoutEnter_searchWordColumnOnly");
    define("TEXTBOX_ID_USER_INPUT_TYPE_ALL_WITHOUT_ENTER", "userInputTypeIsAllWithoutEnter_searchAllColumnsForWords");
    
    define("USER_INPUT_TYPE", "userInputType");
    define("USER_INPUT_VALUE", "valueInputByUser");
    
    
    define("MSG_PLEASE_WAIT", "Searching for the word, please wait.");
    define("MSG_PLACEHOLDER_WORD_WITH_ENTER", "Enter word and press Enter");
    define("MSG_PLACEHOLDER_WORD_WITHOUT_ENTER", "Enter word to list while typing");

    define("COUNT_MAXIMUM_QUERY_ROWS_WHEN_NO_CONDITION", 15);
    define("COUNT_MAXIMUM_QUERY_ROWS_WITH_CONDITION", 50);

    $username = 'azUsrypVYkFA9VbHJ8Rtt';
    $password = 'zKJmey4D5Rh5CTvB323423';
    $clusterUrl = 'portfoliocluster.dfelmtz.mongodb.net/';

    $database = 'PortfolioDatabase';
    $collectionName = 'all_words';

    $connectionStringForLocal = 'mongodb://host.docker.internal:27017';
    $connectionForMongoDBAtlas = "mongodb+srv://$username:$password@$clusterUrl";

//    Specify value for CONNECTION_STRING_FOR_MONGO_DB as any of the following:
//- $connectionStringForLocal
//- $connectionForMongoDBAtlas
    define("MONGODB_CONNECTION_STRING", $connectionStringForLocal);
    define("MONGODB_COLLECTION_NAME", $database . "." . $collectionName);
?>