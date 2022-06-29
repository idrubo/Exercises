<!DOCTYPE html>

<html>

	<head>
		<title>Exercise 1 Level-2 Topic-3</title>
		<meta charset="UTF-8">
	</head>

<?php

function switchChars ($str)
{
	$strArr = str_split ($str, 1);

	$first = $strArr [0];
	$iLast = strlen ($str) - 1;

	$strArr [0] = $strArr [$iLast];
	$strArr [$iLast] = $first;

	return implode ("", $strArr);
}

$str1 = "xyz";
echo "Initial string: ";
echo $str1 . "<br>"; 

echo "Result string: ";
echo switchChars ($str1); echo "<br><br>";

$str1 = "a";
echo "Initial string: ";
echo $str1 . "<br>"; 

echo "Result string: ";
echo switchChars ($str1); echo "<br><br>";

$str1 = "ab";
echo "Initial string: ";
echo $str1 . "<br>"; 

echo "Result string: ";
echo switchChars ($str1); echo "<br><br>";

$str1 = "xyzt";
echo "Initial string: ";
echo $str1 . "<br>"; 

echo "Result string: ";
echo switchChars ($str1); echo "<br><br>";

?>

	<body>

	</body>

</html>

