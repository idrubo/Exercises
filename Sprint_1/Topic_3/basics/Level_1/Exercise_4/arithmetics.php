<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Exercise 4</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 
$intX = 3;
$intY = 2;

$dblN = 2.8;
$dblM = 1.5;

$dblN = 8.1;
$dblM = 3.2;

echo "X, Y: "; echo $intX . ", " . $intY; echo "<br>";
echo "Suma:     "; echo $intX + $intY; echo "<br>";
echo "Resta:    "; echo $intX - $intY; echo "<br>";
echo "Producte: "; echo $intX * $intY; echo "<br>";
echo "Mòdul:    "; echo $intX % $intY; echo "<br><br>";

echo "N, M: "; echo $dblN . ", " . $dblM; echo "<br>";
echo "Suma:     "; echo $dblN + $dblM; echo "<br>";
echo "Resta:    "; echo $dblN - $dblM; echo "<br>";
echo "Producte: "; echo $dblN * $dblM; echo "<br>";
echo "Mòdul:    "; echo $dblN % $dblM; echo "<br><br>";

echo "Per totes: "; echo "<br>";
echo "2 * X =   "; echo 2 * $intX; echo "<br>";
echo "2 * Y =   "; echo 2 * $intY; echo "<br>";
echo "2 * N =   "; echo 2 * $dblN; echo "<br>";
echo "2 * M =   "; echo 2 * $dblM; echo "<br>";
echo "X + Y + N + M = "; echo $intX + $intY + $dblN + $dblM; echo "<br>";
echo "X * Y * N * M = "; echo $intX * $intY * $dblN * $dblM; echo "<br>";
?>

	</body>

</html>

