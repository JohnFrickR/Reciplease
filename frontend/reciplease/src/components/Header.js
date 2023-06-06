import { Link } from "react-router-dom";

const Header = (props) =>{
    const {recipes} = props;

    return(
        <div className="header">
            <nav className="navBar">
            <Link to="/reciplease/create">
                <div>Create</div>
            </Link>
            <Link to="/reciplease/landing">
                <div>Main</div>
            </Link>
            <Link to="/reciplease">
                <div>Recipes</div>
            </Link>
            </nav>
        </div>
    )
}

export default Header