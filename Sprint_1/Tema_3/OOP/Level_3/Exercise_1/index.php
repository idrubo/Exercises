<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Level 3 Exercise 1</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="bank.css">
	</head>

	<body>
<?php 

class account
{
	private $acctNumber;
	private $hName;
	private $balance;

	public function __construct ($aN, $Nm, $bal = 0)
	{
		$this->acctNumber = $aN;
		$this->hName = $Nm;
		$this->balance= $bal;

		echo "A new account is set with: <br><br>";
		echo "Account number: " . $this->acctNumber . "<br>";
		echo "name: "           . $this->hName      . "<br>";
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
		$this->hName = $Nm;
	}

	public function setAcctNumber ($aN)
	{
		$this->acctNumber = $aN;
	}

	public function getName ()
	{
		return $this->hName;
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
	if (is_numeric ($amount)) return (int) $amount;

	echo "NOT a correct amount<br>";

	return -1;
}

session_start ();

$name = $acctN = $qtty = "";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
	switch ($_POST["sent"])
	{
	case "create":
		$acctN = testAcctN  ($_POST["acctN"]);
		$name  = testName   ($_POST["name"]);
		$qtty  = testAmount ($_POST["mnt"]);

		if ($qtty >= 0)
		{
			$ac = new account ($acctN, $name, $qtty);
			$_SESSION["ac"] = $ac;
		}

		break;

	case "deposit":
		$qtty  = testAmount ($_POST["dmnt"]);

		$ac = $_SESSION["ac"];

		if ($qtty >= 0)
			$ac->deposit ($qtty);

		break;

	case "withdraw":
		$qtty  = testAmount ($_POST["wmnt"]);

		$ac = $_SESSION["ac"];

		if ($qtty >= 0)
			$ac->withdraw ($qtty);

		break;
	}
}

?>

<header>
<h1>Computer banking</h1>
</header>

<main>
		<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

			<div id="newAcc">
				<h4>New account:</h4>

				<div class="formRows">Name:<input type="text" name="name"></div>
				<div class="formRows">Account Number:<input type="text" name="acctN"></div>
				<div class="formRows">Initial deposit:<input type="text" name="mnt"></div>

				<div><input type="submit" name="sent" value="create"></div>
			</div>

			<div id="accDeposit">
				<h4>Deposit:</h4>

				<div class="formRows">Amount:<input type="number" name="dmnt"></div>

				<div><input type="submit" name="sent" value="deposit"></div>
			</div>

			<div id="accWithdraw">
				<h4>Withdraw:</h4>

				<div class="formRows">Amount:</td><td><input type="number" name="wmnt"></div>

				<div><input type="submit" name="sent" value="withdraw"></div>
			</div>

		</form>
</main>

<footer>
</footer>


	</body>

</html>

