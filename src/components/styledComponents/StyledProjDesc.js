import styled, { css } from 'styled-components';
import StyledProjDiv from './StyledProjDiv';

const StyledProjDesc = styled.p`
    position: absolute;
    top: 6vw;
    padding-left: 1vw;
    font-size: 1.3vw;
    color: #ffffff;
    opacity: 0;

    ${StyledProjDiv}:hover & {
        animation: fadeup 1s;
        -webkit-animation: fadeup 1s;
        -moz-animation: fadeup 1s;
    
        @keyframes fadeup {
            from {
                opacity: 0;
            }
            to {
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

export default StyledProjDesc;