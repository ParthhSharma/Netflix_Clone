import React, {useState, useEffect} from "react";
import axios from './axios';
import requests from "./requests";
import "./Row.css";
// import Youtube from "react-youtube"
// import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    // const [trailerUrl, settrailerUrl] = useState("");

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(movies);
                // console.table(request.data.results);
                return request;
        }
        fetchData();
        
    }, [fetchUrl]);

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

    return(
        <div className="row">
            {/* title */}
            <p>{title}</p>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id} 
                        // onClick={handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>} */}
        </div>
    );
}

export default Row;