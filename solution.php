<!DOCTYPE html>
<html lang="en">
<head>
	<?php 
	include "includes/header.html";
	?>
	<title>Contact With Us!</title>
</head>
<body>
	<?php 
	include "includes/navbar.html";
	$page = "";
	if (isset($_GET['page'])) {
    	$page = $_GET['page'];
	}
	?>
	<section id="solution-banner" class="banner">
		
	</section>
	<?php 
	include "content/".$page.".html";
	?>
	<?php 
	include "includes/footer.html";
	?>
</body>
</html>