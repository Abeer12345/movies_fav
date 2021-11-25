import React, { useState } from 'react';
import List_Movies from './List_Movies';
import { v4 as uuidv4 } from 'uuid';

const Home = ({ setMoviesH }) => {
    const [movies, setMovies] = useState([
        {
            id: uuidv4(), title: 'Venom 2',
            descreption: 'Tom Hardy est de retour sur grand écran sous les traits de Venom, l un des personnages les plus complexes de l univers Marvel.',
            trailer: "https://www.youtube.com/embed/rrwBnlYOp4g" ,
            rating: 2,
            url: "https://www.allocine.fr/video/player_gen_cmedia=19593405&cfilm=269758.html",
            imgM: 'https://fr.web.img6.acsta.net/c_310_420/pictures/21/09/01/11/19/0900123.jpg'
        },

        {
            id: uuidv4(), title: '7.Koğuştaki',
            descreption: 'Séparé de sa fille, un père avec un handicap mental doit prouver son innocence lorsqu’il est arrêté pour le meurtre d’une enfant.',
            trailer: "https://www.youtube.com/embed/BWiwQ4oCmZc" ,
            rating: 2,
            url: "https://www.netflix.com/tn-fr/title/81239779",
            imgM: 'https://fr.web.img2.acsta.net/c_310_420/pictures/19/10/08/15/52/1926679.jpg'
        },

        {
            id: uuidv4(), title: 'Red Notice',
            descreption: 'Interpol déclenche une Alerte rouge pour capturer les criminels les plus recherchés au monde. Mais lorsqu un braquage des plus audacieux réunit le meilleur profileur du FBI et deux criminels rivaux, nul ne peut prédire l issue de l opération.',
            trailer: "https://www.youtube.com/embed/Pj0wz7zu3Ms" ,
            rating: 2,
            url: "https://www.netflix.com/tn-fr/title/81161626", 
            imgM: 'https://fr.web.img4.acsta.net/c_310_420/pictures/21/10/21/15/41/2023058.jpg'
        },

        {
            id: uuidv4(),
            title: 'Jumanji 4',
            descreption: 'L aventure Jumanji continue avec un quatrième volet!',
            trailer: "https://www.youtube.com/embed/rAarFWYENeA" ,
            rating: 2,
            url: "https://www.netflix.com/tn-fr/title/80192646", 
            imgM: 'https://fr.web.img2.acsta.net/c_310_420/pictures/21/03/04/09/51/2760299.jpg'
        }
    ])
    setMoviesH(movies)
    return (
        <div>
            <h1>My favorite movies</h1>
            <div className="divList" >
                <List_Movies movies={movies} />
            </div>


        </div>
    )
}

export default Home
