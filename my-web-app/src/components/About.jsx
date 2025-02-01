
function About() {

    return (
        <div className="aboutContainer" id="about">
            <div className="container">
                <div className="summarySection">
                    <h1>HELLO</h1>
                    <p className="aboutMe">Hello! Im a Front-End Developer, Software Engineer, 
                    Artist when I want to be. I love to be creative and make cool shit. I love minimal, 
                    bold designs. To bring them to life is amazing and rewarding in it own manner.   
                    If you want to check out my resume, documentation to this site, or even my art. Links are 
                    somewhere on the page.
                    </p>

                    <p>"If you want to succed as bad as you want to breath then you'll be successful" - some 
                        random guy on the internet </p>
                </div>

                    <ul className="myList">
                        <li>
                        <a href="https://drive.google.com/file/d/18yBe35NGoetcDh6veYGvHAuB2mmblX4F/view?usp=sharing" target="_blank">
                                <i class="fa-solid fa-file"></i>
                                <span>RESUME</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/document/d/1vi0Jce4OguCOJSFTF7t-teNRCIGeYkpwJZ241YH6kjQ/edit?usp=sharing"target="_blank">
                                <i class="fa-solid fa-folder"></i>
                                <span>DOC. TO MY WEBSITE</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://truehero101.artstation.com/" target="blank">
                                <i class="fa-solid fa-palette"></i>
                                <span>CHECK OUT MY ART</span>
                            </a>
                        </li>
                    </ul>



                    <div className="textBoxConatiner">
                        <div className="textBox1">
                            <div className="innerBox">
                                <div className="textAni">FRONTEND DEVELOPMENT</div>
                            </div>
                            <div className="innerBox">
                                <div className="textAni">BACKEND DEVELOPMENT</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">UX/UI DESIGN</div> 
                            </div>
                        </div>

                        <div className="textBox2">
                            <div className="innerBox">
                                <div className="textAni">HTML</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">CSS</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">JAVASCRIPT</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">FIGMA</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">TECH</div> 
                            </div>

                        </div>
                        
                        <div className="textBox3">
                            <div className="innerBox">
                                <div className="textAni">JAVA</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">ART</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">JAVASCRIPT</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">REACT</div> 
                            </div>
                            <div className="innerBox">
                                <div className="textAni">PIZZA</div> 
                            </div>
                        </div>

                    </div>
 
            </div>
        </div>


    );
}

export default About