/**
 * Actions when html and all external files are loaded
 */
document.addEventListener('DOMContentLoaded', function(event) {
	// Creating header on top of tile
  Nexpaq.Header.create('Temperature & Humidity');

// Page completely loaded
   
	document.getElementById('celsius').addEventListener('click', function(e) {
		celsius();
	});
	document.getElementById('fahrenheit').addEventListener('click', function(e) {
		fahrenheit();
	});
    
});
	// Actions when back button clicked. The back button will be added automatically by the native
	/*window.nexpaqAPI.global.addEventListener('onBackButtonClicked', function() {
		window.nexpaqAPI.util.closeApplication();
	});
	//SHT20val function is called when recieving new data
	window.nexpaqAPI.DevMod.addEventListener("onDataReceived", SHT20val);
	// Module actions
    
    */
document.addEventListener('NexpaqAPIReady', function (e) {

    Nexpaq.API.Module.addEventListener('DataReceived', function(event){;
        /**
		 * There are 3 arguments passed when app runs tile:
		 * - Target module UUID
		 * - Target module slot in gateway
		 * - Target module type (i.e. nexpaq.module.laser)
		 */
        
        //var targetModuleUuid = Nexpaq.Arguments[0];
		
		// we don't care about data not related to our module
		//if(event.moduleUuid != targetModuleUuid) return;
                                                                       
        if(event.dataSource =='sht20'){
           handleAdcValue(event.variables.temp, event.variables.hum);
        } 
        
                                                                      
         });
        
        
    });
    

var number1 = 1;
var number2 = 1;
var units = "ºC";

//Start measurements
function celsius() {
	number1 = 1;
	number2 = 1;
	units = "ºC";
    
    
};
function fahrenheit() {
	number1 = 9/5;
	number2 = 32;
	units = "ºF";
};
function handleAdcValue(temp1, hum1) {
    var temperature_receive = temp1;
    var humidity_receive = hum1;
    
	// get SHT20 value
	//var temperature_receive = Nexpaq.API.module.last_data.temperature; 
	//var humidity_receive = Nexpaq.API.module.last_data.humidity;

	var temperature0 = (((((175.75*temperature_receive)/65536)-46.85)*number1)+number2);
    
	var temperature = temperature0.toFixed(2);
	var humidity0 = (((125*humidity_receive)/65536)-6);
	var humidity = humidity0.toFixed(2);

	document.getElementById("temperature").textContent = temperature+units;
	document.getElementById("humidity").textContent = humidity+"%";

}
/**
 * * Functions:
 * * * Upstream
 * receive: last_data.x -- get array element. x name given at parse file
 * * * Downstream:
 *send: set the comand parameter (from 00 to FF) and pData argument (from 0 to 255)
 *
 */
