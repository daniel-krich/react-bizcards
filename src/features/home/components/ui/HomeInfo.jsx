import { Row, Col, Button } from "react-bootstrap";

export default function HomeInfo() {
    return (
        <Row className="align-items-center py-5 rounded white-transparent-bg">
            <Col>
                <h1 className="text-center mb-3 text-white">Business Card Service</h1>
                <p className="lead text-center mb-3 text-white">
                    We specialize in creating high-quality, professional business cards that make a lasting impression.
                </p>
                <div className="text-center">
                    <Button variant="light">Learn more</Button>
                </div>
            </Col>
        </Row>
    );
}