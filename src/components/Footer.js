import React from 'react';
import linkedIn from '../assets/iconmonstr-linkedin-3-48.png'
import github from '../assets/iconmonstr-github-1-48.png'
import '../styles/footer.css'

function Footer() {
    return (
        <div className="container">
            <div className="row ">
                <div id="test" >
                    <footer className="m-auto border-top border-dark p-3">
                        <a className="m-5" href="https://www.linkedin.com/in/carl-bergquist-a62b04215/">
                            <img src={linkedIn} alt="LinkedIn" />
                        </a>
                        <a className="m-5"href="https://github.com/CarlBergquist"><
                            img src={github} alt="GitHub" />
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer;