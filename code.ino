#include "DHT.h" // including the package needed to run our DHT11 sensor
#define DHTPIN 7 //defining a pin for the sensor, i.e. - D7
#define DHTTYPE 11 // the sensor used is of the DHT11 category
DHT dht(DHTPIN, DHTTYPE); // defining the class which stores info about the sensor
const int moisture_sensor_pin = A1 ; // defining a pin for our analog moisture sensor i.e.- A1


void setup() {
  Serial.begin(9600); // defining baud rate
  dht.begin(); // initiating the dht class
}

void loop() {
  float moisture_percentage; // defining the moisture percentage which would be (100 - (analog reading*100/1023)) SOURCE - DHT documentation
  int moisture_sensor_analog; // our moisture sensor analog sensor reading
  float humidity; // defining the humidity which will be read by our DHT11 sensor
  float temp; // defining the temperature which will be read by our DHT11 sensor
  humidity = dht.readHumidity(); // reading the humidity value and assigning it to our variable
  temp = dht.readTemperature(); // reading the temperature value and assigning it to our variable
  moisture_sensor_analog = analogRead(moisture_sensor_pin); // reading the moisture and assigning it to our variable
  moisture_percentage = ( 100 - ( (moisture_sensor_analog/1023.00) * 100 ) ); // calculating the moisture percentage
  
  // printing all the data in the serial monitor -->

  Serial.print("Moisture Percentage = "); 
  Serial.print(moisture_percentage);
  Serial.print("%\n\n");
  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.print("%\n\n");
  Serial.print("Temperature = ");
  Serial.print(temp);
  Serial.print("%\n\n");
  delay(1000);
}
