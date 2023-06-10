import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import Index from '../pages/Index';
import Landing from '../pages/Landing';
import Show from '../pages/Show';


const Main = (props) => {

  
    const [recipes, setRecipes] = useState(null);

    const URL = process.env.REACT_APP_BACKEND_URL
    
  
    const getRecipes = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setRecipes(data.data)
    }

    const createRecipe = async (recipe) =>{
      await fetch(URL, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });
      getRecipes();
    };
    
    const updateRecipe = async (recipe, id) => {
      await fetch(URL + id, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipe),
      });
      //update list of recipes when we update the recipe
      getRecipes();
  };

    const deleteRecipe = async (id) => {
      await fetch(URL + id, {
        method: 'DELETE',
      });
      // Update our list of recipes afer we delete a recipe
      getRecipes();
    }

    useEffect(()=> {
      getRecipes()
    }, [])
  
    return (
      <main>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/reciplease" element={<Index recipes={recipes} />}/>
          <Route path="/reciplease/landing" element={<Landing recipes={recipes} />}/>
          <Route path="/reciplease/create" element={<Create recipes={recipes} createRecipe={createRecipe}/>}/>
          <Route path="/reciplease/edit/:id" element={recipes && (<Edit recipes={recipes} updateRecipe={updateRecipe}/>)}/>
          <Route path="/reciplease/:id" element={recipes && (<Show recipes={recipes} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>)}/>
        </Routes>
      </main>
    );
  };



  export default Main;
  