<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (functions) Level 1 Exercise 6</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

function isBitten ()
{
	if (rand (0, 1)) return true;

	return false;
}

$b = isBitten ();
if ($b == true) echo "Has been bitten <br>";
else echo "Has NOT been bitten.<br>";

$b = isBitten ();
if ($b == true) echo "Has been bitten <br>";
else echo "Has NOT been bitten.<br>";

$b = isBitten ();
if ($b == true) echo "Has been bitten <br>";
else echo "Has NOT been bitten.<br>";

$b = isBitten ();
if ($b == true) echo "Has been bitten <br>";
else echo "Has NOT been bitten.<br>";

?>

	</body>

</html>

