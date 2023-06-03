import React from 'react'
import { Link } from 'react-router-dom'

const Index = (props) =>{

   
    // this a function for loading the page with information we want
  const loaded = () => {
    return (
      <div className="containerIndex">  
        {props.recipes.map((recipe)=>(
          <div key={recipe._id} className='recipe'>
            <Link to={`/reciplease/${recipe._id}`}>
              <h2>{recipe.name}</h2>
            </Link>
            <h1>{recipe.name}</h1>
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading... </h1> 
  };

  return (props.recipes ? loaded() : loading());
};

export default Index