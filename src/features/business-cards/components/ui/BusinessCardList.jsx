import { Card, Row, Col } from "react-bootstrap";
import BusinessCard from "./BusinessCard";

export default function BusinessCardList({ cards, removeCardHandle }) {
    return (
        Array.isArray(cards) && cards.length > 0 ? (
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-evenly">
                {cards.map((card, index) => (
                    <Col key={index} className="d-flex justify-content-center">
                        <BusinessCard cardId={index} cardDetails={card} removeCardHandle={removeCardHandle} />
                    </Col>
                ))}
                
            </Row>
        ) : (
            <div className="d-flex justify-content-center text-white">
                <h1>No cards yet...</h1>
            </div>
        )
    );
}