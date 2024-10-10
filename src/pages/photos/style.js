import styled from "styled-components";

export const ContentFull = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentPho = styled.div`
    height: 100vh;
    width: 90%;
    background-color: rgba(50, 50, 50, 0.3);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 40px;
    overflow: hidden;
    justify-content: center;
`

export const Card = styled.div`
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            height: 420px;
            width: 380px;
            display: flex;
            align-items: self-end;
            justify-content: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transition: transform 0.3s ease;
            border-radius: 5px;

            &:hover{
                    transform: scale(1.05);
                    cursor: pointer;
                }  
`