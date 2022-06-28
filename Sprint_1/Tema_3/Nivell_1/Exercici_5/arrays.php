<!DOCTYPE html>

<html>

	<head>
		<title>Tema m Exercici n</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

$arrA = array (11 , 12 , 13 , 14 ,15);
$arrB = array (21 , 22 , 23);

array_push ($arrB, 24);

$arrM = array_merge ($arrA, $arrB);

echo "Longitut de l'array combinat: ";
echo count ($arrM); echo "<br><br>";

echo "Amb  var_dump ():"; echo "<br>";
var_dump ($arrM); echo "<br><br>";

echo "Amb  print_r ():"; echo "<br>";
print_r ($arrM); echo "<br>";

?>

	</body>

</html>

