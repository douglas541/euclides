import Header from '../Header/index';
import Footer from '../Footer/index';
import { Container, ContentContainer, Wrapper } from './styles';

function Layout({ children }) {
    return (
        <>
            <Header/>
            <Container>
                <ContentContainer>
                    {children}
                </ContentContainer>
            </Container>
            <Footer/>
        </>
    );
}

export default Layout;