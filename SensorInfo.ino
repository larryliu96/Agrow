#include <SoftwareSerial.h>
#include <dht.h>
#define DHT22_PIN 2
SoftwareSerial mySerial(3,2); // pin 2 = TX, pin 3 = RX (unused)


// Here we are setting up some water thersholds that we will 
// use later. Note that you will need to change these to match
// your soil type and environment. 

//int thresholdUp = 400;
//int thresholdDown = 250;

// We are setting up the pin A0 on the redboard to be our sensor
// pin input:

int soilsensorPin = A0;
dht DHT;

void setup(){
  Serial.begin(9600); // set up serial port for 9600 baud (speed)
  delay(500);
}

void loop(){
  int sensorValue;
  int tempsensorValue;
  sensorValue = analogRead(soilsensorPin);
  DHT.read22(DHT22_PIN);
//  tempsensorValue = analogRead(tempsoilsensorPin);
  //Serial.print("Soil Moisture Sensor: ");
  Serial.print(sensorValue, 1);
  Serial.print(" ");
  //Serial.print("Humidity Sensor: ");
  Serial.print(DHT.humidity, 1);
  Serial.print(" ");
  //Serial.print("Temperature Sensor: ");
  Serial.print(DHT.temperature, 1);
  Serial.print("\n");

  delay(1000);
}
