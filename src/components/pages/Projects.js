import React from 'react';
import Row from '../grid/Row';
import Column from '../grid/Column';
import { ProjImg, ProjDesc, ProjDiv, ProjTitle, Logo } from '../styledComponents/StyledProjects';
// import './anim.css';

const Projects = () => {
    return <>
        <div className='divAnim'>
        <Row>
            <Column size='six'>
                <ProjDiv>
                    <ProjTitle>
                        Medieval Zombies
                    </ProjTitle>
                    <ProjDesc>
                        (Work in Progress) Short adventure game where you progress through a story to stop a zombie invasion, fighting the undead along the way. <br></br><br></br>
                        Phaser.js, Babel, Webpack, Gulp.js <br></br><br></br>
                        <a href='https://github.com/kmstern4/medieval-zombies' target='_blank'><Logo src ='assets/git.png' alt='GitHub' />GitHub</a> - | | | - <a href='https://protected-sierra-25451.herokuapp.com' target='_blank'>Live App</a>
                    </ProjDesc>
                </ProjDiv>
                <ProjImg src='assets/mz.png' alt='Medieval Zombies' />
            </Column>
            <Column size='six'>
                <ProjDiv>
                    <ProjTitle>
                        Train Scheduler
                    </ProjTitle>
                    <ProjDesc>
                        An app that uses Firebase to store schedule information and dynamically display the data in the browser. Feel free to add your own favorite, fictional trains! <br></br><br></br>
                        Firebase, jQuery, Moment.js, custom CSS <br></br><br></br>
                        <a href='https://github.com/kmstern4/trainScheduler' target='_blank'><Logo src ='assets/git.png' alt='GitHub' />GitHub</a> - | | | - <a href='https://kmstern4.github.io/trainScheduler/' target='_blank'>Live App</a>
                    </ProjDesc>
                </ProjDiv>
                <ProjImg src='assets/ts.png' alt='Train Scheduler' />
            </Column>
        </Row>
        <Row>
            <Column size='six'>
                <ProjDiv>
                    <ProjTitle>
                        Animal Trivia
                    </ProjTitle>
                    <ProjDesc>
                        This was one of my first projects. Test your 4th grade animal trivia knowledge. How many questions can you get right? Watch out for the timer! <br></br><br></br>
                        HTML, JavaScript, jQuery, custom CSS <br></br><br></br>
                        <a href='https://github.com/kmstern4/TriviaGame' target='_blank'><Logo src ='assets/git.png' alt='GitHub' />GitHub</a> - | | | - <a href='https://kmstern4.github.io/TriviaGame/' target='_blank'>Live App</a>
                    </ProjDesc>
                </ProjDiv>
                <ProjImg src='assets/tg.png' alt='Animal Trivia' />
            </Column>
            <Column size='six'>
                <ProjDiv>
                    <ProjTitle>
                        Find Your Captain
                    </ProjTitle>
                    <ProjDesc>
                        An app that matches you to your ideal (fictional) captain. Will your match be Captain America, Captain Jack Sparrow, or someone else? <br></br><br></br>
                        Express.js, jQuery, API calls, custom CSS <br></br><br></br>
                        <a href='https://github.com/kmstern4/FriendFinder' target='_blank'><Logo src ='assets/git.png' alt='GitHub' />GitHub</a> - | | | - <a href='https://fathomless-brushlands-61032.herokuapp.com/' target='_blank'>Live App</a>
                    </ProjDesc>
                </ProjDiv>
                <ProjImg src='assets/cf.png' alt='Find Your Captain' />
            </Column>
        </Row>
        </div>
    </>
}

export default Projects;