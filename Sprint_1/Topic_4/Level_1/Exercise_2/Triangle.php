<?php
class Triangle extends shape
{
	public function area ()
	{
		$this->surface = $this->height * $this->width / 2;
	}

	public function prnSurface ()
	{
		echo "The triangle area is: " . $this->surface . "<br><br>";
	}
}
?>
