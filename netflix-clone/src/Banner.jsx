import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from "./requests";
import "./Banner.css";


function Banner() {
    const [movie, setmovie] = useState([]);
    // const [trailerUrl, settrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            return request;
        }
        fetchData();
    }, []);
    // console.log(movie);
    function truncate(str, n) {
        return str?.length>n ? str.substr(0, n-1) + "...": str;
    }

    // const opts={
    //     height: "390",
    //     width: "100%",
    //     playerVars: {
    //         //https://developers.google.com/youtube/player_parameters
    //         autoplay: 1
    //     },
    // }
    // const handleClick = (movie) => {
    //     if(trailerUrl){
    //         settrailerUrl('');
    //     }else{
    //         movieTrailer(movie?.name || "")
    //         .then(url=>{
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             settrailerUrl(urlParams.get("v"));
    //         }).catch((error) => console.log(error));
    //     }
    // }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            // backgroundHeight: "900px",
            objectFit: "contain"
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title"> 
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
