import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerLocalStorage, checkUserExistance } from '../services/authService';
import { Form, Button, Container } from 'react-bootstrap';
import RegisterForm from '../features/authentication/forms/RegisterForm';
import { UserType } from '../models/UserModel';
import { toast } from 'react-toastify';
import CreateBusinessCard from '../components/forms/CreateBusinessCard';
import { BusinessCardModel } from '../models/BusinessCardModel';

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
            toast.success(`Registration completed, ${registerCredentials.name}`, { position: toast.POSITION.TOP_RIGHT });
            navigate('/login');
        }
        catch {
            toast.error('Email already exists.', { position: toast.POSITION.TOP_RIGHT });
        }
    };

    return (
        <Container>
            <h1>Business Register</h1>
            {registerCredentials ? <CreateBusinessCard createBusinessCardHandle={handleSubmitCard} /> : <RegisterForm registerHandle={handleSubmitRegister} />}
        </Container>
    );
}