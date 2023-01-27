import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginLocalStorage } from '../services/authService';
import { toast } from 'react-toastify';
import { LoginForm } from '../features/authentication';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Login() {
    const [_, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const user = loginLocalStorage(event.target.email.value, event.target.password.value);
            setUser(user);
            toast.success(`Hello, ${user.name}`, { position: toast.POSITION.TOP_RIGHT });
            navigate('/');
        }
        catch {
            toast.error('Invalid email or password.', { position: toast.POSITION.TOP_RIGHT });
        }
    }
    return (
        <Container className="bg-white rounded p-4">
            <h1>Login</h1>
            <LoginForm loginHandle={handleSubmit} />
        </Container>
    );
}