import React from 'react';
import styled, { css } from 'styled-components';

const StyledHeader = styled.h1`
    font-family: 'Pacifico', cursive;
    color: #fc4a1a;
    text-align: center;
    padding-top: 20px;
    font-size: 12vw;

    @media (min-width: 550px) {
        font-size: 8vw;
    }
`;

export default StyledHeader;