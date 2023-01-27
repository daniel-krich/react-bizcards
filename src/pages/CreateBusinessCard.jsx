import { useContext } from 'react';
import { appendCardToUserLocalStorage } from '../services/businessCardsService';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { CreateBusinessCard as CreateBusinessCardForm } from '../components';
import { BusinessCardModel } from '../models/BusinessCardModel';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function CreateBusinessCard() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmitCard = (event) => {
        event.preventDefault();
        try {
            const card = new BusinessCardModel(event.target.businessName.value,
                event.target.businessDescription.value,
                event.target.businessAddress.value,
                event.target.businessPhone.value,
                event.target.businessImageUrl.value);
            
            const updatedUser = appendCardToUserLocalStorage(user.id, card);
            setUser(updatedUser);

            toast.success('Card creation completed', { position: toast.POSITION.TOP_RIGHT });
            navigate('/business-cards');
        }
        catch(error) {
            toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
        }
    };

    return (
        <Container className="bg-white rounded p-4">
            <h1>Add a new card</h1>
            <CreateBusinessCardForm createBusinessCardHandle={handleSubmitCard} submitLabel="Create card" />
        </Container>
    );
}