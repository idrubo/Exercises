<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (functions) Level 2 Exercise 3</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

function chocolate ($x)
{
	return $x * 1.0;
}

function bubbleGum ($b)
{
	return $b * 0.5;
}

function sweet ($s)
{
	return $s * 1.5;
}

$buy = array ("chc" => 2, "bg" => 1, "swt" => 1);

echo "I bougth "
 	. $buy ["chc"] . " chocolates, "
	. $buy ["bg"] . " bubble gum and "
 	. $buy ["swt"] . " sweet<br><br>";

$pay = chocolate ($buy ["chc"]) + bubbleGum ($buy ["bg"]) + sweet ($buy ["swt"]);

echo "Total: " . $pay;

?>

	</body>

</html>

