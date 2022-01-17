import React, {Component} from "react";


class EventAndState extends Component{
    constructor(){
        super();

        this.state ={
            btnTitle: "Click Me",
            inputtext:"",
            moreText:"",
            imageWidth:"",
            messages:""
        }
    }

    handleClick = (event) =>{
        console.log("Clicked")
        this.setState({moreText:"This button is cool and react works"})
        if(this.state.inputtext != ""){
            this.setState({inputtext:""})
        }
        setTimeout(() => {
            this.setState({moreText:""})
        }, 1000)
    }

    handleChange = (event) => {
        console.dir(event.target)
        this.setState({inputtext:event.target.value});
        console.log(this.state.inputtext)
    }

    handleSubmit = (event)=>{

        console.log("Submit Handled")
        this.setState({inputtext:"State is Awesome"})
        event.preventDefault();
    }

    handleLoad = (event) => {
        console.dir(event.target)
        if(event.target.width > 100){
            console.log("Large Image")
            this.setState({messages:"Image will be rescaled, It was initially too Large"})
            setTimeout(() =>{
                this.setState({messages:""});
                event.target.width = 200;
            }, 2000)
        }
        
    }

    render(){
        // document.querySelector('.btn').addEventListener('click', ()=> {console.log("Clicked")});
        return(
            <div>
                {}
                <h1>{this.state.moreText}</h1>
                <h3>{this.state.messages}</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* <button onClick={()=>console.log("Clicked")} className="btn">Click Me</button> */}
                    <button onClick={this.handleClick} className="btn btn-success">{this.state.btnTitle}</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter Your Information" />
                </form>
                <div>
                    <p>{this.state.inputtext}</p>
                </div>
                <img onLoad={this.handleLoad} src="https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            </div>
        )
    }
}

export default EventAndState;