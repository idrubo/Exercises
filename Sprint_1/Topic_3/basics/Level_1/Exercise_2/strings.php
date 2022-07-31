<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Exercise 2</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

$strVar  = "Hello, World!";
$strCurs = "Aquest és el curs de PHP";

echo "To uppercase: "; echo "<br>";
echo strtoupper($strVar); echo "<br><br>";

echo "The length: "; echo "<br>";
echo strlen($strVar); echo "<br><br>";

echo "Reversed: "; echo "<br>";
echo strrev($strVar); echo "<br><br>";

echo "Concatenated: "; echo "<br>";
echo $strVar . " " . $strCurs; echo "<br>";

?>
	</body>

</html>

