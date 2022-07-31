<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Level 3 Exercise 2</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

$cVal = "dog";
$arr = array ("a" => "dog", "b" => "cat", "c" => "dog", "d" => "fox");

echo "Value to find: " . $cVal; echo "<br>";
echo "Array to be searched: ";
var_dump ($arr); echo "<br><br>";

$result = array_count_values ($arr);

echo "Value \"" . $cVal . "\" is found " . $result [$cVal] . " times.";

?>

	</body>

</html>

