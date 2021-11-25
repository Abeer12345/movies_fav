import React, { useState } from 'react'
import '../src/style.css'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating';
import { Link } from 'react-router-dom';



const List_Movies = ({ movies }) => {
  //console.log(movies)
  return (
    <div className='carsList'>
      {movies.map((mv, i) => (
        <Card className='card'>
          <Card.Img variant="top" src={mv.imgM} className='imgCard' />
          <Card.Body className="cadrBody">
            <Card.Title>{mv.title.toUpperCase()}</Card.Title>
            <Card.Text>
              <Link to={`/movie_details/${mv.id}`}>View more</Link>
            </Card.Text>
            <Rating stars={mv.rating} />
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default List_Movies
