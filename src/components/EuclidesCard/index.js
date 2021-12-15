import { Container, ContentContainer } from './styles';
import Buttom from '../Buttom';

function EuclidesCard(props) {
    return (
        <Container>
            <ContentContainer>
                <span>
                    {props.estendido ?
                        `O Algoritmo de Euclides estendido é uma extensão do algoritmo de 
                    Euclides, que, além de calcular o máximo divisor comum (MDC) entre
                    dois numeros fornece os coeficientes "α" e "β"` :
                        `Em matemática, o algoritmo de Euclides é um método 
                    simples e eficiente de encontrar o máximo divisor comum entre dois 
                    números inteiros diferentes de zero.`
                    }
                </span>

                <Buttom
                    link="#"
                    color={props.estendido ? "#F2C268" : "#ffffff"}
                    textColor={props.estendido ? "#003F63" : "#FFFFFF"}
                    label={props.estendido ? "Euclides Estendido" : "Euclides"}
                />
            </ContentContainer>
        </Container>
    )
};

export default EuclidesCard;