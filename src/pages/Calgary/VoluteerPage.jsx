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

S.SmallLogo = styled.img` 
    // position: fixed;
    height: calc(30px + 5vmax);
    margin-left: 2vmin;
`;

S.SmallLogoContainer = styled.div`
`;

S.Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 1vmin;
    padding-right: 4vmin;
`;

S.NavItem = styled.div`
    font-family: Poppins;
    font-size: calc(12px + 0.3vmax);
    color: #0003FF;
    text-align: center;
    padding-left: 2vw;
    padding-right: 2vw;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
    }
`;

S.Top = styled.div`
    position: fixed;
    top: 0;
    height: calc(30px + 5vmax);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vmax;
    overflow: hidden;
    background: #FFFFFF;
`;

S.Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: calc(50px + 10vmax);
    margin-bottom: 10vh;
    overflow: scroll;
`;

S.Title = styled.div`
    
    font-family: Poppins;
    font-weight: 600;
    font-size: calc(15px + 0.8vmax);
    color: #0003FF;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2%;
    margin-bottom: 1%;
`;

S.Text = styled.div`
    display: block;

    font-family: Poppins;
    font-size: calc(12px + 0.3vmax);
    color: #000000;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 2%;
    margin-bottom: 2%;
`;


S.TextParagraph = styled.p`
    font-weight: 300;
`;

S.TextParagraphBold = styled.p`
    font-weight: 600;
`;

S.Contact = styled.div`
    
    font-family: Poppins;
    font-weight: 600;
    font-size: 1.5em;
    color: #0003FF;
    text-align: center;
    // margin-left: 25%;
    // margin-right: 25%;
    margin-top: 2%;
    margin-bottom: 1%;
`;

S.Slogan = styled.img`
    height: 6vh;
    width: auto;
`;

S.SloganContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 10vh;

    position: fixed;
    bottom: 0;
    overflow: hidden;
    background: #FFFFFF;
`;

S.WhiteSpace = styled.div`
    background: #FFFFFF;
    color: #FFFFFF;
`;

const CVolunteerPage = () => {
    
    return (
        <S.page>
            <S.Top>
                <S.SmallLogoContainer as="a" href="/">
                    <S.SmallLogo 
                        src="https://user-images.githubusercontent.com/46095809/77265982-7640bf80-6c5b-11ea-8286-c3d85e85f33f.png" 
                    />
                </S.SmallLogoContainer>
                <S.Nav>
                    <S.NavItem as="a" href="/calgary/home">Home</S.NavItem>
                    <S.NavItem as="a" href="/calgary/info">How It Works</S.NavItem>
                    <S.NavItem as="a" href="/calgary/about">About Us</S.NavItem>
                    <S.NavItem as="a" href="/calgary/volunteer">Volunteer</S.NavItem>
                </S.Nav>
            </S.Top>

            <S.Content>
                <S.Title>
                    Volunteer
                </S.Title>
                <S.Text>
                    <S.TextParagraphBold>
                        Want to help out? 
                    </S.TextParagraphBold>
                    <S.TextParagraph>
                        Please send us an email, and we will reach out with more information!
                    </S.TextParagraph>
                </S.Text>
                <S.Contact as="a" href="mailto:hnkamloops@gmail.com">
                    hnkamloops@gmail.com
                </S.Contact>

                <S.SloganContainer>
                    <S.Slogan src="https://user-images.githubusercontent.com/46095809/77281747-24ad2a80-6c85-11ea-9cd1-52aa728c3fe6.png" />
                </S.SloganContainer>

                <S.Text>
                    <S.WhiteSpace>
                        <S.TextParagraph>
                            Please send us an email, and we will reach out with more information!
                        </S.TextParagraph>
                        <S.TextParagraph>
                            Please send us an email, and we will reach out with more information!
                        </S.TextParagraph>
                        <S.TextParagraph>
                            Please send us an email, and we will reach out with more information!
                        </S.TextParagraph>   
                    </S.WhiteSpace>
                </S.Text>

            </S.Content>
            
        </S.page>
    );
    
    
};

export default CVolunteerPage;