
function Projects() {

    return (
        <header>
            <div className="projectConatiner" id="projects">

                <section className="projectPageSlide" id="one">

                    <div className="projectContentStuff">


                        <div className="pageCountDotList">
                            <ul>
                                <li><div className="slideDotFill"></div></li>
                                <li><div></div></li>
                                <li><div></div></li>
                                <li><div></div></li>
                                <li><div></div></li>
                            </ul>
                        </div>


                        <div className="descrptionContainer">

                            <div className="projectDisplayPic">

                                <img src="/src/assets/images/testImg.jpg" alt="img"></img>

                                <div className="projectDisplayContent">
                                    <h2>Project Name</h2>
                                        <div className="projectDisplayLink">
                                            <p>View Project</p>
                                        </div>
                                </div>
                            </div>

                            <div className="descriptionSubContainer">
                                <div className="projectDesciptionSection">
                                    <h1>Lofi Calculator</h1>

                                    {/* <div className="picDisplayer">
                                        <div className="displayer1">
                                            <img src="/src/assets/images/testImg.jpg" alt="" id="revealImg1"/>
                                        </div>

                                        <div className="displayer2">
                                            <img src="/src/assets/images/testImg.jpg" alt="" id="revealImg2"/>
                                        </div>

                                        <div className="displayer3">
                                            <img src="/src/assets/images/testImg.jpg" alt="" id="revealImg3"/>
                                        </div>

                                        <div className="displayer4">
                                            <img src="/src/assets/images/testImg.jpg" alt="" id="revealImg4"/>
                                        </div>                                         
                                    </div> */}
                                    <p>
                                        This a quick little full-stack project
                                        using React and Node.js.
                                        I followed chatengine.io instructions
                                        to develop a chat app where you can make a user and text other
                                        users.
                                        The main takeaway from this project is to receive and
                                        store users using chatengine.io.
                                        I am using a free trial so it
                                        is limited. 🚀
                                    </p>
                                </div>

                                <div className="projectTechUsed">
                                    <img src="./src/assets/images/html.png"  className="techIcon" id="oneSetFloat" alt="HTML" />
                                    <img src="./src/assets/images/css.png" className="techIcon" id="twoSetFloat" alt="CSS" />
                                    <img src="./src/assets/images/html.png"  className="techIcon" id="oneSetFloat" alt="HTML" />
                                    <img src="./src/assets/images/css.png" className="techIcon" id="twoSetFloat" alt="CSS" />

                                </div>
                            </div>
                        </div>




                    </div>

                </section>

                <section className="projectPageSlide" id="two">2
                    <div className="pageCountDotList">
                        <ul>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div ></div></li>
                            <li><div></div></li>
                            <li><div></div></li>
                        </ul>
                    </div>
                </section>

                <section className="projectPageSlide" id="three">3
                    <div className="pageCountDotList">
                        <ul>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div></div></li>
                            <li><div></div></li>
                        </ul>
                    </div>
                </section>

                <section className="projectPageSlide" id="four">4
                    <div className="pageCountDotList">
                        <ul>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div></div></li>
                        </ul>
                    </div>
                </section>

                <section className="projectPageSlide" id="five">5
                    <div className="pageCountDotList">
                        <ul>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                            <li><div className="slideDotFill"></div></li>
                        </ul>
                    </div>
                </section>






                {/* <section class="item-Project">
                    <div class="projectsGrid"> 





                         <div class="projectCover">
                            <div class="projectCardShell">
                                <div class="projectCard" >
                                    <a href="https://drive.google.com/file/d/18yBe35NGoetcDh6veYGvHAuB2mmblX4F/view?usp=sharing" target="_blank">
                                        <img src="/src/assets/images/testImg.jpg" alt=""></img>
                                    </a>
                                    <div class="projectContent">
                                        <h2>Project 1</h2>
                                        <div class="title">HTML - CSS - React - Node.js</div>
                                        <div class="count">🚀</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="descriptionScroller" id="pulse">
                            <div class="description-item">
                                <p>Project 1 description: This a quick little full-stack project
                                    using React and Node.js. I followed chatengine.io instructions
                                    to develop a chat app where you can make a user and text other
                                    users. The main takeaway from this project is to receive and
                                    store users using chatengine.io. I am using a free trial so it
                                    is limited. 🚀
                                </p>
                            </div>

                            <div class="description-item">
                                <p>HTML, CSS, Other skills</p>
                            </div>

                            <div class="description-item">
                                <a href=" " className="projectGitLink" target="_blank">
                                    <a href=" " className="projectLink" target="_blank">
                                        Check out the project <i class="fa-solid fa-square-arrow-up-right"></i>
                                    </a>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>  */}











            </div>

        </header >
    );
}

export default Projects