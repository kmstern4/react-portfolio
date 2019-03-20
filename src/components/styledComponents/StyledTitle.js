import styled, { css } from 'styled-components';

const StyledTitle = styled.h2`
    font-family: 'Alegreya', serif;
    font-size: 5vh;
    color: #fc4a1a;
    margin-bottom: 0.5vh;
    margin-left: 5vh;
    margin-top: 5vh;
    text-shadow: 1px 1px 5px rgba(79, 79, 79, 0.84);

    @media (min-width: 550px) {
        font-size: 2vw;
        margin-left: 0px;
        margin-top: 0vw;
    }
`;

export default StyledTitle;