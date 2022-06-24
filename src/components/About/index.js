import React from 'react';

function About() {

    return (
        <section id="about" className="about">
            <div className="container">

                <div>
                    <h2>About</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right"> 
                        <img src={require('../../Assets/profile-img.png')} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-right">
                        <p className="fst-italic">
                        “Those who dare to fail miserably can achieve greatly.” -John F. Kennedy
                        </p>
                        <p>
                        Throughout my entire life, I've had a passion for building; manifesting something from the ground up, to the point of success.
                        </p>
                        <p>
                        I am currently pursuing a degree in business management at the University of Houston, but wanted to expand my skillset to meet the demands of today’s market. This desire led me to enroll in a coding program offered by Rice University, during which I developed a broad range of differing applications. Through the combination of these skills and my education, I hope to make myself an asset in the workplace. If you are seeking a diligent and self-motivated addition to your team, look no further - let’s create something great.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;