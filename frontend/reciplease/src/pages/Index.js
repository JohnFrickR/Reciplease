import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Index = (props) => {

  // this a function for loading the page with information we want
  const loaded = () => {
    return (
      <div className="gridContainerIndex containerFlex">
        {props.recipes.map((recipe) => (
          <div key={recipe._id} className='recipe'>
            <Link to={`/reciplease/${recipe._id}`}>
              <h1 className='indexName'>{recipe.name}</h1>
            </Link>
           <img className='indexImg' src={recipe.img} alt={`${recipe.name}`}></img>
            <p className='indexDetails'>
              Rating: {recipe.rating}<br />
              Servings {recipe.servings}<br/>
              <Link to={`/reciplease/${recipe._id}`}>
              <button className='indexLink'>Link to recipe</button>
            </Link>
            </p>
            

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