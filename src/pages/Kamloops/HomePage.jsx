import React from "react";
import styled from 'styled-components';

const S = {};

S.page = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
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

S.Text = styled.div`
    display: block;

    font-family: Poppins;
    font-size: calc(12px + 0.3vmax);
    color: #000000;
    // text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 2%;
    margin-bottom: 2%;
`;

S.Contact = styled.div`
    
    font-family: Poppins;
    font-weight: 600;
    font-size: 1.5em;
    color: #0003FF;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 1%;
    margin-bottom: 2%;

`;

S.TextParagraph = styled.p`
    font-weight: 200;
`;

S.TextParagraphBold = styled.p`
    font-weight: 800;
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

S.PhoneContainer = styled.div`
    text-decoration: none;
`;

const KHomePage = () => {
    
    return (
        <S.page>
            <S.Top>
                <S.SmallLogoContainer as="a" href="/">
                    <S.SmallLogo 
                        src="https://user-images.githubusercontent.com/46095809/77265982-7640bf80-6c5b-11ea-8286-c3d85e85f33f.png" 
                    />
                </S.SmallLogoContainer>
                <S.Nav>
                    <S.NavItem as="a" href="/kamloops/home">Home</S.NavItem>
                    <S.NavItem as="a" href="/kamloops/info">How It Works</S.NavItem>
                    <S.NavItem as="a" href="/kamloops/about">About Us</S.NavItem>
                    <S.NavItem as="a" href="/kamloops/volunteer">Volunteer</S.NavItem>
                </S.Nav>
            </S.Top>
            <S.Content>
                <S.Text>
                    <S.TextParagraph>
                    Hello, welcome to Helpful Neighbor!
                    </S.TextParagraph>
                    <S.TextParagraph>
                    We are a community of young people wanting to lend a helping hand in our community during these tough times of the COVID-19 pandemic.     
                    </S.TextParagraph>
                    <S.TextParagraph>
                    We want to offer our volunteer services to those in need - especially the senior community, those with underlying conditions, or anyone who may not feel comfortable leaving their home at this time. 
                    </S.TextParagraph>
                    {/* <S.TextParagraph>
                    Whether it be delivering groceries or any other errand, please do not hesitate to give us a call; we will be more than happy to help!                        
                    </S.TextParagraph> */}
                    {/* <S.TextParagraphBold> 
                        Call or text the type of delivery (e.g. grocery, pharmacy), address and any other details, and we will respond with an estimated time of delivery. Receipts will be delivered and payments can be made in cash/cheque/e-transfer to the deliverer.
                    </S.TextParagraphBold>  */}
                    <S.TextParagraph>
                    Whether it be groceries, picking up prescriptions or any other errand, please do not hesitate to reach out; we will be more than happy to help! 
                    </S.TextParagraph>
                    <S.TextParagraphBold>
                    Call or text the number below with a description of the errand you need. We will coordinate an estimated delivery time with a deliverer and notify you as soon as we can. If payment is needed (ex. groceries), this can be made via cash or e-transfer to the deliverer. 
                    </S.TextParagraphBold>
                    
                </S.Text>
                <S.PhoneContainer as="a" href="tel:250-819-3712">
                    <S.Contact>
                        (250) 819 - 3712
                    </S.Contact>
                </S.PhoneContainer>

                <S.SloganContainer>
                    <S.Slogan src="https://user-images.githubusercontent.com/46095809/77281747-24ad2a80-6c85-11ea-9cd1-52aa728c3fe6.png" />
                </S.SloganContainer>

            </S.Content>
            
        </S.page>
    );
    
    
};

export default KHomePage;