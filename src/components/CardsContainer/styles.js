import styled from "styled-components";

export const Container = styled.div`
    height: 58vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px){
        height: 80vh;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 750px;

    @media(max-width: 768px){
        flex-direction: column;
        height: 73vh;
    }
`;