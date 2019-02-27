import React from 'react';
import Row from '../grid/Row';
import Column from '../grid/Column';
import StyledAbout from '../styledComponents/StyledAbout';
import StyledTitle from '../styledComponents/StyledTitle';

const Home = () => {
    return <>
        <Row>
            <Column size='two'>
                <p>Image will go right here.</p>
            </Column>
            <Column size='six'>
                <StyledTitle>
                    About Me
                </StyledTitle>
                <StyledAbout>
                    I am a front-end focused full stack web developer. I pride myself in making my projects look and function as clean as possible. Currently, I am creating a YouTube tutorial series about Phaser.js, a library in which I am making a simple game. If you'd like to check out the game or any of my other projects, click the Projects link to the left.
                </StyledAbout>
            </Column>
            <Column size='three'>
                <StyledTitle>
                    Technologies
                </StyledTitle>
                <p>Technology list will go right over here.</p>
            </Column>
        </Row>
    </>
}

export default Home;