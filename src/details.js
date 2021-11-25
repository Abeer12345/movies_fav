import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import Rating from './Rating';
import { Navigate,useNavigate } from 'react-router-dom';

const Details = ({ movies }) => {
    const parms = useParams()
    const navigate = useNavigate();

    console.log('TEEST', movies)
    const movie = movies.find(el => parms.id === el.id)
    console.log("movie", movie)
    return (
        <      div>
            <button className='btn_back'  onClick={() => navigate(-1)}> Go Back</button>
            <div className="card_movie">
                <div className="div_iframe">
                    <iframe width="560" height="315"
                        src={movie.trailer}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="div_info">
                    <div className="div_title">  <h2>{movie.title}</h2> </div>
                    <div className="div_rating">  <Rating stars={movie.rating} /> </div>
                    <div className="div_desc"> <p>{movie.descreption} </p></div>
                    <div>
                        <a href={movie.url}>
                            <button className="btn_watch">Watch the movie</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>

    )
}




export default Details
