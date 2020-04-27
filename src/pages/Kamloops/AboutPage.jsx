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

S.AboutImage = styled.img`
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
`;

S.AboutImageContainer = styled.div`
    display: block;
    margin-top: 2%;
    margin-bottom: 2%;
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
    // text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 2%;
    margin-bottom: 2%;
`;

S.TextParagraph = styled.p`
    font-weight: 300;
`;

S.TextParagraphCenter = styled.p`
    text-align: center;
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

const KAboutPage = () => {
    
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

                <S.Title>
                    About Us
                </S.Title>
                <S.Text>
                    <S.TextParagraph>
                        Helpful Neighbor was started by two university students, James and Young. With classes postponed and the city in a state of emergency, we wanted to find a useful way to volunteer our time and energy.  
                    </S.TextParagraph>
                    <S.TextParagraph>
                        When Jordan and Liam joined the team, we decided to expand our operations to Calgary, AB. Since then, we have accumulated a wide range of customers and volunteers in both cities as well as a strong support network of media organizations and businesses.
                    </S.TextParagraph>
                    <S.TextParagraph>
                        If you are interested in organizing a Helpful Neighbor branch in your area, please do not hesitate to reach out to us at <a href="mailto:hnkamloops@gmail.com">hnkamloops@gmail.com</a>.
                    </S.TextParagraph>
                </S.Text>

                <S.Text>
                    <S.TextParagraph>
                        <b>Kamloops Chapter</b>: James Bates and Young Seo
                    </S.TextParagraph>
                </S.Text>

                <S.AboutImageContainer>
                    <S.AboutImage src="https://user-images.githubusercontent.com/46095808/77294701-f5f17d00-6ca1-11ea-988c-69ffe2ea98c3.jpg" />
                </S.AboutImageContainer>

                <S.Text>
                    <S.TextParagraph>
                        <b>Calgary Chapter</b>: Jordan Lalonde and Liam Burke
                    </S.TextParagraph>
                </S.Text>

                <S.AboutImageContainer>
                    <S.AboutImage src="https://user-images.githubusercontent.com/46095808/80409974-99741580-887e-11ea-84e3-c1f58513a634.png" />
                </S.AboutImageContainer>

                <S.Title>
                    Media
                </S.Title>
                <S.Text>
                    <S.TextParagraphCenter>
                        Check us out on the media!
                    </S.TextParagraphCenter>

                    <S.TextParagraph>
                        <b>CFJC News</b> <i>April 7, 2020</i> :
                    </S.TextParagraph>
                    <S.TextParagraph>
                        <a href="https://cfjctoday.com/2020/04/07/video-follow-the-helpful-neighbours-as-they-grocery-shop-for-others-during-the-pandemic/">
                            VIDEO: Follow the Helpful Neighbours as they grocery shop for others during the pandemic
                        </a>
                    </S.TextParagraph>
                    <S.TextParagraph>
                        <b>Today Kamloops</b> <i>March 30, 2020</i> :
                    </S.TextParagraph>
                    <S.TextParagraph>
                        <a href="https://cfjctoday.com/2020/03/30/pair-of-university-students-from-kamloops-here-to-help-during-pandemic/?fbclid=IwAR3Om0Oq8LMWreH5OBDxPKw-iI0bBJgC9NCDVq0fDe_tWGMKwCNP31xLl1I">
                            Pair of university students from Kamloops here to help during pandemic
                        </a>
                    </S.TextParagraph>
                    <S.TextParagraph>
                        <b>Kamloops Matters</b> <i>March 29, 2020</i> :
                    </S.TextParagraph>
                    <S.TextParagraph>
                        <a href="https://www.castanetkamloops.net/edition/news-story-295793-48-.htm?fbclid=IwAR0PcRtuLt3QZVxGiHSgGoUTcl9hZjzCjBrskGAdWK1484BJMMhyvGZ3V_c#295793">
                            Students create online platform to help their Kamloops neighbours
                        </a>
                    </S.TextParagraph>
                </S.Text>

                <S.SloganContainer>
                    <S.Slogan src="https://user-images.githubusercontent.com/46095809/77281747-24ad2a80-6c85-11ea-9cd1-52aa728c3fe6.png" />
                </S.SloganContainer>

            </S.Content>
            
        </S.page>
    );
    
    
};

export default KAboutPage;