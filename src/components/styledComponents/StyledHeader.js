import styled, { css } from 'styled-components';

const StyledHeader = styled.h1`
    font-family: 'Alegreya', serif;
    font-size: 12vw;
    color: #fc4a1a;
    text-align: center;
    padding-top: 20px;

    @media (min-width: 550px) {
        font-size: 6vw;
        margin-bottom: 0px;
    }
`;

export default StyledHeader;