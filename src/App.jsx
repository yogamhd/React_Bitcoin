import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

class App extends Component {
  render() {
    return (
      <center class='container-fluid' style={{fontFamily:'VT323'}}>
        <h1>Welcome to BTCInfo</h1>
        <ul class='nav nav-tabs'>
          <li class='nav-item active'>
            <Link to='/page1'>
              <i class="nav-link active" >Info harga Bitcoin</i>
            </Link>
          </li>    
          <li class="nav-item">
            <Link to="/page2">
              <i class="nav-link active" >Rupiah ke Bitcoin</i>
            </Link>        
          </li>
          <li class="nav-item">
            <Link to="/page3">
              <i class="nav-link active" >Bitcoin ke Rupiah</i>
            </Link>        
          </li>
        </ul>
        <div>
          <Route path='/page1'component={Page1}/>
          <Route path='/page2'component={Page2}/>
          <Route path='/page3'component={Page3}/>
        </div>
      </center>
    );
  }
}

export default App;