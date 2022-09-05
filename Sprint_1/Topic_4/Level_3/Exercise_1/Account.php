<?php

class Account
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
?>
