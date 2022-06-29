<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Level 3 Exercise 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php
function flash ($str)
{
	return str_split (preg_replace ("/\s+/", "", $str), 1);
}

$str = "Hello world";

echo "String to trim and convert: ";
echo $str; echo "<br><br>";

$arr = flash ($str);

echo "Trimmed array: "; echo "<br>";
var_dump ($arr);

?>

	</body>

</html>

