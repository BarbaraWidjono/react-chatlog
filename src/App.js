import React, { Component } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

class App extends Component {
  render() {
    // console.log(chatMessages);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat between Vladimir and Estragon</h1>
        </header>
        <main className="App-main">
          <ChatLog messages={chatMessages}/>
        </main>
      </div>
    );
  }
}

export default App;
