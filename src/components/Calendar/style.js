import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    width: 100%;
    padding: 5rem 1rem 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #333;
    @media screen and(min-width: 400px){
        padding: 5rem 3rem 10rem;
    }
`;

export const Header = styled.h1`
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    margin-bottom: 1rem;
    color: #f1f1f1;
    letter-spacing: .7rem;
    font-weight: 400;
    @media screen and(min-width: 400px){
        margin-bottom: 2rem;
    }
`;