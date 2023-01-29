import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authorizedMenu, authorizedBusinessMenu, visitorMenu } from '../../data/menu-data';
import { UserType } from '../../models/UserModel';
import { conditionalClassNames } from '../../helpers/conditionalClassNames';

export default function CustomNavbar({ children, title, user, logoutAction, pathname }) {

    const userType = user?.type ?? null;

    let currentMenu = visitorMenu;
    if (userType === UserType.Regular) {
        currentMenu = authorizedMenu;
    }
    else if (userType === UserType.Business) {
        currentMenu = authorizedBusinessMenu;
    }

    return (
        <Navbar bg="light" variant="light" className="position-relative shadow flex-wrap">
            <Container>
                <Navbar.Brand>{title}</Navbar.Brand>
                <Nav className="me-auto flex-wrap">
                    {currentMenu.map((route, index) => (
                        <li key={index} className="nav-item">
                            <Link className={conditionalClassNames('nav-link', (route.link.length > 1 ? pathname.startsWith(route.link) : route.link === pathname) && 'active')} to={route.link}>{route.label}</Link>
                        </li>
                    ))}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    {user && userType !== UserType.Visitor && (
                        <NavDropdown title={`Logged in as (${user.name})`} menuVariant="light">
                            <NavDropdown.Item onClick={() => logoutAction()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    )}
                </Navbar.Collapse>
            </Container>
            {children}
        </Navbar>
    );
}