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
        const scrollChangeFactor = 0.02;

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
            window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
        };
    }, [imageArray]);


    




    return (
        <div className="header" id="home">
            <div className="banner" >
                <div className="content">
                    <h1 className="WELCOME">WELCOME</h1>
                    <div className="model">
                        <img src="./src/assets/images/1-transformed.png" ref={modelRef} alt="img" />
                    
                    <div className="author">
                        <h2>SAIF SHAIKH</h2>
                        <p>WEB DEVELOPER</p>
                        <p>FRONT-END DEVELOPER</p>
                        <p>SOFTWARE DEVELOPER</p>
                        <p>DESIGNER / ARTIST</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
