import React from "react";
import "./About.css"; // Import the CSS file for the About page

export default function About() {
    return (
        <div className="about">
            <header>
                <h1 className="header">About Us</h1>
            </header>
    
            <main>
                <div className="goal-div">
                    <div className="imgs">
                        <h2>Our Goals</h2> 
                        <img src="/images/download.jpeg" alt="School Goals" />
                    </div>
                    <div className="prag">
                    <p>
            Our primary goal is to provide a seamless and enjoyable shopping experience where every customer can find what they need and feel satisfied with their purchase.
        </p>
                    </div>
                </div>
    
                <div className="goal-div">
                    <div className="imgs">
                        <h2>Our Visions & Mission </h2>
                        <img src="/images/6249f9760013f780a12a614d_vision mission.jpg" alt="School Mission" />
                    </div>
                    <div className="prag">
                    <p>
            Our vision is to revolutionize online shopping by offering innovative solutions, personalized recommendations, and exceptional customer service.
        </p>
        <p>
            Our mission is to provide a diverse range of high-quality products, delivered efficiently, and to create a community of loyal customers built on trust and satisfaction.
        </p>
                    </div>
                </div>
                <header>
                <h1 className="header">Contact Us</h1>
            </header>
                <div className="goal-div">
                    <div className="imgs">
                        <div className="contact-div">
                            <form id="contact-form">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                                
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                                
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                                
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="prag">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.09654862758!2d29.260812074657558!3d-1.683311436188264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd051a6148ed75%3A0xbba68ec53626a400!2sCollege%20Baptiste%20Gacuba%20II!5e0!3m2!1sen!2srw!4v1709226898574!5m2!1sen!2srw" width="100%" height="350px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </main>
        </div>
    );
}
