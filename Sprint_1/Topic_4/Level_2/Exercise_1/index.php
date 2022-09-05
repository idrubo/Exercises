<!DOCTYPE html>

<html>

	<head>
		<title>Topic 4 (OOP) Level 2 Exercise 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

require 'PokerDice.php';
require 'FiveDices.php';

PokerDice::$totalThrows = 0;

echo "For a single dice, ";
$dice = new PokerDice ();

$dice->throwDice ();

echo "we get a(n)  ";
$dice->shapeNAme ();
echo "<br>Total throws: " . $dice->getTotalThrows ();

echo "<br><br>For a set of 5 dices, ";

echo "we get: ";
$fiveThrows = new FiveDices ();
$fiveThrows->throwFive ();
echo "<br>Total throws: " . $fiveThrows->getTotalThrows ();

echo "<br><br>For five more throws: ";
$fiveThrows->throwFive ();
echo "<br>Total throws: " . $fiveThrows->getTotalThrows ();

?>

	</body>

</html>

