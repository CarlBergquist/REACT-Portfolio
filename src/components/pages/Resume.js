import React from 'react';
import resume from '../../assets/Carl_Bergquist_Resume_2.pdf'
export default function Resume() {
  return (
    <div className="container mt-4">
      <h1 className="border-bottom">Resume</h1>
      <h3 className="mt-4">Proficiencies</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>RESTFUL API's</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>PWA's</li>
        <li>MongoDB</li>
        <li>MERN Stack</li>
      </ul>
      <a href={resume} download="Carl_Bergquist_Resume" target="_blank" rel="noreferrer">
        <button className="btn btn-dark text-primary">Download My Resume</button>
      </a>
    </div>
  );
}
