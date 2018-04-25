import socketIOClient from 'socket.io-client'
import * as TYPES from '../../types/sockets';

const socketIO = (function(){ 

  var socket = null;

  const onOpen = (ws, store, robotName, host, env) => evt => {
    const { dispatch } = store;

    dispatch()
      .then()
      .catch(error => {
        throw error;
      })
  }

  const onMessage = (ws, store) => evt => {
    //Parse the JSON message received on the websocket
    let msg = null
    try {
      msg = JSON.parse(evt.data);
        console.log('Socket Msg: ', msg);
    } catch(e) {
      console.error(`Error: Parsing Socket Message - ${evt.data}`);
    }
  }

  const onError = (ws, store) => evt => {
    console.log('Failed to open socket')
  }

  const onClose = (ws,store, robotName) => evt => {
    console.log('closed socket')
  }

  return store => next => action => {
    switch(action.type) {

      case TYPES.ADD_SOCKET:
        const socket = socketIOClient(`http://192.168.1.6:5000`);
        console.log('ping')
        socket.emit('ping', 'ping') 
    
        socket.on('pong', () => {
          console.log('pong')
          this.setState({
            pingPong: true
          })
        })
        break;

      //The user wants us to disconnect
      case 'DISCONNECT':
        if(socket != null) {
          socket.close();
        }
        socket = null;

        break;

      //Send the 'SEND_MESSAGE' action down the websocket to the server
      case 'SEND_CHAT_MESSAGE':
        socket.send(JSON.stringify(action));
        break;

      //This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action);
    }
  }

})();

export default socketIO;