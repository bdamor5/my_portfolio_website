import React from 'react'
import './Header.css'
import user from './IMG_2510.jpg'
import hello from './hello.png'
import resume from '../footer/bhavesh resume.doc'

const Header = () => {
    return (
        <div className='flex-1'>
           <div className="about-me__info">
                <div className="about-me__info--container">
                    <figure className='about-me__picture--mask'>
                        <img src={user} alt="picture of me" className='about-me__picture'/>
                    </figure>
                    <h1 className='about-me__info--title'>
                        Hey! I'm <span className='text--purple'> Bhavesh Damor </span> <span className="wave">👋</span> 
                    </h1>
                    <p className='about-me__info--para'>I'm a <strong className='text--purple'>MERN stack developer</strong>  with a strong passion for building responsive & performant web applications with great user experience.</p>
                    <div className="about-me__links">
                        <a href="https://www.linkedin.com/in/bhavesh-damor-0000b8128/" target='_blank' className='about-me__link' title='Linkedin'>
                            <i class="fab fa-linkedin-in" ></i>                
                        </a>

                        <a href="https://github.com/bdamor5" target='_blank' className='about-me__link' title='Github'>
                            <i class="fab fa-github"></i>                
                        </a>

                        <a href="mailto:bhaveshdamor5555@gmail.com" className='about-me__link' target='_blank' title='Email'>
                            <i class="far fa-envelope"></i>                
                        </a>

                        <a href={resume} className='about-me__link' target='_blank' title='My Resume'>
                            <i class="fas fa-file-pdf"></i>                
                        </a>
                    </div>
                </div>
                <figure className="about-me__img--container">
                        <img src={hello} alt="illustration" className='about-me__img'/>
                </figure>                
           </div> 
        </div>
    )
}

export default Header
