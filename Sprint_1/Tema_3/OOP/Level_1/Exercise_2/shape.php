<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 (OOP) Level 1 Exercise 2</title>
		<meta charset="UTF-8">
	</head>

	<body>

<?php
class shape
{
	protected $width;
	protected $height;

	public function __construct ($w, $h)
	{
		$this->width = $w;
		$this->height = $h;
	}
}

class triangle extends shape
{
	private $surface;

	public function area ()
	{
		$this->surface = $this->height * $this->width / 2;
	}

	public function prnSurface ()
	{
		echo "The triangle area is: $this->surface<br><br>";
	}
}

class rectangle extends shape
{
	private $surface;

	public function area ()
	{
		$this->surface = $this->height * $this->width;
	}

	public function prnSurface ()
	{
		echo "The rectangle area is: $this->surface<br><br>";
	}
}

$tr = new triangle  (3, 2);
$sq = new rectangle (3, 2);

$tr->area ();
$sq->area ();

$tr->prnSurface ();
$sq->prnSurface ();

?>

	</body>

</html>

