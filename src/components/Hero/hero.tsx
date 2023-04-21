import React from 'react';
import "./hero.scss";
import heroImg from "./../../assets/img/i'm.svg"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--text">
                        <h3 className="text-amber-50 text-2xl">Hello</h3>
                        <h1 className="text-amber-50 text-5xl">I'm Jumashev <br/> Eldar</h1>
                        <p className="text text-amber-50">I've been doing web design, front-end development <br/>
                            for a year now. Do you need a website design, <br/>
                            site layout, or maybe a turnkey website?
                            Then contact me
                        </p>
                        <button className="text-xl px-10 mt-3 py-2 bg-black text-amber-50 rounded-3x ">Contact Me</button>
                    </div>
                    <datalist>
                        <option value="bmw"/>
                        <option value="bmw"/>
                        <option value="bmw"/>
                        <option value="bmw"/>
                        <option value="bmw"/>
                    </datalist>
                    <div className="hero--imgages">
                        <img src={heroImg} alt="img"/>
                        <div className="hero--images__circle">
                            <div className="hero--images__circle--icons">
                                <div className="hero--images__circle--icons__ts">TS</div>
                                <div className="hero--images__circle--icons__ui">UI</div>
                                <div className="hero--images__circle--icons__vue">V</div>
                                <div className="hero--images__circle--icons__js">JS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;