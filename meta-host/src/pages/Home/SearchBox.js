import React, {Component} from 'react';
import "./SearchBox.css";


class SearchBox extends Component{

    constructor(){
        super();

        this.state={
            where: "",
            checkIn:"",
            checkOut:"",
            guests:0,
        }

    }

    changeWhere = (event) => {
        console.log(event.target.value);
        this.setState({
            where:event.target.value
        });
    }

    changeCheckIn = (event) => {
        this.setState({
            checkIn:event.target.value
        });
    }

    changeCheckOut = (event) => {
        this.setState({
            checkOut:event.target.value
        });
    }

    changeGuests = (event) => {
        this.setState({
            guests:event.target.value
        });
    }

    render(){
        return(
            <div className="home-search-box col m4">
                <h1>
                    Where In the Metaverse Would You Like to Go
                </h1>
                <form className='search-box-form'>
                    <div className="col m12">
                        <div className="form-label">Where</div>
                        <div className="input-field" id="where">
                            <input onChange={this.changeWhere} type="text" placeholder="choose location" value={this.state.where}/>
                        </div>
                    </div>
                    <div className="col m6">
                        <div className="form-label">Check In</div>
                        <div className="input-field" id="where">
                            <input onChange={this.changeCheckIn} type="date" placeholder='date' value={this.state.checkIn}/>
                        </div>
                    </div>
                    <div className="col m6">
                        <div className="form-label">Check Out</div>
                        <div className="input-field" id="where">
                            <input onChange={this.changeCheckOut} type="date" placeholder='date' value={this.state.checkOut}/>
                        </div>
                    </div>
                    <div className="col m12">
                        <div className="form-label">Number of Guests</div>
                        <div className="input-field" id="where">
                            <input onChange={this.changeGuests} type="number" placeholder="how many people" value={this.state.guests}/>
                        </div>
                    </div>
                    <div className="col m12 submit-btn">
                        <div className="input-field" id="submit-btn">
                            <input className="btn-large waves-effect waves-light red accent-2" type="submit"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBox;