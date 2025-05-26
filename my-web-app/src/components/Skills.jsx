import React, { useEffect, useRef } from 'react';

function Skills() {
    return (
        <div className='skillsContainer' id='skills'>
            <div className='firstSkillGrid'>
                <div className='box' style={{ gridArea: "box-1" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/biceps.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-2" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/html.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box0' id='box-3' style={{ gridArea: "box-3" }}>
                   
                </div>

                <div className='box' style={{ gridArea: "box-4" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/css.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-5" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/React.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-6" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/games.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-7" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/js.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-8" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/painting.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-9" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/racing-car.png" className='imgSkill' alt="" />
                    </div>
                </div>

            </div>

            <div className='infiWordSlider'>
                <ul>
                    <li>
                        <span className='word'></span>
                        <span className='word'>HTML</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>CSS</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>JavaScript</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>JAVA</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>REACT</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Node.js</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Github</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Arcane</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Riot Games</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Apple</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'>Call</span>
                        <span className='word'>of</span>
                        <span className='word'>Duty</span>
                    </li>

                </ul>

                <ul aria-hidden="true">
                    <li>
                        <span className='word'></span>
                        <span className='word'>HTML</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>CSS</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>JavaScript</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>JAVA</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>REACT</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Node.js</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Github</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Arcane</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Riot Games</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'></span>
                        <span className='word'>Apple</span>
                        <span className='word'></span>
                    </li>

                    <li>
                        <span className='word'>Call</span>
                        <span className='word'>of</span>
                        <span className='word'>Duty</span>
                    </li>
                </ul>
            </div>

            <div className='secondSkillGrid'>
                <div className='box' style={{ gridArea: "box-10" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/restaurant.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-11" }}>
                    <div className='iconHolder'>
                        <i class="fa-brands fa-aws"></i>
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-12" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/typescript.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-13" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/java.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-14" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/nodejs.png" className='imgSkill' alt="" />
                    </div>
                </div>

                <div className='box' style={{ gridArea: "box-15" }}>
                    <div className='iconHolder'>
                        <img src="/public/images/githubLogo.png" className='imgSkillGit' alt="" />
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Skills;
