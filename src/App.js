import React from 'react';
import { Provider } from "react-redux";
import store from "./components/BookContainer/redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookContainer from './components/BookContainer';
import HookContainer from './components/HookContainer';
import Display from './components/displayContainer'
import './App.css';
import logo from './logo.png';

function App() {
  console.log(store);
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BookContainer />
          <HookContainer />
        </header>
        <Display /* onAddProduct={addProductHandler} items={loadedProducts} */></Display>
      </Provider>
    </div>
  );
}

export default App;
