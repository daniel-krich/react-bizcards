import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginLocalStorage } from '../services/authService';
import { setUser } from '../store/authReducer';
import { toast } from 'react-toastify';
import LoginForm from '../features/authentication/forms/LoginForm';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const user = loginLocalStorage(event.target.email.value, event.target.password.value);
            dispatch(setUser(user));
            toast.success(`Hello, ${user.name}`, { position: toast.POSITION.TOP_RIGHT });
            navigate('/');
        }
        catch {
            toast.error('Invalid email or password.', { position: toast.POSITION.TOP_RIGHT });
        }
    }
    return (
        <Container>
            <h1>Login</h1>
            <LoginForm loginHandle={handleSubmit} />
        </Container>
    );
}