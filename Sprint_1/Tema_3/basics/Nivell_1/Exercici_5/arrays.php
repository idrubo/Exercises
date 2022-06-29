<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Exercise 5</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

$arrA = array (11 , 12 , 13 , 14 ,15);
$arrB = array (21 , 22 , 23);

array_push ($arrB, 24);

$arrM = array_merge ($arrA, $arrB);

echo "Merged array length: ";
echo count ($arrM); echo "<br><br>";

echo "With var_dump ():"; echo "<br>";
var_dump ($arrM); echo "<br><br>";

echo "With print_r ():"; echo "<br>";
print_r ($arrM); echo "<br>";

?>

	</body>

</html>

