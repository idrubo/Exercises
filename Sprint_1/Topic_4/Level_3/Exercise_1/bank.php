<?php

require 'Account.php';

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
			$ac = new Account ($acctN, $name, $qtty);
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
?>
