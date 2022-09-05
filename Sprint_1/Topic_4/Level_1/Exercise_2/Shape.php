<?php
class Shape
{
	protected $width;
	protected $height;
	protected $surface;

	public function __construct ($w, $h)
	{
		$this->width = $w;
		$this->height = $h;
	}
}
?>
