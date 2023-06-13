import { useParams, useNavigate } from "react-router-dom";


const Show = (props) => {
    // using params to store data, like id, and using navigate to let us navigate to other pages when the user clicks the link
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;
    const recipes = props.recipes;
    const recipe = recipes.find((r) => r._id === id);

    // e stands for event and this is a function we will use when the user clicks on the edit link on the show page
    const editLink = (e) => {
        navigate(`/reciplease/edit/${recipe._id}`)
    }
    const removeRecipe = (e) =>{
        e.preventDefault()
        props.deleteRecipe(recipe._id)
        navigate("/reciplease")
    }

return (
    <div className="showContainer">
       
        <div className="">
            <h1 className="recipeName">{recipe.name}</h1><br/>
            
            <img className="recipeImg" src={`${recipe.img}`} alt="Work Please" />
            
        </div>
        <div className="recipeDetails">
                <h3>Details</h3>
                <section>
                <p>{recipe.category}</p>
                <p>{recipe.ingredients}</p>
                <p>{recipe.description}</p>
                <p>{recipe.rating}</p>
                <p>{recipe.tags}</p>
                <p>{recipe.servings}</p>
                </section>
        </div>
        <div className="recipeDirections">
            <article>{recipe.directions}</article>
        </div>
        <footer>
        <button onClick={editLink}>Edit</button>
        <button onClick={removeRecipe}>Delete</button>
        </footer>
    </div>
)
    
}

export default Show

