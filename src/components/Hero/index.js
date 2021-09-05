import { Container, ContentContainer, LogoContainer } from './styles';

function Hero() {
    return (
        <Container>
            <ContentContainer>
                <LogoContainer>
                    <img src="./logo.png"></img>
                    <h1>Euclides</h1>
                </LogoContainer>
                <h2>Cálculo algébrico</h2>
            </ContentContainer>
        </Container>
    )
};

export default Hero;