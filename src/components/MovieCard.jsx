import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
const { id, title, author, abstract, image } = movie;
return (
    <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
            <div
            className="card-image-top">
                <img src={image} className="img-fluid" alt="movie" /> 
            </div>
            <div className="card-body">
                <h3 className="text-danger">{title}</h3>
                <h4>
                <em>{author}</em>
                </h4>
                <p>{abstract}</p>
                <Link className="btn btn-danger" to={`/movies/${id}`}>
                Leggi tutto
                </Link>
            </div>
        </div>
    </div>
    );
};
export default MovieCard;