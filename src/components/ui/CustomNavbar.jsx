import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authorizedMenu, authorizedBusinessMenu, visitorMenu } from '../../data/menu-data';
import { UserType } from '../../models/UserModel';
import { logoutLocalStorage } from '../../services/authService';
import { conditionalClassNames } from '../../helpers/conditionalClassNames';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function CustomNavbar() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const userType = user?.type ?? null;

    let currentMenu = visitorMenu;
    if (userType === UserType.Regular) {
        currentMenu = authorizedMenu;
    }
    else if (userType === UserType.Business) {
        currentMenu = authorizedBusinessMenu;
    }

    const logoutAction = () => {
        logoutLocalStorage();
        setUser(null);
        toast.warn('Logged out', {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    };

    return (
        <Navbar bg="light" variant="light" className='shadow'>
            <Container>
                <Navbar.Brand>Bizcards</Navbar.Brand>
                <Nav className="me-auto">
                    {currentMenu.map((route, index) => (
                        <li key={index} className="nav-item">
                            <Link className={conditionalClassNames('nav-link', route.link === location.pathname && 'active')} to={route.link}>{route.label}</Link>
                        </li>
                    ))}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    {user && userType != UserType.Visitor && (
                        <NavDropdown title={`Logged in as (${user.name})`} menuVariant="light">
                            <NavDropdown.Item onClick={() => logoutAction()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}