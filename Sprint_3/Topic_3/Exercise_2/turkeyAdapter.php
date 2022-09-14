<?php

class turkeyAdapter
{
	private $dck, $trk;

	public function __construct ($t)
	{
		$this->dck = new Duck ();
		$this->trk = $t;
	}

	public function quack ()
	{
		$this->trk->gobble ();
	}

	public function fly ()
	{
		for ($i = 0; $i < 5; $i++)
			$this->trk->fly ();
	}
}

?>
