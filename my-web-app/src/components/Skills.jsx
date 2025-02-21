import React, { useEffect, useRef } from 'react';

function Skills() {
    return (
        <div className='skillsContainer'>
            <div className='firstSkillGrid'>
                <div className='box' style={{ gridArea: "box-1" }}>1</div>
                <div className='box' style={{ gridArea: "box-2" }}>2</div>
                <div className='box' style={{ gridArea: "box-3" }}>3</div>
                <div className='box' style={{ gridArea: "box-4" }}>4</div>
                <div className='box' style={{ gridArea: "box-5" }}>5</div>
                <div className='box' style={{ gridArea: "box-6" }}>6</div>
                <div className='box' style={{ gridArea: "box-7" }}>7</div>
                <div className='box' style={{ gridArea: "box-8" }}>8</div>
                <div className='box' style={{ gridArea: "box-9" }}>9</div>
            </div>

            <div className='infiWordSlider'>
                <ul>
                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>
                    
                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>
                </ul>

                <ul aria-hidden="true">
                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>
                    
                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>

                    <li>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                        <span className='word'>blah</span>
                    </li>
                </ul>
            </div>

            <div className='secondSkillGrid'>
                <div className='box' style={{ gridArea: "box-10" }}>10</div>
                <div className='box' style={{ gridArea: "box-11" }}>11</div>
                <div className='box' style={{ gridArea: "box-12" }}>12</div>
                <div className='box' style={{ gridArea: "box-13" }}>13</div>
                <div className='box' style={{ gridArea: "box-14" }}>14</div>
                <div className='box' style={{ gridArea: "box-15" }}>15</div>

            </div>

        </div>

    );
}

export default Skills;
