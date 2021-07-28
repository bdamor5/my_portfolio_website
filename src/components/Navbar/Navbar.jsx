import React from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
                <nav>
                   <div className="personal__logo">Bhavesh Damor</div> 
                    <ul className="nav__link--list">
                        <li className='nav__link'>
                            <a href="#languages" className="nav__link--anchor link__hover-effect link__hover-effect--black">Languages</a>
                        </li>
                        <li className='nav__link'>
                            <a href="#projects" className="nav__link--anchor link__hover-effect link__hover-effect--black">Projects</a>
                        </li>
                        <li>
                            <a href="mailto:bhaveshdamor5555@gmail.com" className="nav__link--anchor nav__link--anchor-primary">Contact</a>
                        </li>
                    </ul>                
                </nav>
        </div>
    )
}

export default Navbar
