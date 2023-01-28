import { Button, Container } from 'react-bootstrap';
import { BusinessCardList } from '../features/business-cards';
import { useUserDetails } from '../context/UserContext';
import { removeCardFromUserLocalStorage } from '../services/businessCardsService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BusinessCards() {
    const [user, setUser] = useUserDetails();
    const navigate = useNavigate();

    const removeCard = (cardId) => {
        toast.success(`Removed "${user.businessCards[cardId].name}" card.`, {
            position: toast.POSITION.TOP_RIGHT
        });
        const updatedUser = removeCardFromUserLocalStorage(user.id, cardId);
        setUser(updatedUser);
    };

    return (
        <Container>
            <h1 className="text-center m-0 mb-3 text-white">Business cards</h1>
            <div className="d-flex justify-content-center mb-5">
                <Button className="ms-3" variant="light" onClick={() => navigate('/business-cards/create')}>Create a new card</Button>
            </div>
            <BusinessCardList cards={user?.businessCards} removeCardHandle={removeCard} />
        </Container>
    );
}