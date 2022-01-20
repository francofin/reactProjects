import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

class Home extends Component{
    // console.log(props);
    // props.history.block("Are you sure you want to ")
    // setTimeout(()=>{
    //     // props.history.push("/help");
    //     // props.history.goBack();
    // }, 2000)

    constructor() {
        super();
        this.state ={
            nowPlayingMovies:[],
        }
    }


    componentDidMount(){
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
        axios.get(nowPlayingUrl).then((res) => {
            console.log(res.data);
            const results = res.data.results;
            // const newReleases = [...this.state.nowPlayingMovies]
            this.setState({
                nowPlayingMovies:results
            })
            console.log(results);

        })
    }

    render(){
        const imagesForMovies = 'https://image.tmdb.org/t/p/w400';
        
        const movieGrid = this.state.nowPlayingMovies.map((movie, i) => {
            return(
                <div key={i} className='col s3'>
                    <Link to={`/movie/${movie.id}`}>
                        <img src={`${imagesForMovies}${movie.poster_path}`} /> 
                    </Link> 
                </div>
            )
        })
        return(
            <div className='row'>
                {movieGrid}
            </div>
        )
    }
    
}
export default Home