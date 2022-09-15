<?php

interface carCouponGen
{
	public function getSeasonDiscount ();
	public function getStockDiscount ();
}

class bmwCouponGen implements carCouponGen
{
	private $isHighSeason = 5, $bigStock = 7;

	public function getSeasonDiscount ()
	{
		return $this->isHighSeason;
	}

	public function getStockDiscount ()
	{
		return $this->bigStock;
	}
}

class mercedesCouponGen implements carCouponGen
{
	private $isHighSeason = 4, $bigStock = 10;

	public function getSeasonDiscount ()
	{
		return $this->isHighSeason;
	}

	public function getStockDiscount ()
	{
		return $this->bigStock;
	}
}

class brandCouponGen
{
	private $carBrand;

	public function __construct ($cb) { $this->carBrand = $cb; }

	public function addDiscount ($seasonD, $stockD)
	{
		$discount = 0;

		if ($seasonD)
			$discount += $this->carBrand->getSeasonDiscount ();

		if ($stockD)
			$discount += $this->carBrand->getStockDiscount ();

		return $discount;
	}
}

?>
