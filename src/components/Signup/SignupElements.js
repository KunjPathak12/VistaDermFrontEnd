import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: #1A237E;
    margin-bottom: -10px;
`;
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 404px) {
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-top: 32px;
    margin-left: 32px;
    font-size: 32px;
    color: #CFD8DC;
    text-decoration: none;
    font-weight: 700;

    @media (max-width: 480px) {
        margin-top: 8px;
        margin-left: 16px;
    }
`
export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media (max-width: 480px) {
        padding: 10px;
    }
`
export const Form = styled.form`
    background: #010101;
    padding: 50px 32px;
    border-radius: 8px;
    display: grid;
    z-index: 1;
    max-width: 400px;
    height: auto;
    width: 100%;
    margin: 0 auto;
    margin-top: 170px;
    margin-bottom: 18px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.9);

    @media (max-width: 480px) {
        padding: 32px 32px;
    }
`
export const FormH1 = styled.h1`
    font-size: 20px;
    font-weight: 400;
    color: #CFD8DC;
    margin-bottom: 40px;
    text-align: center;
`
export const FormLabel = styled.label`
    font-size: 14px;
    margin-bottom: 8px;
    color: #CFD8DC;
`
export const FormInput = styled.input`
    padding: 16px 16px;
    border: none;
    border-radius: 8px;
    margin-bottom: 32px;
`
export const FormButton = styled.button`
    background: #1A237E;
    padding: 16px 0;
    border: none;
    border-radius: 8px;
    color: #CFD8DC;
    font-size: 20px;
    cursor: pointer;
`
export const Text = styled.span`
    font-size: 14px;
    color: #CFD8DC;
    margin-top: 24px;
    text-align: center;
`