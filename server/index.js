const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
var noble = require('noble');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    // Seek for peripherals broadcasting the heart rate service
    // This will pick up a Polar H7 and should pick up other ble heart rate bands
    // Will use whichever the first one discovered is if more than one are in range
    noble.startScanning(["180d"]);
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
  // Once peripheral is discovered, stop scanning
  noble.stopScanning();

  // connect to the heart rate sensor
  peripheral.connect(function(error){
    var serviceUUID = ["180d"];
    var characteristicUUID = ["2a37"];

    // scoped to the heart rate service and measurement characteristic
    peripheral.discoverSomeServicesAndCharacteristics(serviceUUID, characteristicUUID, function(error, services, characteristics){
      characteristics[0].notify(true, function(error){
        characteristics[0].on('data', function(data, isNotification){
          console.log('data is: ' + data[1]);
        });
      });
    });
  });
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
