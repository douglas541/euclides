import { Container } from './styles';
import Buttom from '../Buttom';

function EuclidesCard(props) {
    return (
        <Container>
            <span>
                Em matemática, o algoritmo de Euclides é um método simples e
                eficiente de encontrar o máximo divisor comum
                entre dois números inteiros diferentes de zero.
            </span>

            <Buttom link="#" color={props.estendido ? "#F2C268" : "#003F63"} textColor={props.estendido ? "#003F63" : "#FFFFFF"} label={props.estendido ? "Euclides Estendido" : "Euclides"} />
        </Container>
    )
};

export default EuclidesCard;