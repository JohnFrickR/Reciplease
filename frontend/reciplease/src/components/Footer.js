import { Link } from "react-router-dom"


const Footer = (props) => {
 
  return (
    <div className="footer">
        <div>
          <Link to='https://www.linkedin.com/in/john-r-frick/'>
         <div>My-linkedin</div>
            </Link>
            <h5 className="footer_title">Reciplease</h5>
        </div>  
    </div>
  );
};

export default Footer;