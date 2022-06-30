<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (OOP) Level 1 Exercise 1</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php 

class employee
{
	private $name;
	private $salary;

	public function initialize ($nm, $slr)
	{
		$this->name  = $nm;
		$this->salary = $slr;
	}

	public function printTax ()
	{
		if ($this->salary > 6000)
			echo "$this->name MUST pay taxes<br>";
		else
			echo "$this->name must NOT pay taxes.<br>";
	}
}

$empA = new employee ();
$empB = new employee ();

$empA->initialize ("Mike", 10000);
$empB->initialize ("John", 5000);

$empA->printTax ();
$empB->printTax ();

?>

	</body>

</html>

