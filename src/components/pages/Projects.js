import React from 'react';
import Row from '../grid/Row';
import Column from '../grid/Column';
import StyledProject from '../styledComponents/StyledProject';
import './anim.css';

// const styles = {
//     divAnim: {

//     }
// }

const Projects = () => {
    return <>
        <div class='divAnim'>
        <Row>
            <Column size='six'>
                <StyledProject src='assets/mz.png' alt='Medieval Zombies' />
            </Column>
            <Column size='six'>
                <StyledProject src='assets/ts.png' alt='Train Scheduler' />
            </Column>
        </Row>
        <Row>
            <Column size='six'>
                <StyledProject src='assets/tg.png' alt='Medieval Zombies' />
            </Column>
            <Column size='six'>
                <StyledProject src='assets/cf.png' alt='Train Scheduler' />
            </Column>
        </Row>
        </div>
    </>
}

export default Projects;