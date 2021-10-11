import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
  id:1,
  name: "rice",
  image: "https://source.unsplash.com/random",
  rating: 5
},
  {
  id:2,
  name: "pizza",
  image: "https://source.unsplash.com/random",
  rating: 4.3
},
  {
  id:3,
  name: "hamburger",
  image: "https://source.unsplash.com/random",
  rating: 4.5
},
  {
  id:4,
  name: "chicken",
  image: "https://source.unsplash.com/random",
  rating : 4.2
},
  {
  id:5,
  name: "tea",
  image: "https://source.unsplash.com/random",
  rating: 6
},
]

function Food ({name, picture, rating}){
  return (<div>
    <h2>I don't like sweet {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name}/>
    </div>)
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return <div>
    {foodILike.map( dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>;
}

export default App;
