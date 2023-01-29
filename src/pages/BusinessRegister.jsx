import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerLocalStorage, checkUserExistance } from '../services/authService';
import { Container } from 'react-bootstrap';
import { RegisterForm } from '../features/authentication';
import { UserType } from '../models/UserModel';
import { toast } from 'react-toastify';
import { CreateBusinessCard } from '../components';
import { BusinessCardModel } from '../models/BusinessCardModel';
import { FallbackPageMemoizer } from '../context/FallbackContext';

export default function BusinessRegister() {
    const navigate = useNavigate();
    const [registerCredentials, setRegisterCredentials] = useState(null);

    const handleSubmitRegister = (event) => {
        event.preventDefault();
        const regCred = {
            email: event.target.email.value,
            password: event.target.password.value,
            name: event.target.name.value,
            type: UserType.Business
        };
        if (!checkUserExistance(regCred.email)) {
            setRegisterCredentials(regCred);
        }
        else {
            toast.error('Email already exists.', { position: toast.POSITION.TOP_RIGHT });
        }
    };

    const handleSubmitCard = (event) => {
        event.preventDefault();
        try {
            const card = new BusinessCardModel(event.target.businessName.value,
                event.target.businessDescription.value,
                event.target.businessAddress.value,
                event.target.businessPhone.value,
                event.target.businessImageUrl.value);

            registerLocalStorage(registerCredentials.email, registerCredentials.password, registerCredentials.name, UserType.Business, [card]);
            toast.success(`Registration completed, ${registerCredentials.name}.`, { position: toast.POSITION.TOP_RIGHT });
            navigate('/login');
        }
        catch {
            toast.error('Email already exists.', { position: toast.POSITION.TOP_RIGHT });
        }
    };

    return (
        <FallbackPageMemoizer>
            <Container className="bg-white rounded p-4">
                <h1>Business Registration</h1>
                {
                    registerCredentials ?
                        <CreateBusinessCard createBusinessCardHandle={handleSubmitCard} submitLabel="Finish registration" />
                        :
                        <RegisterForm registerHandle={handleSubmitRegister} submitLabel="Continue" />
                }
            </Container>
        </FallbackPageMemoizer>
    );
}