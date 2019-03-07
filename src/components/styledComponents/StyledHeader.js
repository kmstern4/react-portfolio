import styled, { css } from 'styled-components';

const StyledHeader = styled.h1`
    font-family: 'Alegreya', serif;
    font-size: 15vh;
    color: #fc4a1a;
    text-align: center;
    padding-top: 4vh;

    @media (min-width: 550px) {
        font-size: 6vw;
        margin-bottom: 0px;
    }
`;

export default StyledHeader;