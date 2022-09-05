<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Level 3 Exercise 3</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

$X = array (10, 20, 30, 40, 50);

echo "Original array: ";
var_dump ($X); echo "<br><br>";

array_splice($X, 2, 1);

echo "After eliminating an element: ";
var_dump ($X);


?>

	</body>

</html>

