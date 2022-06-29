<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Exercise 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 
$intVar  = 10;
$dblVar  = 1.1;
$strVar  = "Something.";
$boolVar = true;

echo "With var_dump:"; echo "<br>";
var_dump ($intVar, $dblVar, $strVar, $boolVar);
?>

<br> <br>

<?php 
echo "With echoes:"; echo "<br>";
echo "intVar  = " . $intVar; echo "<br>";
echo "dblVar  = " . $dblVar; echo "<br>";
echo "strVar  = " . $strVar; echo "<br>";
echo "boolVar = " . $boolVar; echo "<br>";
?>

	</body>

</html>

