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

	for ($i = 0; $i <= $n; $i += 2)
	{
		echo "Count is: " . $i; echo "<br>";
	}

}

$n = 25;
countToN ($n);

?>

	</body>

</html>

