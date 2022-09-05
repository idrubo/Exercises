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

function showBite ($b)
{
	if ($b) echo "Has been bitten <br>";
	else echo "Has NOT been bitten.<br>";
}

for ($i = 0; $i < 4; $i++) showBite (isBitten ());

?>

	</body>

</html>

