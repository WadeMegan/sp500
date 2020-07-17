import React, {Component} from "react"
import "./App.css"
import SpChart from "../SpChart/SpChart"
import Logo from "../../assets/white-logo.png"

export default class App extends Component{

  render(){
    return (
      <>
      <nav>
        <ul>
          <li><a href="https://portfolio.wademegan.now.sh/" target="_blank" rel="noopener noreferrer" aria-label="portfolio link"><img src={Logo}></img></a></li>
          <li><a href="https://www.linkedin.com/in/megan-wade-909129124/" target="_blank" rel="noopener noreferrer" aria-label="linkedin link"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
          <li><a href="https://github.com/WadeMegan" target="_blank" rel="noopener noreferrer" aria-label="github link"><i className="fab fa-github fa-2x"></i></a></li>
        </ul>
      </nav>
      <main>
        <SpChart/>
      </main>
      </>
    )
  }
  
}