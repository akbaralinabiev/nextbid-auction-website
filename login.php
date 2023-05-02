<!DOCTYPE html>
<html>
<head>
	<title>Greeting Form</title>
</head>
<body>
	<form method="post">
		<label for="name">Enter your name:</label>
		<input type="text" name="name" id="name">
		<button type="submit">Submit</button>
	</form>
	<?php
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$name = $_POST['name'];
		echo "<p>Hello, $name!</p>";
	}
	?>
</body>
</html>
