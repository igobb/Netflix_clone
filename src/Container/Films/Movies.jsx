import React, { useState, useEffect } from "react";
import Movie from '../../Components/Movie'
//usunąć AXIOS
import './Movies.scss';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
            .then(res => res.json())
            .then(data => {
                console.log(data.feed.entry)
                setMovies(data.feed.entry)
            });

    }, []);

    return (
        <div className="app__films">
            {movies.length > 0 &&
                movies.map((movie) =>
                <Movie key={movie.id.label} {...movie}/>
            )}
        </div>
    );
};

export default Movies;
