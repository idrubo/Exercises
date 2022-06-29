<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (function) Level 1 Exercise 4</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 
function countToN ($n = 10)
{

	for ($i = 2; $i <= $n; $i += 2)
	{
		echo "Count is: " . $i; echo "<br>";
	}

}

echo "Counting to the default value:"; echo "<br>";
countToN ();
echo "<br>";

echo "Counting to other value:"; echo "<br>";
countToN (14);

?>

	</body>

</html>

