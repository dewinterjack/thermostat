$(document).ready(function(){
	var thermostat = new Thermostat();
	$('#temperature').text(thermostat.temperature);
	$('#increase_temp').on('click', function(){
		thermostat.up();
		$('#temperature').text(thermostat.temperature);
	});
});