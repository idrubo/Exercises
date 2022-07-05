<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Level 3 Exercise 1</title>
		<meta charset="UTF-8">

<style>

#newAcc
{
visibility: hidden;
}

#accDeposit
{
visibility: hidden;
}

#accWithdraw
{
visibility: hidden;
}

</style>

	</head>

	<body>

<?php

class account
{
	private $acctNumber;
	private $Name;
	private $balance;

	public function __construct ($aN, $Nm, $bal = 0)
	{
		$this->acctNumber = $aN;
		$this->Name = $Nm;
		$this->balance= $bal;

		echo "A new account is set with: <br><br>";
		echo "Account number: " . $this->acctNumber . "<br>";
		echo "name: "           . $this->Name       . "<br>";
		echo "balance: "        . $this->balance    . "<br>";
	}

	function deposit ($amount)
	{
		$this->balance += $amount;
		echo "<h4>Deposit completed. ";
		echo "Your balance is now " . $this->balance. ".</h4>";
	}

	function withdraw ($amount)
	{
		if ($amount > $this->balance)
		{
			echo "<h4 style=\"color:red;\">Your balance (" . $this->balance . ") is too low for this operation.</h4>";
			return;
		}
		$this->balance -= $amount;
		echo "<h4>Withdraw completed. ";
		echo "Your balance is now " . $this->balance. ".</h4>";
	}

	public function setName ($Nm)
	{
		$this->Name = $Nm;
	}

	public function setAcctNumber ($aN)
	{
		$this->acctNumber = $aN;
	}

	public function getName ()
	{
		return $this->Name;
	}

	public function getAcctNumber ()
	{
		return $this->acctNumber;
	}

	public function getBalance ()
	{
		return $this->balance;
	}

}

$name = $acctN = $qtty = "";


if ($_SERVER["REQUEST_METHOD"] == "POST")
{
	switch ($_POST["op"])
	{
	case "new":
		echo "New Account<br>";
		echo "<style>#newAcc{visibility:visible;}</style>";

		//		$acctN = testAcctN  ($_POST["acctN"]);
		//		$name  = testName   ($_POST["name"]);
		//		$qtty  = testAmount ($_POST["amount"]);

		//		$ac = new account ($acctN, $name, $qtty);
		break;

	case "deposit":
		echo "Deposit<br>";
		echo "<style>#accDeposit{visibility:visible;}</style>";
		//		$qtty  = testAmount ($_POST["amount"]);

		//		$ac->deposit ($qtty);
		break;

	case "withdraw":
		echo "Withdraw<br>";
		echo "<style>#accWithdraw{visibility:visible;}</style>";
		//		$qtty  = testAmount ($_POST["amount"]);

		//		$ac->withdraw ($qtty);
		break;
	}
}

function testName ($name)
{
	$name = stripslashes($name);
	$name = htmlspecialchars($name);
	return $name;
}

function testAcctN ($acctN)
{
	$acctN = trim($acctN);
	$acctN = stripslashes($acctN);
	$acctN = htmlspecialchars($acctN);
	return $acctN;
}

function testAmount ($amount)
{
	if (is_numeric ($amount)) return $amount;
}

?>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

	<input type="radio" name="op" value="new" checked>
	<label for="new">New account</label><br>

	<input type="radio" name="op" value="deposit">
	<label for="deposit">Deposit</label><br>

	<input type="radio" name="op" value="withdraw">
	<label for="withdraw">Withdraw</label>

	<input type="submit">
</form>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

<div id="newAcc">
<h4>New account:</h4>
Name: <input type="text" name="name"><br>
Account Number: <input type="text" name="acctN"><br>
Initial deposit:  <input type="number" name="amount"><br>
<input type="submit">
</div>

<div id="accDeposit">
<h4>Deposit:</h4>
Amount:  <input type="number" name="amount"><br>
<input type="submit">
</div>

<div id="accWithdraw">
<h4>Withdraw:</h4>
Amount:  <input type="number" name="amount"><br>
<input type="submit">
</div>

</form>

	</body>

</html>

