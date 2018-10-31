//主要文件
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// 组件
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail';

import store from './store/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}> </Route>
            <Route path='/detail' component={Detail}> </Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
