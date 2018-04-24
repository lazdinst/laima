# Laima

## Bluetooth
180d is the bluetooth service for heart rate:
- [BT Service Viewer: Heart Rate](https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.heart_rate.xml)

2a37 is the characteristic for heart rate measurement
- [BT Service Viewer: Heart Rate Measurement](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml)
- [Measurement Docs](https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml)

The actual BPM data is stored in the 2nd bit in data (at array index 1)
- [Heart Rate BPM Data](http://www.raywenderlich.com/52080/introduction-core-bluetooth-building-heart-rate-monitor)


## Helpful Links
https://www.bluetooth.com/specifications/assigned-numbers/health-device-profile
https://bl.ocks.org/velickym/d19f76572243c774557f
http://developers.overwolf.com/documentation/sdk/overwolf/
http://developers.overwolf.com/documentation/odk-2-0-introduction/creating-your-first-app/