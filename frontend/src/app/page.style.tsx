'use client'
import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 4rem;
    padding: 0 5px;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const H1 = styled.h1`
    color: white;
    font-size: 2rem;
`;

export const P = styled.p`
    color: #BED7DC;
    font-size: 1rem;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    gap: 1rem;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 1rem;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    min-width: 150px;
`;

export const SpanError = styled.span`
    color: red;
    font-size: 0.7rem;
`;

const AnswerAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`
export const SpanAnswer = styled.span`
    opacity: 0;
    animation: ${AnswerAnimation} 10s linear;
    color: white;
`;

export const Button = styled.button`
    text-transform: uppercase;
    font-weight: 600;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    padding: 1rem;
    width: 200px;
`;



