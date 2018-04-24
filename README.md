# Laima

## Bluetooth
180d is the bluetooth service for heart rate:
https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.heart_rate.xml

2a37 is the characteristic for heart rate measurement
https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml

The actual BPM data is stored in the 2nd bit in data (at array index 1)
http://www.raywenderlich.com/52080/introduction-core-bluetooth-building-heart-rate-monitor
Measurement docs here: 
- https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml

## Helpful Links
https://www.bluetooth.com/specifications/assigned-numbers/health-device-profile
