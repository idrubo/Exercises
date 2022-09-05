<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (functions) Level 3 Exercise 1</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="eSieve.css">
	</head>

	<body>

  	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
	  	N: <input type="number" name="n"><br><br>
		  <input type="submit" name="Compute" value="Compute"><br><br>
	  </form>

<?php

function prnError ()
{
	echo "<h3>n must be a positive integer greater than 1 !!!</h3><br>";
}

function checkInput ($nbr) { return (((int)$nbr) > 1); }

function isPOST () { return	($_SERVER["REQUEST_METHOD"] == "POST"); }

function getRequest ()
{
	if (checkInput($_POST["n"]))
		return $n = (int)$_POST["n"];

	return 0;
}

function fillArr (&$prime, $n)
{
	for ($i = 0; $i <= $n; $i++) array_push ($prime, 1);
	return $prime;
}

function eSieve ($n)
{
	$prime = array ();
	$prime = fillArr ($prime, $n);

	for ($p = 2; $p * $p <= $n; $p++)
		if ($prime [$p])
			for ($q = $p * $p; $q <= $n; $q += $p)
				$prime [$q] = 0;

	return $prime;
}

function prnSieve (&$prime, $n)
{
	$j = 0;

	echo "<h4>Eratostenes sieve for n = $n</h4>";

	echo "<table><tr>";
	for ($i = 2; $i <= $n; $i++)
	{
		if ($prime [$i])
		{
			echo "<td>" . " $i " . "</td>";
			$j++;
		}

		if ((($j % 10) == 0) && ($j != 0)) { echo "</tr><tr>"; $j = 0; }
	}
	echo "</tr></table>";
}

if (isPOST ())
{
	$n = getRequest ();

	if ($n) { $prime = eSieve ($n); prnSieve ($prime, $n); }
	else { prnError (); }
}

?>

	</body>

</html>

