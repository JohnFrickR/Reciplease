import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const Edit = (props) => {
    
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id

    const recipes = props.recipes

    const recipe = recipes.find((r) => r._id === id);

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

            
            <form onSubmit={handleSubmit}>
            <div className="columnEdit">
            <h1 className="editTitle">Edit {recipe.name} recipe?</h1>
                    <label className="editLabel editName">Name: </label><br/>
                    <input className="editLabel editEntry"
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name of Dish"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel editName">Ingredients: </label><br/>
                    <textarea 
                    className="editLabel editEntry"
                    type="text"
                    value={editForm.ingredients}
                    name="ingredients"
                    ingredients="ingredients"
                    placeholder="List your ingredients here"
                    onChange={handleChange}
                    /><br/>
                    {/* <input className="editLabel"
                    type="text"
                    value={editForm.ingredients}
                    name="ingredients"
                    ingredients="ingredients"
                    placeholder="List your ingredients here"
                    onChange={handleChange}
                    /> */}

                    <label className="editLabel editName">Category: </label><br/>
                    <input className="editLabel editEntry"
                    type="text"
                    value={editForm.category}
                    name="category"
                    category="category"
                    placeholder="Main dish, side dish, dessert, etc"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel editName">Description: </label><br/>
                    <textarea 
                    className="editLabel editEntry"
                    type="text"
                    value={editForm.description}
                    name="description"
                    description="description"
                    placeholder="Brief description of the dish"
                    onChange={handleChange}
                    /><br/>
                    {/* <input className="editLabel"
                    type="text"
                    value={editForm.description}
                    name="description"
                    description="description"
                    placeholder="Brief description of the dish"
                    onChange={handleChange}
                    /> */}

                    <label className="editLabel editName">Rating: </label><br/>
                    <input className="editLabel editEntry"
                    type="number"
                    value={editForm.rating}
                    name="rating"
                    rating="rating"
                    placeholder="Rate it from 1-5"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel editName">Difficulty: </label><br/>
                    <select className="editLabel editEntry"
                    value={editForm.tags}
                    name="tags"
                    onChange={handleChange}
                    
                    ><br/>
                    <option value="">Select a tag</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Amatuer">Amatuer</option>
                    <option value="Expert">Expert</option>
                    </select><br/>

                    <label className="editLabel editName">Directions: </label><br/>
                    <textarea 
                    className="editLabel editEntry"
                    type="text"
                    value={editForm.directions}
                    name="directions"
                    directions="directions"
                    placeholder="i.e 1. Slice tomatoes, 2. roast tomatoes..."
                    onChange={handleChange}
                    /><br/>
                    {/* <input className="editLabel"
                    type="text"
                    value={editForm.directions}
                    name="directions"
                    directions="directions"
                    placeholder="i.e 1. Slice tomatoes, 2. roast tomatoes..."
                    onChange={handleChange}
                    /> */}

                    <label className="editLabel editName">Servings: </label><br/>
                    <input className="editLabel editEntry"
                    type="number"
                    value={editForm.servings}
                    name="servings"
                    servings="servings"
                    placeholder="Enter the amount of servings this makes (i.e 2)"
                    onChange={handleChange}
                    
                    /><br/>

                    <label className="editLabel editName">Image: </label><br/>
                    <input className="editLabel editEntry"
                    type="text"
                    value={editForm.img}
                    name="img"
                    img="img"
                    placeholder="image link here"
                    onChange={handleChange}
                    
                    /><br/>
                    <div className="editBtnDiv">
                    <input className="editBtn" type="submit" value="Update Recipe"/>
                    </div>

                    </div>
                    
                </form>
                </div>
                )
}

export default Edit