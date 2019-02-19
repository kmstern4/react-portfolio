import React from 'react';
import Row from '../grid/Row';
import Column from '../grid/Column';
import StyledProject from '../styledComponents/StyledProject';

const Projects = () => {
    return <>
        <Row>
            <Column size='six'>
                <StyledProject src='assets/mz.png' alt='Medieval Zombies' />
            </Column>
            <Column size='six'>
                <StyledProject src='assets/ts.png' alt='Train Scheduler' />
            </Column>
        </Row>
    </>
}

export default Projects;