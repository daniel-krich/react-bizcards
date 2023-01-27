import { Container, Row, Col } from "react-bootstrap";

export default function AboutInfo() {
    return (
        <Row className="align-items-center py-5 rounded white-transparent-bg">
            <Col>
                <Container className="text-white">
                    <h1 className="text-center mb-3">About Bizcards</h1>
                    <p>
                        Our business card service is dedicated to creating high-quality, professional business cards that make a lasting impression. We understand the importance of a well-designed business card and strive to provide our clients with cards that accurately reflect their brand and message.
                    </p>
                    <p>
                        We offer a wide range of design options, from simple and classic to more complex and modern layouts. Our team of experienced designers works closely with each client to ensure that their business card is not only visually stunning, but also effectively communicates their unique value proposition.
                    </p>
                    <p>
                        In addition to our design services, we also offer a variety of paper stocks and printing options to choose from. Whether you prefer a traditional paper stock or a more eco-friendly option, we have something to suit your needs.
                    </p>
                    <p>
                        Our commitment to quality and customer satisfaction is evident in every business card we create. We take pride in our work and are confident that you will be delighted with the final product.
                    </p>
                </Container>
            </Col>
        </Row>
    );
}