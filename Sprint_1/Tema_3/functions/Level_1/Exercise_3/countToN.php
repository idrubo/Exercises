<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (function) Level 1 Exercise 3</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 
function countToN ($n)
{

	for ($i = 2; $i <= $n; $i += 2)
	{
		echo "Count is: " . $i; echo "<br>";
	}

}

countToN (25);

?>

	</body>

</html>

