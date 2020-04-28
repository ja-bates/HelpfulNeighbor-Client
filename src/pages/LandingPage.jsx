import React from "react";
import styled from 'styled-components';

const S = {};

S.page = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

S.Logo = styled.img` 
    // position: fixed;
    height: 60vmin;
    width; auto;
   
`;

S.LogoContainer = styled.div`
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: center;
    
`;

S.Button = styled.button`
    
    height: calc(50px + 0.8vh);
    width: calc(150px + 4vw);
    // padding: 1.2vmax;

    font-family: Poppins;
    font-weight: 300;
    font-size: calc(15px + 0.8vw);
    color: grey;
    text-align: center;
    background-color: white;
    border-color: #0003FF;
    border-width: thin;
    border-radius: 15px;
    outline: none;
    text-decoration: none;

    &:hover {
        color: #0003FF;
        transform: scale(1.05);
    }
`;

S.ButtonContainer = styled.div`
    margin: 2vw;
`;

S.Select = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3vmax;
`;




const LandingPage = () => {
    
    return (
        <S.page>
            <S.LogoContainer>
                <S.Logo src="https://user-images.githubusercontent.com/46095809/80445232-99006c80-88c8-11ea-96e8-e67fef5a2137.png" />

            </S.LogoContainer>
            <S.Select>
                <S.ButtonContainer as="a" href="/kamloops/home">
                    <S.Button>Kamloops ></S.Button>           
                </S.ButtonContainer>
                <S.ButtonContainer as="a" href="/calgary/home">
                    <S.Button>Calgary ></S.Button>           
                </S.ButtonContainer>
            </S.Select>
        </S.page>
    );
    
    
};

export default LandingPage;

