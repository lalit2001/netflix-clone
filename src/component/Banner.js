import React from 'react';
import './Banner.css';
import axios from './axios';

import { useState, useEffect } from 'react';
import requests from './request';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



function Banner() {

    const [trailerUrl, setTrailerUrl] = useState("");
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetFlixOriginals)

            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            return request;
        }
        fetchData();
    },[])
    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(() => console.log('Temporary Unavailable'))
        }
    }
    return (
        <>
        <div className='banner' style={
            {
                backgroundSize:'cover',
                backgroundImage: `URL('http://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition:'center center'
            }
        }>
            <div className="banner-container">
                <h1 className='banner-title'>{movie.name}</h1>
                <button className="banner-btn" onClick={()=>handleClick(movie)}>play</button>
                <button className="banner-btn">MyList</button>
                <h2 className="banner-description">{truncate(movie.overview, 150)}</h2>
            </div>  
            <div className="banner-fade"></div>   
                
        </div>
        {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/> }   
        </>
    )
}

export default Banner;
