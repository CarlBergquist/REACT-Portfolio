import React from 'react';
import profilepic from '../../assets/me.jpeg';
import "../../styles/about.css"

export default function About() {
    return (
        <div className="m-4">
            <h1 className='m-4 p-4 border-bottom'>About Me</h1>
            <div className=" row justify-content-center">
                <div className="col-lg-3">
                    <img src={profilepic} class="rounded" id="avatar" alt="Avatar" />

                </div>
                <div className="col-lg-8 border1 mt-4">
                    <p>
                        Hi there! I'm from Minneapolis, MN and I am a recent graduate of the University of Minnesota's Coding Bootcamp. I also attended the University of North Dakota where I earned a BBA in Marketing and Entreprenuership. During my time at the University of Minnesota I worked alonside my peer's and developed Full-Stack applications. You will find some of my projects on my porfolio page!
                    </p>
                </div>
            </div>
        </div>
    );
}