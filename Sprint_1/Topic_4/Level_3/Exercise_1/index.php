<!DOCTYPE html>

<html>

	<head>
		<title>Topic 4 Level 3 Exercise 1</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="bank.css">
	</head>

	<body>

		<?php require 'bank.php'; ?>

		<header> <h1>Computer banking</h1> </header>

		<main>
			<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

				<div class="formBox">
					<h4>New account:</h4>

					<div class="formRows">Name:<input type="text" name="name"></div>
					<div class="formRows">Account Number:<input type="text" name="acctN"></div>
					<div class="formRows">Initial deposit:<input type="text" name="mnt"></div>

					<div><input type="submit" name="sent" value="create"></div>
				</div>

				<div class="formBox">
					<h4>Deposit:</h4>

					<div class="formRows">Amount:<input type="text" name="dmnt"></div>

					<div><input type="submit" name="sent" value="deposit"></div>
				</div>

				<div class="formBox">
					<h4>Withdraw:</h4>

					<div class="formRows">Amount:<input type="text" name="wmnt"></div>

					<div><input type="submit" name="sent" value="withdraw"></div>
				</div>

			</form>
		</main>

		<footer>
			<div id="fAccount">
				<b>Account: <br></b>

				<?php
				if (isset ($ac))
				{
					echo "<h4 style=\"color:Navy;\">";
					echo "Name: "         . $ac->getName ()       . "<br>";
					echo "Acct. number: " . $ac->getAcctNumber () . "<br>";
					echo "Balance: "      . $ac->getBalance ()    . "<br></h4>";
				}
				?>

			</div>
			<div id="fState">
				<b>State:<br></b>

				<?php
				if (isset ($ac)) echo $ac->getStatus ();
				else echo $Status;
				?>

			</div>
		</footer>
	</body>
</html>

