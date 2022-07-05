<!DOCTYPE html>

<html>

	<head>
		<title>Topic 3 Level 3 Exercise 1</title>
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

					<div class="formRows">Amount:<input type="number" name="dmnt"></div>

					<div><input type="submit" name="sent" value="deposit"></div>
				</div>

				<div class="formBox">
					<h4>Withdraw:</h4>

					<div class="formRows">Amount:</td><td><input type="number" name="wmnt"></div>

					<div><input type="submit" name="sent" value="withdraw"></div>
				</div>

			</form>
		</main>

		<footer>
			<div id="fRow">
				<b>State:<br></b>

				<?php if (isset ($ac)) echo $ac->getStatus (); ?>

			</div>
		</footer>


	</body>

</html>

