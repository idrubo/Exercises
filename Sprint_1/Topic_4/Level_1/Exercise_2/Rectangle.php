<?php
class Rectangle extends shape
{
	public function area ()
	{
		$this->surface = $this->height * $this->width;
	}

	public function prnSurface ()
	{
		echo "The rectangle area is: " . $this->surface . "<br><br>";
	}
}
?>
