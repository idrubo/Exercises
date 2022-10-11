<?php

require 'poultry.php';
require 'turkeyAdapter.php';

function duck_interaction($duck)
{
  $duck->quack();
  $duck->fly();
}

$duck = new Duck ();
$turkey = new Turkey ();
$turkey_adapter = new turkeyAdapter ($turkey);

echo "The Turkey says...\n";
$turkey->gobble ();
$turkey->fly ();

echo "\nThe Duck says...\n";
duck_interaction ($duck);

echo "\nThe TurkeyAdapter says...\n";
duck_interaction ($turkey_adapter);

?>
