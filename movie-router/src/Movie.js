import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

class Movie extends Component {
    constructor(){
        super();
        this.state ={
            movie:{}
        }
    }

    componentDidMount(){
        const moviePath = 'https://api.themoviedb.org/3/movie/';
        const movieParam = this.props.match.params.movieId;
        const movieDetailPath = `${moviePath}${movieParam}?api_key=${apiKey}`;
        axios.get(movieDetailPath).then((res) => {
            console.log(res.data)
            this.setState({
                movie: res.data
            })
        })
    }

    render(){
        if(this.state.movie.title === undefined){
            return (<h1>Loading...</h1>)
        }
        const movie = this.state.movie;
        const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
        return(
            <div>
                <img src={imageUrl} />
                <p>{movie.title}</p>
                <p>Budget: {movie.budget}</p>
                <p>Tagline: {movie.tagline}</p>
                <p>Overview: {movie.overview}</p>
            </div>
        )
    }
}
export default Movie