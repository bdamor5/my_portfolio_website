import React from 'react'
import './footer.css'
import logo from './logo.PNG'
import resume from './BhaveshResume.pdf';

const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer__row">
                <a href="#" className='footer__anchor'>
                    <figure className='footer__logo'>
                        <img src={logo} alt="logo" className='footer__logo--image' />
                    </figure>
                    <span className="footer__logo--popper">
                        Top
                        <i className="fas fa-arrow-up"></i>
                    </span>
                </a>
                <div className="footer__social--list">
                    <a href="https://github.com/bdamor5" target='_blank' className="footer__social--link link__hover-effect link__hover-effect--white">
                        Github
                    </a>

                    <a href="https://www.linkedin.com/in/bhavesh-damor-0000b8128/" target='_blank' className="footer__social--link link__hover-effect link__hover-effect--white">
                        LinkedIn
                    </a>

                    <a href="mailto:bhaveshdamor5555@gmail.com" target='_blank' className="footer__social--link link__hover-effect link__hover-effect--white">
                        Email
                    </a>

                    <a href={resume} donwload target='_blank' className="footer__social--link link__hover-effect link__hover-effect--white">
                        Resume
                    </a>
                </div>
                <div className="footer__copyright">Copyright &copy; 2021 Bhavesh Damor</div>
            </div>
        </footer>
        
        </>
    )
}

export default Footer
