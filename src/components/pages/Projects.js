import React from 'react';
import Row from '../grid/Row';
import Column from '../grid/Column';
import StyledProject from '../styledComponents/StyledProject';
import StyledProjTitle from '../styledComponents/StyledProjTitle';
import StyledProjDesc from '../styledComponents/StyledProjDesc';
import StyledProjDiv from '../styledComponents/StyledProjDiv';
// import './anim.css';

const Projects = () => {
    return <>
        <div className='divAnim'>
        <Row>
            <Column size='six'>
                <StyledProjTitle>
                    Medieval Zombies
                </StyledProjTitle>
                <StyledProjDiv>
                    <StyledProjDesc>
                        Video game created using Phaser.js.
                    </StyledProjDesc>
                </StyledProjDiv>
                <StyledProject src='assets/mz.png' alt='Medieval Zombies' />
            </Column>
            <Column size='six'>
                <StyledProjTitle>
                    Train Scheduler
                </StyledProjTitle>
                <StyledProject src='assets/ts.png' alt='Train Scheduler' />
            </Column>
        </Row>
        <Row>
            <Column size='six'>
                <StyledProjTitle>
                    Animal Trivia
                </StyledProjTitle>
                <StyledProject src='assets/tg.png' alt='Animal Trivia' />
            </Column>
            <Column size='six'>
                <StyledProjTitle>
                    Find Your Captain
                </StyledProjTitle>
                <StyledProject src='assets/cf.png' alt='Find Your Captain' />
            </Column>
        </Row>
        </div>
    </>
}

export default Projects;