import Link from 'next/link';
import { Container } from './styles';

function Buttom(props) {
    return (
        <Container color={props.color} textColor={props.textColor}>
            <Link href={props.link}>
                <a>{props.label}</a>
            </Link>
        </Container>
    )
};

export default Buttom;