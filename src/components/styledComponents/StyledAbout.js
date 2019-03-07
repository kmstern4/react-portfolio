import styled, { css } from 'styled-components';

const StyledAbout = styled.p`
    font-size: 4vh;
    margin-right: 5vh;
    margin-left: 5vh;

    @media (min-width: 550px) {
        font-size: 1.3vw;
        margin-right: 0px;
        margin-left: 0px;
    }
`;

export default StyledAbout;