import styled from "styled-components";

export const Banner = styled.img`
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 50px;
`

export const PartyMain = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
        article{
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            width: 40%;
            height: 600px;
            font-size: 26px;
                span{
                    width: 15em;
                    height: 75%;
                    font-size: 26px;
                }
                button{
                    height: 45px;
                    padding: 8px;
                    width: 60%;
                    font-size: 22px;
                    font-weight: bold;
                    background-color: red;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    transition: transform 0.3s ease;
                        &:hover{
                        transform: scale(1.05);
                        cursor: pointer;
                    } 
                }
        }
`

export const PartySection = styled.section`
    margin-top: 50px;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

        div{
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            height: 600px;
            width: 400px;
            display: flex;
            align-items: self-end;
            justify-content: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transition: transform 0.3s ease;
            border-radius: 5px;
                p{
                    font-weight:bold;
                    background: rgba(0, 0, 0, 0.5);
                    padding: 5px;
                    border-radius: 5px;
                }
                &:hover{
                    transform: scale(1.05);
                    cursor: pointer;
                }   
        }
`

