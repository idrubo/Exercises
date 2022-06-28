<!DOCTYPE html>

<html>

	<head>
		<title>Tema 3 Exercici 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 
$intVar  = 10;
$dblVar  = 1.1;
$strVar  = "String var.";
$boolVar = true;

echo "With var_dump:"; echo "<br>";
var_dump ($intVar, $dblVar, $strVar, $boolVar);
?>

<br> <br>

<?php 
echo "With echoes:"; echo "<br>";
echo "intVar  = " . $intVar; echo "<br>";
echo "dblVar  = " . $dblVar; echo "<br>";
echo "strVar  = " . $dblVar; echo "<br>";
echo "boolVar = " . $boolVar; echo "<br>";
?>

	</body>

</html>

