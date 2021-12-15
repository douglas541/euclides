import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 30vh;
    background-image: url('./background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h2{
        font-size: 42px;
        margin: 10px 0;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
    min-width: 325px;
    max-width: 370px;
    /* background-color: blue; */

    img{
        width: 6vw;
        min-width: 80px;
    }

    h1{
        font-size: 60px;
        color: #fff;
    }
`;