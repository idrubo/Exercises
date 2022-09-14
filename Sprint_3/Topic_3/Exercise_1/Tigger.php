<?php

class Tigger
{
	private static $tggr;
	private $Rr = 0;

	private function __construct () {}

	public static function getInstance () : self
	{
		if (! isset (self::$tggr))
		{
			echo "Building character..." . PHP_EOL;
			self::$tggr = new self ();
		}
		return self::$tggr;
	}

	public function roar ($n = 1)
	{
		for ($i = 0; $i < $n; $i++)
		{
			echo "Grrr!" . PHP_EOL;
			$this->Rr++;
		}
	}

	public function getCounter () { return $this->Rr; }
}

?>
