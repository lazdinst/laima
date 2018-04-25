import React from 'react';
import './App.css';

import SocketMessage from './Socket'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <header>
          <h1>Header</h1>
        </header>
        <p>{this.state.response}</p>
        <SocketMessage />
      </div>
    );
  }
}

export default App;