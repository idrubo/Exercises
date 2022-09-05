<?php
class FiveDices
{
	private $fDices = array ();

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
	}

	public function getTotalThrows ()
	{
		return pokerDice::$totalThrows;
	}
}
?>
