import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = (props) =>{
    const navigate = useNavigate();

    // we need to use State to hold our Form Data, which will be pushed to our mongoDb
    const [Form, setForm] = useState({
        name: "",
        ingredients: [""],
        category: "",
        description: "",
        rating: "",
        tags: [""],
        directions: [""],
        servings: "",
        img: ""
    })

    // handleChange function for form
  const handleChange = (event) => {
    setForm({ ...Form, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createRecipe(Form);
    setForm({
        name: "",
        ingredients: [""],
        category: "",
        description: "",
        rating: "",
        tags: [""],
        directions: [""],
        servings: "",
        img: ""
    });
    navigate("/reciplease");
  };

  return (
    <section className="createRecipe">
        <div className="createForm">
            <h1 className="createTitle">Add a Recipe!</h1>
                <form onSubmit={handleSubmit}>

                    <label className="createLabel createName">Name: </label><br/>
                    <input className="createLabel"
                    type="text"
                    value={Form.name}
                    name="name"
                    placeholder="Name of Dish"
                    onChange={handleChange}
                    required
                    /><br/>

                    <label className="createLabel createName">Ingredients: </label><br/>
                    <textarea 
                    className="createLabel"
                    type="text"
                    value={Form.ingredients}
                    name="ingredients"
                    ingredients="ingredients"
                    placeholder="List your ingredients here"
                    onChange={handleChange}
                    required
                    /><br/> 
                    {/* <input className="createLabel"
                    type="text"
                    value={Form.ingredients}
                    name="ingredients"
                    ingredients="ingredients"
                    placeholder="List your ingredients here"
                    onChange={handleChange}
                    required
                    />*/}

                    <label className="createLabel createName">Category: </label><br/>
                    <input className="createLabel"
                    type="text"
                    value={Form.category}
                    name="category"
                    category="category"
                    placeholder="Main dish, side dish, dessert, etc"
                    onChange={handleChange}
                    required
                    /><br/>

                    <label className="createLabel createName">Description: </label><br/>
                    <textarea
                    className="createLabel"
                    type="text"
                    value={Form.description}
                    name="description"
                    description="description"
                    placeholder="Brief description of the dish"
                    onChange={handleChange}
                    required
                    /><br/>
                    {/* <input className="createLabel"
                    type="text"
                    value={Form.description}
                    name="description"
                    description="description"
                    placeholder="Brief description of the dish"
                    onChange={handleChange}
                    required
                    /> */}
                    

                    <label className="createLabel createName">Rating: </label><br/>
                    <input className="createLabel"
                    type="number"
                    value={Form.rating}
                    name="rating"
                    rating="rating"
                    placeholder="Rate it from 1-5"
                    onChange={handleChange}
                    required
                    /><br/>

                    <label className="createLabel createName">Difficulty: </label><br/>
                    <select className="createLabel"
                    value={Form.tags}
                    name="tags"
                    onChange={handleChange}
                    required
                    ><br/>
                    <option value="">Select a tag</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Amatuer">Amatuer</option>
                    <option value="Expert">Expert</option>
                    </select><br/>

                    <label className="createLabel createName">Directions: </label><br/>
                    <textarea 
                    className="createLabel"
                    type="text"
                    value={Form.directions}
                    name="directions"
                    directions="directions"
                    placeholder="1. Slice tomatoes, 2. roast tomatoes..."
                    onChange={handleChange}
                    required
                    />
                    {/* My old input form is below in case I want to change how I had it set up */}
                    {/* <input className="createLabel"
                    type="text"
                    value={Form.directions}
                    name="directions"
                    directions="directions"
                    placeholder="1. Slice tomatoes, 2. roast tomatoes..."
                    onChange={handleChange}
                    required
                    /> */}
                    <br/>

                    <label className="createLabel createName">Servings: </label><br/>
                    <input className="createLabel"
                    type="number"
                    value={Form.servings}
                    name="servings"
                    servings="servings"
                    placeholder="Amount of servings"
                    onChange={handleChange}
                    required
                    /><br/>

                    <label className="createLabel createName">Image: </label><br/>
                    <input className="createLabel"
                    type="text"
                    value={Form.img}
                    name="img"
                    img="img"
                    placeholder="image link here"
                    onChange={handleChange}
                    required
                    /><br/>

                   <input className="createBtn" type="submit" value="Create Recipe"/> 

                </form>
        </div>
    </section>
  )
}

export default Create