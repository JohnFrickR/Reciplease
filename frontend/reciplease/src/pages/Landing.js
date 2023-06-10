import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (props) =>{
    return(
        <div class="landing_div">
            <img
            className="landing_img"
            src="https://images.unsplash.com/photo-1565555178270-2e4b939b06b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            />
            <div className='landing_slogan'>
                <h3 className='slogan'>No blogs, no backstory, just recipes!</h3>
            </div>
            <div>
                <article>
                    <p>
                        I made this in hopes that people can find the recipes they want quickly, or store theirs, without having to read blog after blog. May this make your cooking time shorter, and decisions on what to cook easier.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default Landing;