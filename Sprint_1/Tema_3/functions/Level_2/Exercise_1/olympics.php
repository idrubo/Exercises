<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (functions) Level 2 Exercise 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

function olympics ()
{
	for ($i = 1960; $i <= 2016; $i += 4)
	{
		if ($i != 2016) echo $i . ", ";
		else echo $i . ".<br>";
	}
}

echo "Olympic years: ";
olympics ();

?>

	</body>

</html>

