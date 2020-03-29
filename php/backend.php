<?php

$servername = "localhost";
$username = "adminJ";
$password = "adminJ";
$dbname = "vocabularyapp";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$query = "SELECT * FROM allwords WHERE 1";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows ($result) > 0) {
    while ($row = mysqli_fetch_assoc ($result)) {
        $wordsFromDB = $row['Word'];
        
//         echo "<p>";
//         echo $row['Word'];
//         echo "<br>";
//         echo $row['message'];
//         echo "</p>";
    }
}
else {
    echo "There are no comments!";
}


?>
