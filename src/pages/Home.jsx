import { Container } from "react-bootstrap";
import { HomeInfo } from '../features/home';
import { FallbackPageMemoizer } from '../context/FallbackContext';

export default function Home() {
    return (
        <FallbackPageMemoizer>
            <Container>
                <HomeInfo />
            </Container>
        </FallbackPageMemoizer>
    );
}