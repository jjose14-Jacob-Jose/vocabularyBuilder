<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>Comment Loader</title>
<?php
    
?>
<script src="scripts/jquery-3.4.1.js"></script>
		<script> 
			//jQuery code here!
			
			$(document).ready(function () {
				var commentCount = 2;
				$("button").click(function () {
					commentCount = commentCount + 2;
					$("#comments").load("load-comments.php", {
						commentNewCount : commentCount
					});
				});
			});
		</script>
</head>
<body>
		<div id="comments" > 
			<?php
			 include 'backend.php';
				#var commentCounts = $GLOBALS['commentCount'];
				$sql = "SELECT * FROM comments LIMIT 2";
				$result = mysqli_query($conn, $sql);
				if (mysqli_num_rows ($result) > 0) {
					while ($row = mysqli_fetch_assoc ($result)) {
						echo "<p>";
						echo $row['author'];
						echo "<br>";
						echo $row['message'];
						echo "</p>";
					}
				}
				else {
					echo "There are no comments!";
				}
			?>
		</div>
		<button id="button"> Show more comments </button>
</body>
</html>