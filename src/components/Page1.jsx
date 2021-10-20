import React, { Component } from 'react';
import axios from 'axios';

class Page1 extends Component {
    constructor(){
        super();
        this.state = {
            dlrausbeli: '',dlrausjual: '',   
            eurobeli: '',eurojual: '',    
            poundsbeli: '',poundsjual: '',    
            yenbeli: '',yenjual: '',  
            dlrusbeli: '',dlrusjual: '',
        };
    }
    componentDidMount(){
        axios.get('https://blockchain.info/ticker')
        .then((ambilData) => {
          this.setState({
            dlrausbeli: ambilData.data.AUD.buy,
            dlrausjual: ambilData.data.AUD.sell,
            eurobeli: ambilData.data.EUR.buy,
            eurojual: ambilData.data.EUR.sell,
            poundsbeli: ambilData.data.GBP.buy,
            poundsjual: ambilData.data.GBP.sell,
            yenbeli: ambilData.data.JPY.buy,
            yenjual: ambilData.data.JPY.sell,
            dlrusbeli: ambilData.data.USD.buy,
            dlrusjual: ambilData.data.USD.sell
          });
        });
    }
  render() {
    return (
      <div className='container' style={{fontFamily:'VT323'}}>
        <h1 style={{textAlign: 'center'}}>Harga Bitcoin Hari Ini</h1>
        <table className='table table-bordered'>
            <thead className='thead'>
                <tr>
                    <th scope='col'>Mata Uang</th>
                    <th scope='col'>Harga Beli Bitcoin</th>
                    <th scope='col'>Mata Jual Bitcoin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dollar Australia</td>
                    <td>{this.state.dlrausbeli}</td>
                    <td>{this.state.dlrausjual}</td>
                </tr>
                <tr>
                    <td>Euro Eropa</td>
                    <td>{this.state.eurobeli}</td>
                    <td>{this.state.eurojual}</td>
                </tr>
                <tr>
                    <td>Poundsterling Inggris</td>
                    <td>{this.state.poundsbeli}</td>
                    <td>{this.state.poundsjual}</td>
                </tr>
                <tr>
                    <td>Yen Jepang</td>
                    <td>{this.state.yenbeli}</td>
                    <td>{this.state.yenjual}</td>
                </tr>
                <tr>
                    <td>Dollar Amerika</td>
                    <td>{this.state.dlrusbeli}</td>
                    <td>{this.state.dlrusjual}</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Page1;