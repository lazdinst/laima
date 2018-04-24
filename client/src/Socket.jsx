import React from 'react';
import socketIOClient from 'socket.io-client'

export default class Socket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pingPing: false,
      endpoint: 'http://192.168.1.6:5000',
      timestamp: 'blank'
    }
  }

  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('change color', 'red') 

    socket.on('pong', () => {
      this.setState({
        pingPong: true
      })
    })
    
  }

  render() {
    const { timestamp } = this.state;
    return (
      <div>
        { timestamp }
      </div>
    );
  }
}