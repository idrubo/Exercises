<?php

require 'Tigger.php';

function awakeTigger ()
{
	$T1 = Tigger::getInstance ();
	$T2 = Tigger::getInstance ();

	$T1->roar (3);
	echo "The awaken \"Tigger\" has roared " . $T1->getCounter () . " times.\n\n";

	$T1->roar ();
	echo "After cheering it, \"Tigger\" has roared " . $T1->getCounter () . " times.\n";

	echo "\nChecking \"Tigger\" awakening:\n";
	if ($T1 === $T2) echo "We have only ONE \"Tigger\" as we should.\n";
	else echo "We can NOT have more than ONE \"Tigger\".\n";

}

awakeTigger ();

?>
