import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (props) =>{
    return(
        <div class="landing_div">
            <img
            className="landing_img"
            src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
            {/* <img
            className="landing_img"
            src="https://images.unsplash.com/photo-1565555178270-2e4b939b06b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            /> */}
            <div className='landing_slogan'>
                <h3 className='slogan'>No blogs, no backstory, just recipes!</h3>
            </div>

            <div className='landingNoteDiv'>
                <article className='landingNote'>
                    <p className='note2'>
                        I made this so people can find the recipes they want quickly, store their own, make your cooking time shorter, or make decisions on what to cook easier. All without having to read blog after blog.
                    </p>
                </article>
            </div>
            <div className='myInfoDiv'>

            <div className='myImgDiv'>
                <h2 className="myName">John Frick</h2>
               <img className='myImg' src="https://media.licdn.com/dms/image/D4E03AQGayj2rKfoJ3g/profile-displayphoto-shrink_800_800/0/1664406791039?e=1692230400&v=beta&t=TjnnAV0YN6VW6xUs6olwqwr_9glehxDtcsNh3XWN41s" alt='John Frick'/>
             </div >

               <div className='contactInfo'>
                    {/* <a>johnfrickr@gmail.com</a><br/> */}
                    <a className='contact_a' href='https://www.linkedin.com/feed/'>Linkedin</a><br/>
                    <a className='contact_b' href='https://github.com/JohnFrickR'>Github</a>
               </div>
            
            </div>

        </div>
    );
};

export default Landing;