import React from 'react';
import Row from '../grid/Row';
import Column from '../grid/Column';
import StyledAbout from '../styledComponents/StyledAbout';
import StyledTitle from '../styledComponents/StyledTitle';
import StyledImage from '../styledComponents/StyledImage';
import { TechList, TechItem } from '../styledComponents/StyledTech';

const Home = () => {
    return <>
        <Row>
            <Column size='two'>
                <StyledImage src='assets/me.jpg' alt='Kelly Stern' />
            </Column>
            <Column size='six'>
                <StyledTitle>
                    About Me
                </StyledTitle>
                <StyledAbout>
                    I am a front-end focused full stack web developer. I pride myself in making my projects look and function as clean as possible. Currently, I am creating a YouTube tutorial series about Phaser.js, a library in which I am making a simple game. If you'd like to check out the game or any of my other projects, click the Projects link to the left.
                </StyledAbout>
            </Column>
            <Column size='two'>
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
            </Column>
        </Row>
        <Row>
            <Column size='ten'>
                <StyledTitle>
                    About This Portfolio
                </StyledTitle>
                <StyledAbout>
                    This porfolio is a custom React application built using Webpack and Babel. Most of the components are Styled Components. It is hosted on Amazon Web Service's S3 service through Route 53.
                </StyledAbout>
            </Column>
        </Row>
    </>
}

export default Home;