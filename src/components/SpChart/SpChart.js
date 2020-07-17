import React, {Component} from "react"
import "./SpChart.css"
import SpData from "./SpData"
import Slider, { Range } from "rc-slider"
import "rc-slider/assets/index.css"

export default class SpChart extends Component{

    state={
        startYear:1926,
        endYear:2019,
    }

    renderData=()=>{
        //sort data in ascending order based on year
        const spDataSorted = SpData.sort((a,b)=>a.year-b.year)
        
        let dataRows = spDataSorted.map((row,index)=>{
            //only render row data if year falls within selected range
            if(row.year>=this.state.startYear && row.year<=this.state.endYear){

                let currentYear = row.year
                let cumulativeReturn = 0

                //add year's return to cumulative return if year is between startYear and currentYear     
                SpData.map(row=>{
                    if(row.year<=currentYear && row.year>=this.state.startYear){
                        cumulativeReturn = cumulativeReturn+Number(row.totalReturn)
                    }
                })

                return(
                    <tr key={index} className="hoverableTr">
                        <td>{row.year}</td>
                        <td className={row.totalReturn<0?"negativeValue":""}>{row.totalReturn}</td>
                        <td className={cumulativeReturn<0?"negativeValue":""}>{cumulativeReturn.toFixed(2)}</td>
                    </tr>
                )
            }
            
        })

        return dataRows
    }

    //if user changes range, set start and end year in state
    handleRangeChange=(range)=>{
        this.setState({
            startYear:range[0],
            endYear:range[1]
        })
    }

    renderRange=()=>{

        let marks={
            1926:{
                style: {
                    display:"block",
                },
                label: "1926",
            },
            2019:{
                style:{
                    display:"block",
                },
                label:"2019"
            }
        }

        return(
            <Range className="range" min={1926} max={2019} defaultValue={[1926,2019]} onAfterChange={range=>this.handleRangeChange(range)} allowCross={false} marks={marks} tooltip={true}/>
        )

    }

    render(){
        return(
            <section className="chartSection">
                <header>
                    <h1>S&P 500 Returns by Year</h1>
                </header>
                {this.renderRange()}
                <table>
                    <thead>
                        <tr className="tr-border">
                            <th>Year</th>
                            <th>Total Return</th>
                            <th>Cumulative Return</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </section>
        )
    }
  
}