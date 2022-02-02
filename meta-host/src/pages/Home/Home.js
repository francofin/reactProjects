import React, {Component} from 'react';
import SearchBox from './SearchBox';
import {Spinner, Cities, Activities, Venues} from "../../utilities";
import axios from 'axios';
import "./home.css";


class Home extends Component{

    constructor(){
        super();
        this.state ={
            cities:[],
            euroCities: {},
            asiaCities:{},
            usCities:{},
            exoticCities:{},
            activities:[],
            recVenues: {}
        }
    }

    async componentDidMount(){
        // const recommendedCitiesUrl = await axios.get(`${window.apiHost}/cities/recommended`);
        const recommendedCitiesUrl = `${window.apiHost}/cities/recommended`;
        const euroCitiesUrl = `${window.apiHost}/cities/europe`;
        const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
        const usCitiesUrl = `${window.apiHost}/cities/us`;
        const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;
        
        const citiesPromise = [];
        citiesPromise.push(axios.get(recommendedCitiesUrl));
        citiesPromise.push(axios.get(euroCitiesUrl));
        citiesPromise.push(axios.get(asiaCitiesUrl));
        citiesPromise.push(axios.get(usCitiesUrl));
        citiesPromise.push(axios.get(exoticCitiesUrl));

        // console.log(citiesPromise)

        Promise.all(citiesPromise).then((data) => {
            
            const recCities = data[0].data;
            const euroCities = data[1].data;
            const asiaCities = data[2].data;
            const usCities = data[3].data;
            const exoticCities = data[4].data;
            console.log(exoticCities);
            this.setState({
                cities:recCities,
                euroCities:euroCities, 
                asiaCities:asiaCities,
                usCities:usCities,
                exoticCities:exoticCities,
            });
        })

        const activitiesUrl = `${window.apiHost}/activities/today`;
        const activities = axios.get(activitiesUrl);
        this.setState({
            activities:(await activities).data,
        });

        const recVenuesUrl = `${window.apiHost}/venues/recommended`;
        const venues = await axios(recVenuesUrl);
        this.setState({
            recVenues: venues.data,
        })
        
    }

    render(){
        if((this.state.cities.length === 0) || (!this.state.recVenues.venues)){
            return <Spinner />
        }

        
        return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <SearchBox history={this.props.history}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid lower-fold'>
                <div className='row'>
                    <div className='col s12'>
                        <Cities cities={this.state.cities} header="Recommended Cities for You"/>
                    </div>
                    <div className='col s12'>
                        <Activities activities={this.state.activities} header="Todays Activites"/>
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.euroCities.cities} header={this.state.euroCities.header}/>
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header}/>
                    </div>
                    <div className="col s12">
                        <Venues venues={this.state.recVenues.venues} header={this.state.recVenues.header} />
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.usCities.cities} header={this.state.usCities.header}/>
                    </div>
                    <div className='col s12'>
                        <Cities cities={this.state.exoticCities.cities} header={this.state.exoticCities.header}/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Home;