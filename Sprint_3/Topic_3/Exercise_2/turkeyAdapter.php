<?php

class turkeyAdapter
{
  private $trk;

  public function __construct ($t) { $this->trk = $t; }

  public function quack () { $this->trk->gobble (); }

  public function fly ()
  {
    for ($i = 0; $i < 5; $i++)
      $this->trk->fly ();
  }
}

?>

