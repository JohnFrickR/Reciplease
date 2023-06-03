import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const Edit = (props) => {
    
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id

    const recipes = props.recipes
    console.log(recipes)

    const recipe = recipes.find((r) => r._id === id);

    console.log(id)
    console.log(recipe)

    // we will need to set state here for our form
    const [editForm, setEditForm]= useState(recipe)
    console.log("Edit form", editForm)

    const handleChange = (event) => {
        event.preventDefault()
        // whatever gets changed, we change it to event.target.value
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    // We will need to use the handlesubmit again
    const handleSubmit = (event) => {
        event.preventDefault() 
        props.updateRecipe(editForm, recipe._id)
        // redirect people back to a page we want them to be at
        navigate(`/reciplease/${recipe._id}`);
    }

    return(
        <div className="editForm">
            <h1 className="editTitle">Edit {recipe.name} recipe?</h1>
                <form onSubmit={handleSubmit}>

                    <label className="editLabel">Name: </label><br/>
                    <input className="editLabel"
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name of Dish"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel">Ingredients: </label><br/>
                    <input
                    type="text"
                    value={editForm.ingredients}
                    name="ingredients"
                    ingredients="ingredients"
                    placeholder="List your ingredients here"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel">Category: </label><br/>
                    <input
                    type="text"
                    value={editForm.category}
                    name="category"
                    category="category"
                    placeholder="Main dish, side dish, dessert, etc"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel">Description: </label><br/>
                    <input
                    type="text"
                    value={editForm.description}
                    name="description"
                    description="description"
                    placeholder="Brief description of the dish"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel">Rating: </label><br/>
                    <input
                    type="number"
                    value={editForm.rating}
                    name="rating"
                    rating="rating"
                    placeholder="Rate it from 1-5"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel">Difficulty: </label><br/>
                    <select
                    value={editForm.tags}
                    name="tags"
                    onChange={handleChange}
                    
                    ><br/>
                    <option value="">Select a tag</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Amatuer">Amatuer</option>
                    <option value="Expert">Expert</option>
                    </select><br/>

                    <label className="editLabel">Directions: </label><br/>
                    <input
                    type="text"
                    value={editForm.directions}
                    name="directions"
                    directions="directions"
                    placeholder="i.e 1. Slice tomatoes, 2. roast tomatoes..."
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel">Servings: </label><br/>
                    <input
                    type="number"
                    value={editForm.servings}
                    name="servings"
                    servings="servings"
                    placeholder="Enter the amount of servings this makes (i.e 2)"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel">Image: </label><br/>
                    <input
                    type="text"
                    value={editForm.img}
                    name="img"
                    img="img"
                    placeholder="image link here"
                    onChange={handleChange}
                    
                    /><br/>

                    <input className="editBtn" type="submit" value="Update Recipe"/>

                </form>
                </div>
                )
}

export default Edit