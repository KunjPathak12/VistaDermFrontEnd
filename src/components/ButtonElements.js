import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01Bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    color: ${({dark}) => (dark ? '#010606' : '#01Bf71')};
    outline: none;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#01Bf71' : '#C6CFD6')};
        // box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transform: translate(-3px, -1px);

    }

    &:active{
        background-color: #01bf71;
        box-shadow: 0 5px black;
        transform: translate(4px, 1px);
    }
`