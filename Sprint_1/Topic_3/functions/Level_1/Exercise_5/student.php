<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Level 1 Exercise 5</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

function degree ($q)
{

	if ($q >= 60) { $d = 1; }
	elseif (($q >= 45) && ($q <= 59)) { $d = 2; }
	elseif (($q >= 33) && ($q <= 44)) { $d = 3; }
	else { $d = -1; }

	switch ($d)
	{
	case 1:
		echo "The student is first degree.<br>";
		break;
	case 2:
		echo "The student is second degree.<br>";
		break;
	case 3:
		echo "The student is third degree.<br>";
		break;
	case -1:
		echo "The student should get more learning.<br>";
	}

}

$s = 60;

echo "Student qualification is: " . $s; echo "<br><br>";
degree ($s);

?>

	</body>

</html>

