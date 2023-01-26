import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authorizedMenu, authorizedBusinessMenu, visitorMenu } from '../../data/menu-data';
import { useDispatch, useSelector } from "react-redux";
import { UserType } from '../../models/UserModel';
import { nullifyUser } from '../../store/authReducer';
import { logoutLocalStorage } from '../../services/authService';
import { conditionalClassNames } from '../../helpers/conditionalClassNames';
import { toast } from 'react-toastify';

export default function CustomNavbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const userType = useSelector((state) => state.auth.user?.type ?? null);
    const dispatch = useDispatch();

    let currentMenu = visitorMenu;
    if (userType === UserType.Regular) {
        currentMenu = authorizedMenu;
    }
    else if (userType === UserType.Business) {
        currentMenu = authorizedBusinessMenu;
    }

    const logoutAction = () => {
        logoutLocalStorage();
        dispatch(nullifyUser());
        toast.warn('Logged out', {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Bizcards</Navbar.Brand>
                <Nav className="me-auto">
                    {currentMenu.map((route, index) => (
                        <li key={index} className="nav-item">
                            <Link className={conditionalClassNames('nav-link', route.link === location.pathname && 'active')} to={route.link}>{route.label}</Link>
                        </li>
                    ))}

                    {userType != UserType.Visitor && (
                        <li className="nav-item">
                            <a role="button" className="nav-link" onClick={() => logoutAction()}>Logout</a>
                        </li>
                    )}

                </Nav>
            </Container>
        </Navbar>
    );
}