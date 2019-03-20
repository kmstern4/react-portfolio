import styled, { css } from 'styled-components';

const StyledImage = styled.img`
    width: 20vh;
    float: left;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-top: 5vh;
    box-shadow: 2px 2px 5px rgba(79, 79, 79, 0.84);

    @media (min-width: 550px) {
        float: left;
        width: 11vw;
        margin-bottom: 0vw;   
        margin-left: 0vw;
        margin-right: 2vw;
        margin-top: 0vw;
    }
`;

export default StyledImage;