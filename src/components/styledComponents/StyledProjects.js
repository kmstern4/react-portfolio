import styled, { css } from 'styled-components';

export const ProjImg = styled.img`
    background: black;
    width: 90%;
    margin-bottom: 1em;
    filter: brightness(0.25);
    z-index: -1;
`;

export const ProjTitle = styled.h3`
    width: 90%;
    font-family: 'Pacifico', cursive;
    color: #ffffff;
    font-size: 3vw;
    position: absolute;
    z-index: 3;
    padding-left: 1vw;
    padding-top: 1vw;
`;

export const ProjDiv = styled.div`
    position: absolute;
    width: 90%;
    height: 23.5vw;
    z-index: 1;
`;

export const ProjDesc = styled.p`
    position: absolute;
    top: 6vw;
    padding-left: 1vw;
    font-size: 1.3vw;
    color: #ffffff;
    z-index: 2;
    opacity: 0;

    ${ProjDiv}:hover & {
        animation: fadeup 2s;
        animation-play-state: running;
        -webkit-animation: fadeup 1s;
        -moz-animation: fadeup 1s;
        opacity: 1;
    
        @keyframes fadeup {
            from {
                top: 9vw;
                opacity: 0;
            }
            to {
                top: 6vw;
                opacity: 1;
            }
        }
        
        @-webkit-keyframes fadeup {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @-moz-keyframes fadeup {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    }

`;

export const Logo = styled.img`
    width: 2vw;
`;
