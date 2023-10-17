<?php

//    ******************************** MYSQL CODE *************************
//    $servername = "localhost";
//    $username = "adminJ";
//    $password = "adminJ";
//    $dbname = "vocabularyapp";
//
//    $conn = mysqli_connect($servername, $username, $password, $dbname);
//
//    $query = "SELECT * FROM allwords WHERE 1";
//    $result = mysqli_query($conn, $query);
//    if (mysqli_num_rows ($result) > 0) {
//        while ($row = mysqli_fetch_assoc ($result)) {
//            $wordsFromDB = $row['Word'];
//        }
//    }
//    else {
//        echo "There are no comments!";
//    }

//    ********************************* MONGODB CODE ****************************
    try {
        $manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

        $query = new MongoDB\Driver\Query([]);

        $cursor = $manager->executeQuery("VocabularyBuilder.all_words", $query);

        foreach ($cursor as $document) {
            $word = $document->Word;
            echo "Word: $word<br>";
        }
    } catch (MongoDB\Driver\Exception\Exception $e) {
        echo "An error occurred: " . $e->getMessage();
    }


?>
