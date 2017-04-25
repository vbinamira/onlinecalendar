<?php  
	include ($_SERVER['DOCUMENT_ROOT'].'/api/class.smh.php'); 
	$columns = new SmartAPI();
	$columns->getVegasDancers();
?>