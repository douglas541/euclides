import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 6vh;

    background-color: #003F63;
    opacity: 90%;

    z-index: 1000;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    max-width: 1100px;
    margin: 0 3vw;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-right: 3vw;

    img {
        width: 2vw;
        min-width: 20px;
    };
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    a{
        margin-right: 3vw;
        color: #FFFFFF;
        text-decoration: none;
    }
`;