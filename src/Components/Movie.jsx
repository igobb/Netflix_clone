import React from "react";
import {logDOM} from "@testing-library/react";

const Movie = ({ title, im }) => (
    <div className="movie">
        <div className="movie-header">
            <img src{...im} alt={title.label} />
        </div>
        <div className="movie-info">
            <h3>{title.label}</h3>
        </div>
    </div>
)

export default Movie;