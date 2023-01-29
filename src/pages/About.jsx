import { Container } from "react-bootstrap";
import { AboutInfo } from "../features/about";
import { FallbackPageMemoizer } from '../context/FallbackContext';

export default function About() {
    return (
        <FallbackPageMemoizer>
            <Container>
                <AboutInfo />
            </Container>
        </FallbackPageMemoizer>
    );
}