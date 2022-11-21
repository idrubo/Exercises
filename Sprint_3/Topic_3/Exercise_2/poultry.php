<?php

interface asDuck
{
    public function quack ();
    public function fly ();
}

class Duck implements asDuck
{
	public function quack ()
 	{
		echo "Quack \n";
	}

	public function fly ()
 	{
		echo "I'm flying \n";
	}
}

class Turkey
{
	public function gobble ()
 	{
		echo "Gobble gobble \n";
	}

	public function fly ()
 	{
		echo "I'm flying a short distance \n";
	}
}

?>
