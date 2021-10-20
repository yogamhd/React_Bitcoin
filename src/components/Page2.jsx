import React, { Component } from 'react';
import axios from 'axios';

class Page2 extends Component {
    constructor(){
        super();
        this.state = {
            idr:'',
            usd:'',
            hasil:'',
        };
    }
    convert(){
        var rp = this.refs.rupiah.value;
        var input = (rp/14000);
        var url = `https://blockchain.info/tobtc?currency=USD&value=${input}`
        axios.get(url).then((get)=>{
            this.setState({
                idr:rp,
                usd:input,
                hasil: get.data,
            })
        })
    }
    render(){
        return(
          <div className='container' style={{fontFamily:'VT323'}}>
            <h1 style={{textAlign: 'center'}}>
              Konversi Rupiah ke Bitcoin
            </h1>
            <p style={{textAlign: 'center'}}>
              Kurs 1 USD = 14.000 IDR
            </p>
            <input ref='rupiah' type="number" onKeyUp={()=>{this.convert()}} className="form-control"/>
            <h3 style={{marginTop: 25, textAlign: 'center'}}> Rp {this.state.idr} = {this.state.hasil}  </h3> 
          </div>
        );
    }
}

export default Page2;