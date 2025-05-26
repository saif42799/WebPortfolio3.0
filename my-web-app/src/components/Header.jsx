import React, { useEffect, useRef } from 'react';

function Header() {
    const imageArray = [
        './src/assets/images/1-transformed.png',
        './src/assets/images/2-transformed.png',
        './src/assets/images/3-transformed.png',
        './src/assets/images/4-transformed.png',
        './src/assets/images/5-transformed.png',
        './src/assets/images/6-transformed.png',
        './src/assets/images/7-transformed.png'
    ];

    const modelRef = useRef(null);

    useEffect(() => {
        const scrollChangeFactor = 0.004;

        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollPercent = scrollPosition / scrollableHeight;
            const imageIndex = Math.floor(scrollPercent / scrollChangeFactor) % imageArray.length;

            if (modelRef.current) {
                modelRef.current.src = imageArray[imageIndex];
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, [imageArray]);


    return (
        <div className="header" id="home">
            <div className="banner" >
                <div className="content">
                    <div className='textChanger'>
                        <div className='diffLangContainer'>
                            <span className='diffWelcome'>WELCOME</span>
                            <span className='diffWelcome'>Yōkoso</span>
                            <span className='diffWelcome'>Bienvenue</span>
                            <span className='diffWelcome'>Välkommen</span>
                            <span className='diffWelcome'>欢迎</span>
                        </div>
                    </div>
                    <div className="model">
                        <img src="./src/assets/images/1-transformed.png" ref={modelRef} alt="img" />

                        <div className="author">
                            <h2>SAIF SHAIKH</h2>
                            <p>WEB DEVELOPER</p>
                            <p>FRONT-END DEVELOPER</p>
                            <p>SOFTWARE DEVELOPER</p>
                            <p>DESIGNER / ARTIST</p>
                        </div>

                        <ul className='socialLinks'>
                            <li>
                                <a href="https://www.linkedin.com/in/-saif-shaikh/" target="_blank">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/saif42799" target="_blank">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://drive.google.com/file/d/18yBe35NGoetcDh6veYGvHAuB2mmblX4F/view?usp=sharing" target="_blank">
                                    <i class="fa-solid fa-file"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://truehero101.artstation.com/" target="_blank">
                                    <i class="fa-brands fa-artstation"></i>
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
