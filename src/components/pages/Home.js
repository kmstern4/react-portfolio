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
            <Column size='eight'>
                <StyledImage src='assets/me.jpg' alt='Kelly Stern' />
                <StyledTitle>
                    About Me
                </StyledTitle>
                <StyledAbout>
                    I am a Full Stack Web Developer who is passionate about coding. I pride myself in making my projects look and function as clean as possible. Currently, I am creating a YouTube tutorial series about Phaser.js, a JavaScript library in which I am making a simple game. If you'd like to check out the game or any of my other projects, click the Projects link to the left.
                </StyledAbout>
                <br></br><br></br><br></br>
                <StyledTitle>
                    About This Portfolio
                </StyledTitle>
                <StyledAbout>
                    This portfolio is a work in progress. It is a custom React application built using Webpack and Babel. Most of the components are Styled Components. It is hosted on Amazon Web Service's S3 service through Route 53.
                </StyledAbout>
            </Column>
            <Column size='two'>
                <StyledTitle>
                    Technologies
                </StyledTitle>
                <TechList>
                    <TechItem>
                        HTML5
                    </TechItem>
                    <TechItem>
                        CSS3
                    </TechItem>
                    <TechItem>
                        JavaScript
                    </TechItem>
                    <TechItem>
                        jQuery
                    </TechItem>
                    <TechItem>
                        ReactJS
                    </TechItem>
                    <TechItem>
                        ExpressJS
                    </TechItem>
                    <TechItem>
                        NodeJS
                    </TechItem>
                    <TechItem>
                        PhaserJS
                    </TechItem>
                    <TechItem>
                        MongoDB
                    </TechItem>
                    <TechItem>
                        SQL
                    </TechItem>
                    <TechItem>
                        AWS
                    </TechItem>
                    <TechItem>
                        Git
                    </TechItem>
                </TechList>
            </Column>
        </Row>
    </>
}

export default Home;