<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (functions) Level 1 Exercise 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

function isEven ($a)
{
	if ($a % 2)
		echo "Your age is an <b>odd</b> number.";
	else
		echo "Your age is an <b>even</b> number.";
}

$age = 34;

echo "Your age is " . $age; echo "<br><br>";

isEven ($age);

?>

	</body>

</html>

