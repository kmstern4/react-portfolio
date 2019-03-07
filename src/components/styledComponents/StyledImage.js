import styled, { css } from 'styled-components';

const StyledImage = styled.img`
    width: 20vw;
    float: left;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 5vw;

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