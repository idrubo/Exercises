<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (OOP) Level 2 Exercise 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

class pokerDice
{
	private $diceFaces = array ("As", "K", "Q", "J", "8", "7");
	private $result;

	public function throwDice ()
	{
		$this->result = rand (0, 5);
	}

	public function shapeName ()
	{
		echo "<b>-" . $this->diceFaces [$this->result] . "-</b>";
	}
}

class fiveDices
{
	private $fDices = array ();
	private $totalThrows;

	public function __construct ()
	{
		for ($i = 0; $i < 5; $i++) array_push ($this->fDices, new pokerDice ());
	}

	public function throwFive ()
	{
		foreach ($this->fDices as $dice)
		{
			$dice->throwDice ();
			$dice->shapeName ();
		}
		$this->totalThrows += 5;
	}

	public function getTotalThrows ()
	{
		return $this->totalThrows;
	}
}

echo "For a single dice, ";
$dice = new pokerDice ();

$dice->throwDice ();

echo "we get a(n)  ";
$dice->shapeNAme ();
echo "<br>";

echo "<br>For a set of 5 dices, ";

echo "we get: ";
$fiveThrows = new fiveDices ();
$fiveThrows->throwFive ();
echo "<br>Total throws: " . $fiveThrows->getTotalThrows ();

echo "<br><br>For five more throws: ";
$fiveThrows->throwFive ();
echo "<br>Total throws: " . $fiveThrows->getTotalThrows ();

?>

	</body>

</html>

