import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Create from '../pages/Create';
import Index from '../pages/Index';
import Landing from '../pages/Landing';

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

    useEffect(()=> {
      getRecipes()
    }, [])
  
    return (
      <main>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/reciplease" element={<Index recipes={recipes} />}/>
          <Route path="/reciplease/create" element={<Create recipes={recipes} createRecipe={createRecipe}/>}/>
        </Routes>
      </main>
    );
  };



  export default Main;
  