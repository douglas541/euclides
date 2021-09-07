import { Container, Content } from './styles';
import EuclidesCard from '../EuclidesCard';

function CardsContainer(){
    return(
        <Container>
            <Content>
                <EuclidesCard/>
                <EuclidesCard estendido/>
            </Content>
        </Container>
    )
}

export default CardsContainer;