import React from "react";

export default function Project() {


    return (
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="col-4 btn btn-dark text-primary">
                    <a href="https://infinite-island-60175.herokuapp.com/" target="_blank" rel="noreferrer" className="text-decoration-none">
                        <h3>Rapid-E</h3>
                        <h6>FullStack Web Application</h6>
                    </a>
                </div>

                <div className="col-4 btn btn-dark text-primary">
                    <a href="https://cooper2016.github.io/Fetch/" target="_blank" rel="noreferrer" className="text-decoration-none">
                        <h3>Fetch</h3>
                        <h6>FrontEnd Web Application / API (api key has been disabled for the google maps portion)</h6>
                    </a>
                </div>
            </div>
            <br></br>
            <div className="row  d-flex justify-content-around">
                <div className="col-4 btn btn-dark text-primary">
                    <a href="https://cryptic-ravine-84688.herokuapp.com/" target="_blank" rel="noreferrer" className="text-decoration-none">
                        <h3>J.A.T.E</h3>
                        <h6>FullStack Web Application / PWA</h6>
                    </a>
                </div>
                <div className="col-4  btn btn-dark text-primary">
                <a href="https://secure-reaches-63798.herokuapp.com/" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <h3>Note Taker</h3>
                    <h6>FullStack Web Application / MySQL</h6>
                    </a>
                </div>
            </div>
            <br></br>
            <div className="row  d-flex justify-content-around">
                <div className="col-4 btn btn-dark text-primary">
                <a href="https://carlbergquist.github.io/Password-Gen/" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <h3>Password Generator</h3>
                    <h6>Frontend Web Application</h6>
                    </a>
                </div>
                <div className="col-4 btn btn-dark text-primary">
                <a href="https://carlbergquist.github.io/Weekly-Planner/" target="_blank" rel="noreferrer" className="text-decoration-none">
                    <h3>Weekly Planner</h3>
                    <h6>FrontEnd Web Application</h6>
                    </a>
                </div>
            </div>
        </div>
    );
}