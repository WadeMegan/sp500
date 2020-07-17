import React, {Component} from 'react'
import './SpChart.css'
import SpData from './SpData'

export default class SpChart extends Component {

  renderData=()=>{
    //sort data in ascending order based on year
    const spDataSorted = SpData.sort((a,b)=>a.year-b.year)
    
    let dataRows = spDataSorted.map((row,index)=>{
        return(
            <tr key={index}>
                <td>{row.year}</td>
                <td>{row.totalReturn}</td>
                <td>Test</td>
            </tr>
        )
    })

    return dataRows
  }

  render(){
    return (
        <>
        <h1>S&P 500 Index Returns</h1>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Return</th>
                    <th>Cumulative Returns</th>
                </tr>
            </thead>
            <tbody>
                {this.renderData()}
            </tbody>
        </table>
        </>
    )
  }
  
}