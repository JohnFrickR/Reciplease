import { Link } from "react-router-dom"


const Footer = (props) => {

    return (
        <div className="footer">
            <div className="footerFlex">
                <div className="footerTitle">
                    <h5>Reciplease</h5>
                </div>
                {/* <div className="note">
                            <p>You can reach me on linkedin!</p>
                        </div> */}
                <nav className="navBar">
                    <Link to='https://www.linkedin.com/in/john-r-frick/'>
                        <div>
                            <a className="navText linkedin">My-linkedin</a>
                        </div>
                    </Link>
                </nav>
                        
            </div>
        </div>
    );
};

export default Footer;