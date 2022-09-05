<!DOCTYPE html>

<html>

	<head>
		<title>Topic 4 (OOP) Level 1 Exercise 2</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php

require 'Shape.php';
require 'Triangle.php';
require 'Rectangle.php';

$tr = new Triangle  (3, 2);
$sq = new Rectangle (3, 2);

$tr->area ();
$sq->area ();

$tr->prnSurface ();
$sq->prnSurface ();

?>

	</body>

</html>

