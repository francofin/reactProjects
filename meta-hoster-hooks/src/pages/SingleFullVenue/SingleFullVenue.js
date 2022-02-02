import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Point from './Point';
import { connect } from 'react-redux'
import openModal from '../../actions/openModal';
import { bindActionCreators } from 'redux';
import Login from '../Login/Login'
// import state from 'sweetalert/typings/modules/state';
import moment from 'moment';
import swal from 'sweetalert';
import loadScript from '../../utilities/helpers/loadScript';


class SingleFullVenue extends Component{

    state = {
        singleVenue: {},
        points: [],
        checkIn: "",
        checkOut: "",
        numberOfGuests: 1,
    }

    async componentDidMount(){
        const vId = this.props.match.params.vid;
        const url = `${window.apiHost}/venue/${vId}`;
        const axiosResponse = await axios.get(url);
        const singleVenue = axiosResponse.data;

        const pointsUrl = `${window.apiHost}/points/get`;
        const pointsAxiosResponse = await axios.get(pointsUrl);
        
        const points = singleVenue.points.split(',').map((point,i)=>{
            return(<Point key={i} pointDesc={pointsAxiosResponse.data} point={point} /> )
        })
        this.setState({singleVenue, points});
    }

        changeCheckIn = (e) => {
            console.log(e.target.value)
            this.setState({
                checkIn: e.target.value
            })
        }

        changeCheckOut = (e) => {
            console.log(e.target.value)
            this.setState({
                checkOut: e.target.value
            })
        }


    reserveNow = async (e) => {
        const startDayMoment = moment(this.state.checkIn)
        const endDayMoment = moment(this.state.checkOut)
        const diffDays = endDayMoment.diff(startDayMoment, 'days')
        if(diffDays < 1){
            //check in date must be before checkout date
            swal({
                title: "Check out date must be after check in date",
                icon: 'error',
            })
        }else if(isNaN(diffDays)){
            //bad date
            swal({
                title: "Please make sure your dates are valid",
                icon: 'error',
            })
        } else{
            const pricePerNight = this.state.singleVenue.pricePerNight;
            const totalPrice = pricePerNight*diffDays;
            const scriptUrl = 'https://js.stripe.com/v3';
            const stripePublicKey = 'pk_test_5198HtPL5CfCPYJ3X8TTrO06ChWxotTw6Sm2el4WkYdrfN5Rh7vEuVguXyPrTezvm3ntblRX8TpjAHeMQfHkEpTA600waD2fMrT';
            // await new Promise((resolve, reject) => {
            //     const script = document.createElement('script');
            //     script.type='text/javascript';
            //     script.src = scriptUrl;
            //     script.onload = () =>{
            //         console.log("resolve running");
            //         resolve();
            //     }
            //     document.getElementsByTagName('head')[0].appendChild(script);
            //     console.log('loaded script tag')
            // })
            await loadScript(scriptUrl);
            const stripe = window.Stripe(stripePublicKey)
            const stripeSessionUrl = `${window.apiHost}/payment/create-session`;
            const data = {
                venueData: this.state.singleVenue,
                totalPrice,
                diffDays, 
                pricePerNight, 
                checkIn:this.state.checkIn,
                checkOut:this.state.checkOut, 
                token: this.props.auth.token, 
                currency:'USD',  
            }

            const sessionVar= await axios.post(stripeSessionUrl, data);
            // console.log(sessionVar.data)

            stripe.redirectToCheckout({
                sessionId: sessionVar.data.id,
            }).then((result) => {
                console.log(result);
            })
        }
    }

    

    render(){
        const sv = this.state.singleVenue;
        return(
            <div className="row single-venue">
                <div className="col s12 center">
                    <img src={sv.imageUrl} />
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location">{sv.location}</div>
                        <div className="title">{sv.title}</div>
                        <div className="guests">{sv.guests}</div>

                        <div className="divider"></div>

                        {this.state.points}

                        <div className="details">{sv.details}</div>
                        <div className="amenities">{sv.amenities}</div>
                    </div>

                    <div className="col s4 right-details">
                        <div className="price-per-day">${sv.pricePerNight} <span>per day</span></div>
                        <div className="rating">{sv.rating}</div>
                        <div className="col s6">
                            Check-In
                            <input type="date"  onChange={this.changeCheckIn} value={this.state.checkIn} />
                        </div>
                        <div className="col s6">
                            Check-Out
                            <input type="date" onChange={this.changeCheckOut} value={this.state.checkOut} />
                        </div>     

                        <div className="col s12">
                            <select className="browser-default" value={this.state.numberOfGuests}>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guest</option>
                                <option value="3">3 Guest</option>
                                <option value="4">4 Guest</option>
                                <option value="5">5 Guest</option>
                                <option value="6">6 Guest</option>
                                <option value="7">7 Guest</option>
                                <option value="8">8 Guest</option>
                            </select>
                        </div>
                        <div className="col s12 center">
                            {this.props.auth.token ?
                                <button onClick={this.reserveNow} className="btn red accent-2">Reserve</button>   
                            : <button onClick={()=>this.props.openModal('open', <Login />)} className="btn red accent-2">You must log in to reserve</button>
                            }
                            
                        </div>         
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        auth:state.auth,
    }
}



function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
    },dispatcher)
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleFullVenue);
