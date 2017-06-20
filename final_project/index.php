<?php include ('includes/header.php'); ?>

	<div class="row">
		<div class="col-md-9">
		<br/><br/>
	    	<div id='gmap_canvas' style='height:500px;width:780px;'>
	    		<style>
	    			#gmap_canvas img{max-width:none!important;background:none!important}
	    		</style>
	    	</div>
	    		
    	</div>
  		<div class="col-md-3">
  			<h3 class="text-center ">Choose Your Taxi</h3><hr>
	    	<div class="list-group" id="vehicle-list">
	    		<button id='veh1' class='list-group-item'></button>
	    		<button id='veh2' class='list-group-item'></button>
	    		<button id='veh3' class='list-group-item'></button>
	    		<button id='veh4' class='list-group-item'></button>
	    		<button id='veh5' class='list-group-item'></button>
	    	</div>
    	</div>
	</div>
	<div class = row>
		<br>
		<br>
	</div>
</div>
<script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
<script type="text/javascript" src="js/map2.js"></script>
<!-- <script type="text/javascript" src="js/map1.js"></script> -->
<script type="text/javascript" src="js/vehicle_list.js"></script>

<?php include ('includes/footer.php'); ?>