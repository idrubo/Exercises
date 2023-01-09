<?php


/* Sprint 3 - Topic 3 - Exercise 3 */

require 'carCouponGen.php';

$season = true;
$stock = true;

$bmwCoupon = new brandCouponGen (new bmwCouponGen);
$mercedesCoupon = new brandCouponGen (new mercedesCouponGen);

echo "\nBMW total discount: " . $bmwCoupon->addDiscount ($season, $stock) . "\n";
echo "Mercedes total discount: " . $mercedesCoupon->addDiscount ($season, $stock) . "\n";

?>

