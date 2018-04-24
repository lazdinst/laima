const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const noble = require('noble');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.set('origins', 'http://192.168.1.6:3000');
io.set('origins', '*:*');
app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express'});
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express'});
});

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')
  
  socket.on('ping', () => {
    io.sockets.emit('pong', 'pong')
    console.log('Pong')
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

})

// Noble

// noble.on('stateChange', function(state) {
//   if (state === 'poweredOn') {
//     noble.startScanning(["180d"]);
//   } else {
//     noble.stopScanning();
//   }
// });

// noble.on('discover', function(peripheral) {
//   // Once peripheral is discovered, stop scanning
//   noble.stopScanning();

//   // connect to the heart rate sensor
//   peripheral.connect(function(error){
//     var serviceUUID = ["180d"];
//     var characteristicUUID = ["2a37"];

//     // scoped to the heart rate service and measurement characteristic
//     peripheral.discoverSomeServicesAndCharacteristics(serviceUUID, characteristicUUID, function(error, services, characteristics){
//       characteristics[0].notify(true, function(error){
//         characteristics[0].on('data', function(data, isNotification){
//           console.log('data is: ' + data[1]);
//         });
//       });
//     });
//   });
// });

server.listen(port, () => console.log(`Listening on port ${port}`))

// app.listen(port, () => console.log(`Listening on port ${port}`));