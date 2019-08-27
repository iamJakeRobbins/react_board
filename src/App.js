import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider as ReduxProvider } from "react-redux";
import Hello from './components/hello.js'
import { createStore } from 'redux'


// const store = createStore(Hello)

function App() {
  return (
    <div className="App">
			<Hello name='Jake Robbins' />
    </div>
  );
}

export default App;
