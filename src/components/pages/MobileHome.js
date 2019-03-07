import React from 'react';
import { TechList, TechItem } from '../styledComponents/StyledTech';
import StyledImage from '../styledComponents/StyledImage';
import StyledAbout from '../styledComponents/StyledAbout';
import StyledTitle from '../styledComponents/StyledTitle';

const MobileHome = () => {
    return <>
        <StyledImage src='assets/me.jpg' alt='Kelly Stern' />
        <StyledTitle>About Me</StyledTitle>
        <StyledAbout>I am a front-end focused full stack web developer. I pride myself in making my projects look and function as clean as possible. Currently, I am creating a YouTube tutorial series about Phaser.js, a JavaScript library in which I am making a simple game. If you'd like to check out the game or any of my other projects, click the Projects link to the left.</StyledAbout>
        <StyledTitle>
            Technologies
        </StyledTitle>
        <TechList>
            <TechItem>
                HTML
            </TechItem>
            <TechItem>
                CSS
            </TechItem>
            <TechItem>
                JavaScript
            </TechItem>
            <TechItem>
                jQuery
            </TechItem>
            <TechItem>
                React.js
            </TechItem>
            <TechItem>
                SQL
            </TechItem>
            <TechItem>
                MongoDB
            </TechItem>
            <TechItem>
                Phaser.js
            </TechItem>
        </TechList>
    </>
};

export default MobileHome;