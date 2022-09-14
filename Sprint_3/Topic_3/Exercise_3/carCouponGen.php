<?php

interface carCouponGen
{
	public function addSeasonDiscount ();
	public function addStockDiscount ();
}

class bmwCouponGen implements carCouponGen
{
	private $isHighSeason = 5, $bigStock = 7;

	public function addSeasonDiscount ()
	{
		return $this->isHighSeason;
	}

	public function addStockDiscount ()
	{
		return $this->bigStock;
	}
}

class mercedesCouponGen implements carCouponGen
{
	private $isHighSeason = 4, $bigStock = 10;

	public function addSeasonDiscount ()
	{
		return $this->isHighSeason;
	}

	public function addStockDiscount ()
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
			$discount += $this->carBrand->addSeasonDiscount ();

		if ($stockD)
			$discount += $this->carBrand->addStockDiscount ();

		return $discount;
	}
}

?>
