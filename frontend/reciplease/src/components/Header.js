import { Link } from "react-router-dom";

const Header = (props) =>{
    const {recipes} = props;

    return(
        <div className="header">
            <div className="title">
               <h1>Reciplease</h1> 
                </div>
            <nav className="navBar">
                <Link to="/reciplease/landing">
                <div>About</div> 
                </Link>
            <Link to="/reciplease/create">
                <div>Add Recipe</div>
            </Link>
            <Link to="/reciplease">
                <div>Recipes</div>
            </Link>
            </nav>
        </div>
    )
}

export default Header