<?php

// CREATE CONNECION
$servername = "localhost";
$username = "adminJ";
$password = "adminJ";
$dbname = "vocabularyapp";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// FETCH DATA
$query = "SELECT * FROM allwords WHERE 1 LIMIT 100";
$sql = mysqli_query($conn, $query);

// STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>
