<?php

class account
{
	private $acctNumber;
	private $hName;
	private $balance;

	private $state;

	public function __construct ($aN, $Nm, $bal = 0)
	{
		$this->acctNumber = $aN;
		$this->hName = $Nm;
		$this->balance= $bal;

		$this->state = "<h4 style=\"color:Navy;\">";
		$this->state = $this->state . "A new account is set.<br></h4>";
	}

	function deposit ($amount)
	{
		$this->balance += $amount;
		$this->state = "<h4 style=\"color:Navy;\">";
		$this->state = $this->state . "Deposit completed.</h4>";
	}

	function withdraw ($amount)
	{
		if ($amount > $this->balance)
		{
			$this->state = "<h4 style=\"color:red;\">";
			$this->state = $this->state . "Your balance (" . $this->balance;
			$this->state = $this->state . ") is too low for this operation.</h4>";
			return;
		}
		$this->balance -= $amount;
		$this->state = "<h4 style=\"color:Navy;\">";
		$this->state = $this->state . "Withdraw completed.</h4>";
	}

	public function setName ($Nm)
	{
		$this->hName = $Nm;
	}

	public function setAcctNumber ($aN)
	{
		$this->acctNumber = $aN;
	}

	public function setState ($st)
	{
		$this->state = $st;
	}

	public function rstState ()
	{
		$this->state = "";
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

	public function getStatus ()
	{
		return $this->state;
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

	return -1;
}

session_start ();

$Status = "";

if (array_key_exists ("ac", $_SESSION))
	$ac = $_SESSION["ac"];

if ((array_key_exists ("ac", $_SESSION)) && ($_SERVER["REQUEST_METHOD"] != "POST"))
	$ac->rstState ();

$name = $acctN = "";
$qtty = 0;

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
		else
		{
			$acSt = "<h4 style=\"color:red;\">";
			$acSt = $acSt . "The amount must be a number.<br></h4>";
			if (isset ($ac)) $ac->setState ($acSt);
			else $Status = $acSt;
		}

		break;

	case "deposit":
		if (array_key_exists ("ac", $_SESSION))
		{
			$qtty  = testAmount ($_POST["dmnt"]);
			$ac = $_SESSION["ac"];

			if ($qtty >= 0) $ac->deposit ($qtty);
			else
			{
				$acSt = "<h4 style=\"color:red;\">";
				$acSt = $acSt . "The amount must be a number.<br></h4>";
				$ac->setState ($acSt);
			}
		}
		else
		{
			$Status = "<h4 style=\"color:red;\">";
			$Status = $Status . "You must open an account first.<br></h4>";
		}

		break;

	case "withdraw":
		if (array_key_exists ("ac", $_SESSION))
		{
			$qtty  = testAmount ($_POST["wmnt"]);
			$ac = $_SESSION["ac"];

			if ($qtty >= 0) $ac->withdraw ($qtty);
			else
			{
				$acSt = "<h4 style=\"color:red;\">";
				$acSt = $acSt . "The amount must be a number.<br></h4>";
				$ac->setState ($acSt);
			}
		}
		else
		{
			$Status = "<h4 style=\"color:red;\">";
			$Status = $Status . "You must open an account first.<br></h4>";
		}

		break;
	}
}

