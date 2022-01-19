import React, { Component } from 'react';
import  './temperatureInput.css'

class TemperatureInput extends Component{
    render(){
        const temperature = this.props.temperature
        let style;
        let hotClass;
        if(temperature > 100){
            style = {
                color: "red",
                backgroundColor: "yellow",
                fontSize: 10
            }
            hotClass = 'too-hot'
        }
        return(
            <div className="temp-input">
                <legend className={hotClass}>Enter temperature in {this.props.scale}:</legend>
                <input
                    value={temperature}
                    onChange={(e)=>{this.props.handleChange(e,this.props.scale)}} 
                    onMouseOver={this.props.handleMouseOver}/>
                    
            </div>
        )
    }
}

export default TemperatureInput;