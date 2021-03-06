import styled, { css } from 'styled-components';

export const TechList = styled.ul`
    list-style-type: none;
`;

export const TechItem = styled.li`
    font-size: 4vw;
    margin-bottom: 0px;
    margin-left: 5vw;

    @media (min-width: 550px) {
        font-size: 1.3vw;
        text-align: right;
        margin-left: 0px;
    }
`;