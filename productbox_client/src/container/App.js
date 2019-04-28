import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store/index';
import Main from './Main';
import Navbar from '../common/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

const store = configureStore();

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className="onboarding">
            <Navbar/>
            <Main/>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
