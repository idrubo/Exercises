<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (functions) Level 2 Exercise 2</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

function bill ($mins)
{
	if ($mins < 3) return 10;

	$mins -= 3;
	$steps = 1 + $mins;


	return 10 + $steps * 5;
}

$m = 1;
echo "With a " . $m . " min. call I pay " . bill ($m) . "<br><br>";

$m = 3;
echo "With a " . $m . " min. call I pay " . bill ($m) . "<br><br>";

$m = 4;
echo "With a " . $m . " min. call I pay " . bill ($m) . "<br><br>";

$m = 5;
echo "With a " . $m . " min. call I pay " . bill ($m) . "<br><br>";

?>

	</body>

</html>

