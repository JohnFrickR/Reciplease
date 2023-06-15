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

                <div className="recipeDetails">
                    
                    <div className="recipeDirections">
                    <article>{recipe.directions}</article>
                    </div>

                    <section>
                        <article>
                            <p>{recipe.category}</p>
                            <p>{recipe.ingredients}</p>
                            <p>{recipe.description}</p>
                            <p>{recipe.rating}</p>
                            <p>{recipe.tags}</p>
                            <p>{recipe.servings}</p>
                        </article>
                    </section>
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

