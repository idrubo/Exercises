<?php 
class PokerDice
{
	static $diceFaces = array ("As", "K", "Q", "J", "8", "7");
	static $totalThrows;

	private $result;

	public function throwDice ()
	{
		$this->result = rand (0, 5);
		self::$totalThrows++;
	}

	public function shapeName ()
	{
		echo "<b>-" . self::$diceFaces [$this->result] . "-</b>";
	}

	public function getTotalThrows ()
	{
		return pokerDice::$totalThrows;
	}
}
?>
