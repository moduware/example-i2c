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

/**
 * Actions when nexpaq API completely initialized and we can start working with it
 * Actions for checking the module ID and data source
 * sht20 function is called when recieving new data
 */
document.addEventListener('NexpaqAPIReady', function () {

    Nexpaq.API.Module.addEventListener('DataReceived', function(event){;
    /**
     * There are 3 arguments passed when app runs tile:
     * - Target module UUID
     * - Target module slot in gateway
     * - Target module type (i.e. nexpaq.module.laser)
     */

    var targetModuleUuid = Nexpaq.Arguments[0];

     // We don't care about data not related to our module
     if(event.moduleUuid != targetModuleUuid) return;
     // Module can send multiple types of data, so we are filtering it by type
     if(event.dataSource =='sht20'){
         // And routing it to correct function that will handle it for us
         sht20(event.variables.temp, event.variables.hum);
     }
                                                                      
    });


});


// Assign variables for initial temperature measurements.
var number1 = 1;
var number2 = 1;
var units = "ºC";

//Function to create variables to perform the temperature conversion into Celsius
function celsius() {
    number1 = 1;
    number2 = 1;
    units = "ºC";
};
//Function to create variables to perform the temperature conversion into Fahrenheit
function fahrenheit() {
    number1 = 9/5;
    number2 = 32;
    units = "ºF";
};


/*
 * function sht20(temp1, hum1)
 * receives raw data elements from the module via communicaton gateway
 * temperature_receive, humidity_receive - local variable for temperature & humidity  
 * variables to process the data and perform convertion
 * displays the correct data in form of temperature and humidity readings
 */
function sht20(temp1,hum1){
    // local data variables 
    var temperature_receive = temp1;
    var humidity_receive = hum1;
    // convert the recieved temperature and humidity values from the SHT20 sensor.
    var temperature0 = (((((175.75*temperature_receive)/65536)-46.85)*number1)+number2);
    var temperature = temperature0.toFixed(2);
    var humidity0 = (((125*humidity_receive)/65536)-6);
    var humidity = humidity0.toFixed(2);
    // send the final values of temperature and humidity to the app.
    document.getElementById("temperature").textContent = temperature+units;
    document.getElementById("humidity").textContent = humidity+"%";
}
