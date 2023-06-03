import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Index from '../pages/Index';

const Main = (props) => {

    const [recipes, setRecipes] = useState(null);

    const URL = process.env.REACT_APP_BACKEND_URL
  
    const getRecipes = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setRecipes(data.data)
    }
    useEffect(()=> {
      getRecipes()
    }, [])
  
    return (
      <main>
        <Routes>
          <Route path="/reciplease" element={<Index recipes={recipes} />}/>
        </Routes>
      </main>
    );
  };



  export default Main;
  