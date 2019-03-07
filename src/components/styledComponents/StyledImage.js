import styled, { css } from 'styled-components';

const StyledImage = styled.img`
    width: 20vh;
    float: left;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-top: 5vh;

    @media (min-width: 550px) {
        float: none;
        width: 11vw;
        margin-bottom: 2vw;   
        margin-left: 0vw;
        margin-right: 0vw;
        margin-top: 0vw;
    }
`;

export default StyledImage;