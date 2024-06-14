import React, { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';

export const SectionOne = ({ showOverlayOne, setShowOverlayOne, showOverlayTwo, setShowOverlayTwo, showOverlayThree, setShowOverlayThree, showOverlayFour, setShowOverlayFour, showOverlayFive, setShowOverlayFive, showOverlaySix, setShowOverlaySix }) => {

    const closeOverlayOne = () => {
        setShowOverlayOne(false);
      };

      const closeOverlayTwo = () => {
        setShowOverlayTwo(false);
      };

      const closeOverlayThree = () => {
        setShowOverlayThree(false);
      };

      const closeOverlayFour = () => {
        setShowOverlayFour(false);
      };

      const closeOverlayFive = () => {
        setShowOverlayFive(false);
      };

      const closeOverlaySix = () => {
        setShowOverlaySix(false);
      };

      const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };

      const closeAllOverlays = () => {
        setShowOverlayOne(false);
        setShowOverlayTwo(false);
        setShowOverlayThree(false);
        setShowOverlayFour(false);
        setShowOverlayFive(false);
        setShowOverlaySix(false);
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeAllOverlays();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    return (
        <section className="section one">
            <div className="navigation">
                <div className="navigation-left" >
                  <h1 className="description black navigation-text" onClick={closeAllOverlays} >Ikaika</h1>
                </div>
                <div className="navigation-right" onClick={closeAllOverlays} />
            </div>

            <CSSTransition
                in={ showOverlayOne }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayOne ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text black" >Entrepreneur, Advisor, Investor </h1>
                        <button className="overlay-close-button" onClick={closeOverlayOne}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="about-content" >
                        <div className="about-content-text" >
                            <h1 className="overlay-description black" >Hello! I’m Oli from London. An LSE alum with a background in Philosophy and Economics, I cut my teeth in startups both as a founder and operator. I later delved into behavioural finance at an award winning global equity fund and then onto venture capital as an early stage investor. Most recently I’ve been working with innovative technology companies as they scale. I love slick UI, both personally and professionally, and am passionate about promoting innovation and improving efficiency. Outside of work, I'm happiest on the water, enjoying good food, and staying active — usually with my dog by my side. </h1>
                        </div>
                        <div className="about-portrait" />
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayTwo }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayTwo ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Thoughts</h1>
                        <button className="overlay-close-button" onClick={closeOverlayTwo}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="seen-in-content" >
                        <h1 className="overlay-description black" >Check out previous interviews, articles and podcasts including:</h1>
                        <div className="seen-in-row" >
                            <div className="about-images" >
                                <img className="about-image" src="./i2.png" />
                                <img className="about-image"  src="./i3.png" />
                                <img className="about-image"  src="./i4.png" />
                                <img className="about-image"  src="./i5.png" />
                                <img className="about-image"  src="./i6.png" />
                                <img className="about-image"  src="./i7.png" />
                            </div>
                            <div className="thoughts-images" >
                                <img className="thought-image" src="./new1.PNG" />
                                <img className="thought-image"  src="./new2.PNG" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayThree }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayThree ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >StartUps</h1>
                        <button className="overlay-close-button" onClick={closeOverlayThree}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="seen-in-content" >
                        <h1 className="overlay-description black" >I’m passionate about supporting emerging and dynamic businesses with operational, financial, and strategic support. I’m particularly excited to work with innovative founders building companies reimagining digital lifestyle. Over the years I’ve worked with global companies, particularly across the US and Europe, both in Web2 and Web3, B2B and B2C. I’ve also invested alongside funds such as:</h1>
                        <div className="seen-in-images" >
                            <div className="top-images">
                                <div className="top-left" >
                                    <img className="seen-in-image" src="./i13.png" />
                                    <img className="seen-in-image" src="./i12.png" />
                                </div>
                                <div className="top-right" >
                                    <img className="seen-in-image" src="./i11.png" />
                                    <img className="seen-in-image" src="./i14.png" />
                                </div>
                            </div>
                            <div className="bottom-images">
                                <div className="bottom-left">
                                    <img className="seen-in-image" src="./i10.png" />
                                    <img className="seen-in-image" src="./i9.png" />
                                </div>
                                <div className="bottom-right">
                                    <img className="seen-in-image" src="./i8.png" />
                                    <img className="seen-in-image" src="./i15.png" />
                                    <img className="seen-in-image" src="./i16.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayFour }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayFour ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Resource Sandbox</h1>
                        <button className="overlay-close-button" onClick={closeOverlayFour}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="resource-content" >
                        <h1 className="overlay-description black" >Some of my favourite reads, listens and references</h1>
                        <div className="resource-icons" >
                                <div onClick={() => handleClick('https://airtable.com/appUhWoyZGKiVYCtP/shrkVnBT65doyM3VH/tbl9vgI7DPcZTEv3D')} className="resource-icon-box" >
                                    <i class="fa-solid fa-book"></i>
                                    <h1 className="overlay-small-description black" >Books</h1>
                                </div>
                                <div onClick={() => handleClick('https://airtable.com/appFNdTZbsjd4Ss8l/shrzoYxNnQ6AkU2gz/tblQTCfybawDbwLpx')} className="resource-icon-box" >
                                    <i class="fa-solid fa-podcast"></i>
                                    <h1 className="overlay-small-description black" >Podcasts</h1>
                                </div>
                                <div onClick={() => handleClick('#investing')} className="resource-icon-box" >
                                    <i class="fa-solid fa-handshake"></i>
                                    <h1 className="overlay-small-description black" >Fundraising</h1>
                                </div>
                                <div onClick={() => handleClick('https://airtable.com/appSHx8Fmrzn2iuNd/shr7JWkrrNd8mn1Xt/tblSlsVIOtPXi7lnF')} className="resource-icon-box" >
                                    <i class="fa-solid fa-gears"></i>
                                    <h1 className="overlay-small-description black" >Operating</h1>
                                </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ showOverlayFive }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlayFive ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Investing</h1>
                        <button className="overlay-close-button" onClick={closeOverlayFive}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="contact-content" id="investing">
                    <h1 className="overlay-description black" >Always happy to support when it comes to fundraising, in the meantime see below for some helpful resources.</h1>
                      
                        <div className="row" >
                            <div onClick={() => handleClick('https://airtable.com/app3wNbep8xWKHBSr/shr7L61SHYf1kYkxC/tbldr9tjcxieLKBet')} className="contact-icon-box" >
                                <i class="fa-solid fa-dollar-sign"></i>
                                <h1 className="overlay-small-description black" >Investor List</h1>
                            </div>
                            <div onClick={() => handleClick('https://airtable.com/appQtoGSjuRZ8VdgA/shrAdCoNWMgN7KHVb/tblhKnDJ1yw5njh10')}  className="contact-icon-box" >
                                <i class="fa-solid fa-hammer"></i>
                                <h1 className="overlay-small-description black" >Data Room and Deck</h1>
                            </div>
                            <div onClick={() => handleClick('https://airtable.com/app0dZlrRhHPLaJmL/shrCfGVTBY7iewrCk/tblaGg70js1xt3Yt3')}  className="contact-icon-box" >
                                <i class="fa-solid fa-wrench"></i>
                                <h1 className="overlay-small-description black" >Other Fundraising Tips and Tricks</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={ showOverlaySix }
                timeout={ 500 }
                classNames="fade"
                unmountOnExit
            >
                <div className={`overlay-div ${showOverlaySix ? "active" : ""}`}>
                    <div className="overlay-navigation" >
                        <h1 className="overlay-navigation-text" >Contact</h1>
                        <button className="overlay-close-button" onClick={closeOverlaySix}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="contact-content" >
                        <div className="row" >
                            <div onClick={() => handleClick('https://www.linkedin.com/in/otjstrong/')} className="contact-icon-box" >
                                <i class="fa-brands fa-linkedin"></i>
                                <h1 className="overlay-small-description black" >LinkedIn</h1>
                            </div>
                            <div onClick={() => handleClick('https://twitter.com/_olistrong')}  className="contact-icon-box" >
                                <i class="fa-brands fa-twitter"></i>
                                <h1 className="overlay-small-description black" >Twitter</h1>
                            </div>
                            <div onClick={() => handleClick('mail:oli@ikaika.co.uk')}  className="contact-icon-box" >
                                <i class="fa-solid fa-envelope"></i>
                                <h1 className="overlay-small-description black" >Email</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>


        </section>
    )
}