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
    const removeRecipe = (e) => {
        e.preventDefault()
        props.deleteRecipe(recipe._id)
        navigate("/reciplease")
    }

    return (
        <div className="showContainer">
            <h1 className="recipeName">{recipe.name}</h1>
            {/* <div className="showNameDiv">
            <h1 className="recipeName">{recipe.name}</h1><br/>
        </div> */}
            <div className="recipeShowDiv">

                <div className="recipeImgDiv">
                    <img className="recipeImg" src={`${recipe.img}`} alt={`${recipe.name}`} />
                </div>

                <div className="recipeDetailsDiv">

                    <div className="recipeDirections element element1">
                        <h3>Ingredients:</h3>
                    <p>{recipe.ingredients}</p>
                        <h3>Instructions:</h3>
                    <p>{recipe.directions}</p>
                    </div>

                        <div className="element">
                            <h3>Category:</h3>
                            <p>{recipe.category}</p>
                            <h3>Description:</h3>
                            <p>{recipe.description}</p>
                            <h3>rating:</h3>
                            <p>{recipe.rating}</p>
                            <h3>Difficulty:</h3>
                            <p>{recipe.tags}</p>
                            <h3>Servings:</h3>
                            <p>{recipe.servings}</p>
                        </div>
                    
                </div>

                
                <div className="showButtonsDiv">
                    <button className="showButtons" onClick={editLink}>Edit</button>
                    <button  className="showButtons"onClick={removeRecipe}>Delete</button>
                </div>
            </div>


        </div>
    )

}

export default Show

