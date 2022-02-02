import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './cityvenues.css';
import { Spinner, Venues } from '../../utilities';


class CityVenues extends Component{



    state = {
        venues:[],
        header:""
    }

    async componentDidMount(){
        const cityName = this.props.match.params.cityName;
        const url = await axios.get(`${window.apiHost}/venues/city/:${cityName}`)
        console.log(url.data)
        this.setState({
            venues: url.data.venues,
            header: url.data.header
        })
    }


    render(){
        console.log(this.props.match)
        if(!this.state.header){
            return <Spinner />
        }
        return(
            
            <div className="row">
                <Venues venues={this.state.venues} header={this.state.header} />
            </div>
        )
    }
}

export default CityVenues;