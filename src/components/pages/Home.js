import React from 'react';
import Row from '../grid/Row';
import Column from '../grid/Column';
import StyledAbout from '../styledComponents/StyledAbout';

const Home = () => {
    return <>
        <Row>
            <Column size='two'>
                <p>Image will go right here.</p>
            </Column>
            <Column size='six'>
                <StyledAbout>
                    I am a front-end focused full stack web developer. I pride myself in making my projects look and function as clean as possible.
                </StyledAbout>
            </Column>
            <Column size='three'>
                <p>Technology list will go right over here.</p>
            </Column>
        </Row>
    </>
}

export default Home;