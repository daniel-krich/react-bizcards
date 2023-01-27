import { Card, Button } from "react-bootstrap";
import './BusinessCard.scss';

export default function BusinessCard({ cardDetails, cardId, removeCardHandle }) {
    return (
        <Card className="position-relative shadow" style={{width: 300}}>
            <Card.Img src={cardDetails.imageUrl} />
            <Card.Body>
                <Card.Title as="h3">{cardDetails.name}</Card.Title>
                <Card.Title as="h5" className="mb-3">{cardDetails.description}</Card.Title>
                <hr />
                <Card.Text as="p"><b>Address:</b> {cardDetails.address}</Card.Text>
                <Card.Text as="p"><b>Phone:</b> {cardDetails.phone}</Card.Text>
                <Button className="position-absolute bottom-0 start-50 translate-middle-x m-2" variant="danger" onClick={() => removeCardHandle(cardId)}>Remove card</Button>
            </Card.Body>
        </Card>
    );
}