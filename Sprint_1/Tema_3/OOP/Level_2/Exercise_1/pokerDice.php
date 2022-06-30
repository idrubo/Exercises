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
	private $diceFaces = array ("As", "K", "Q", "J", 8, 7);
	private $result;

	public function throwDice ()
	{
		$this->result = rand (0, 5);
		echo "We get: $this->result <br><br>";
	}
}

$dice = new pokerDice ();

$dice->throwDice ();

?>

	</body>

</html>

