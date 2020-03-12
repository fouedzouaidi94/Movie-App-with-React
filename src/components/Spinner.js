import React, { Component } from 'react'
import SpinnerSvg from './SpinnerSvg'
import './Spinner.css'
class Spinner extends Component {
 
  
    render() {
        return (
            <div className="spinner">
            <SpinnerSvg/>
            </div>
        )
    }
 }


export default Spinner