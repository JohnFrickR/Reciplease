import { Link } from "react-router-dom";


const Header = (props) => {
    const { recipes } = props;

    return (
        <div className="header">
            {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Macondo&display=swap" rel="stylesheet"/> */}
            <div className="headerFlex">
                <div className="title">
                    <h1>Reciplease</h1>
                </div>
                <nav className="navBar">
                    <Link to="/reciplease/landing">
                        <div>
                            <a className="navText about">About</a>
                        </div>
                    </Link>
                    <Link to="/reciplease/create">
                        <div>
                            <a className="navText addRecipe">Add-Recipe</a>
                        </div>
                    </Link>
                    <Link to="/reciplease">
                        <div>
                            <a className="navText recipesLink">Recipes</a>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Header