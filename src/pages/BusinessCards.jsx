import { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { BusinessCardList } from '../features/business-cards';
import { UserContext } from '../context/UserContext';
import { removeCardFromUserLocalStorage } from '../services/businessCardsService';
import { useNavigate } from 'react-router-dom';

export default function BusinessCards() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const removeCard = (cardId) => {
        const updatedUser = removeCardFromUserLocalStorage(user.id, cardId);
        setUser(updatedUser);
    };

    return (
        <Container className="white-transparent-bg p-4 rounded">
            <h1 className="text-center m-0 mb-3 text-white">Business cards</h1>
            <div className="d-flex justify-content-center mb-5">
                <Button className="ms-3" variant="light" onClick={() => navigate('/business-cards/create')}>Create a new card</Button>
            </div>
            <BusinessCardList cards={user?.businessCards} removeCardHandle={removeCard} />
        </Container>
    );
}