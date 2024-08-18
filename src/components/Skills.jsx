import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {


    return (
        <>
        <div className="skills" style={{display: 'flex', justifyContent: 'center',marginTop: '4rem' }}>
            <h1>Skills</h1>
        </div>
            <div style={{ margin: '10px', }}>
                <h2> Html</h2>
                <ProgressBar variant="success"  now={80} label={`${80}%`} />
                <h2>Css</h2>
                <ProgressBar variant="success" now={70} label={`${70}%`} />
                <h2>Bootstrap</h2>
                <ProgressBar variant="success" now={60} label={`${60}%`} />
                <h2>JavaScript</h2>
                <ProgressBar variant="success" now={60} label={`${60}%`} />
                <h2>React js</h2>
                <ProgressBar variant="success" now={50} label={`${50}%`} />
            </div>

        </>
    )
}
export default Skills;