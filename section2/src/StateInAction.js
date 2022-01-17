import React, {Component} from "react";


class StateInAction extends Component{
    constructor(){
        super();
        this.state = {
            text:"State in Action",

        }
        setTimeout(()=>{
            this.setState({
                text:"State has been updated."
            })
        }, 2000)
    }
    
    render(){
        return(
            <p>{this.state.text} - {this.props.name}</p>
        )
    }
}

export default StateInAction;