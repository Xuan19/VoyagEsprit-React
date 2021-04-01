import React from 'react';
import './team.scss';
import xuan from 'src/assets/xuan.jpg'

const Contact = () => (
    <section>
        <div className="containter">
            <h1 className="heading">A propos de moi</h1>
            <div className="card-wrapper">
                <div className="card">
                    <div alt="card background" className="card-img"></div>
                    <img src={xuan} alt="profile image" className="profile-img" />
                    <h1>Xuan Wang</h1>
                    <p className="job-title">Développeuse Fullstack</p>
                    <ul className="social-media">
                        <li><a href="https://github.com/Xuan19"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/xuan-wang-b3180732/"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

);

export default Contact;
