import React from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const AboutMeView = () => {
    return (
        
            <Container>
                <h1>ABOUT ME</h1>
            <div className='about-text'>
               <p>This project has been developed by myself, Juandi Mena,
                   as part of the final project of the Full Stack Developer Bootcamp
                   through the renowned Ironhack tech international school.
                   <br/>
                   For the development of this e-commerce, the tools used have been all those
                   that I have learned throughout the course.
                    The whole project is developed with MERN (MongoDB | ExpressJS | ReactJS | NodeJS)
                    combined with React-Redux and React-Bootstrap.
               </p>
               <h2>CONTACT DETAILS</h2>
               <i className='fas fa-envelope'></i> juandimena34@gmail.com
               <br/>
               <i class="mt-3 fab fa-github"></i> <a href='https://github.com/JuandiM' alt='my-github'>https://github.com/JuandiM</a>
               <br />
               <i class="mt-3 fab fa-linkedin"></i> <a href='https://www.linkedin.com/in/juandi-mena/' alt='my-linkdin'>https://www.linkedin.com/in/juandi-mena/</a>
               
                   
            </div>
            </Container>
            
            
       
    )
}

export default AboutMeView
