import React, {Component} from "react";


class SimpleEvents extends Component{
    constructor(){
        super();

        this.state ={
            btnTitle: "Click Me",
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleClick(){
        console.log("Clicked")
    }

    handleChange(){
        console.log("User Changed")
    }

    handleSubmit(event){

        console.log("Submit Handled")
        event.preventDefault();
    }

    handleMouseOver(){
        this.setState({
            btnTitle:"Are you sure you want to click me"
        })
        setTimeout(() => {
            this.setState({btnTitle:"It's Fine"})
        }, 1000)
    }

    render(){
        // document.querySelector('.btn').addEventListener('click', ()=> {console.log("Clicked")});
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <button onClick={()=>console.log("Clicked")} className="btn">Click Me</button> */}
                    <button onClick={this.handleClick} onMouseEnter={this.handleMouseOver} className="btn btn-primary">{this.state.btnTitle}</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter Your Information" />
                </form>
            </div>
        )
    }
}

export default SimpleEvents;