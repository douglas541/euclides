import styled from "styled-components";

export const Container = styled.div`
    height: 4.6vh;
    width: 300px;
    background-color: ${props => props.color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
        
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${props => props.textColor};
        font-size: 20px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;