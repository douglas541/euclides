import Link from 'next/link';
import { Container, Logo, OptionsContainer, ContentContainer } from './styles';

function Header() {
    return (
        <Container>
            <ContentContainer>
                <Logo>
                    <img src="./logo_small.svg" />
                </Logo>
                <OptionsContainer>
                    <Link href="#">
                        <a>Home</a>
                    </Link>
                    <Link href="#">
                        <a>Sobre</a>
                    </Link>
                </OptionsContainer>
            </ContentContainer>
        </Container>
    )
};

export default Header;