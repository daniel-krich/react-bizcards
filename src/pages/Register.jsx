import { useNavigate } from 'react-router-dom';
import { registerLocalStorage } from '../services/authService';
import { Container } from 'react-bootstrap';
import { RegisterForm } from '../features/authentication';
import { UserType } from '../models/UserModel';
import { toast } from 'react-toastify';

export default function Register() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            registerLocalStorage(event.target.email.value, event.target.password.value, event.target.name.value, UserType.Regular);
            toast.success(`Registration completed, ${event.target.name.value}`, { position: toast.POSITION.TOP_RIGHT });
            navigate('/login');
        }
        catch {
            toast.error('Email already exists.', { position: toast.POSITION.TOP_RIGHT });
        }
    }
    return (
        <Container className="bg-white rounded p-4">
            <h1>Registration</h1>
            <RegisterForm registerHandle={handleSubmit} submitLabel="Register" />
        </Container>
    );
}