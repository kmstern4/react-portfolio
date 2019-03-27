import styled, { css } from 'styled-components';

const StyledHeader = styled.h1`
    font-family: 'Alegreya', serif;
    font-size: 10vh;
    color: #fc4a1a;
    text-align: center;
    padding-top: 4vh;
    text-shadow: 2px 2px 5px rgba(79, 79, 79, 0.84);

    @media (min-width: 550px) {
        font-size: 6vw;
        margin-bottom: 0px;
    }
`;

export default StyledHeader;