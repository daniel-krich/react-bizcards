import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { Footer } from "../components";
import { CustomNavbar, AutoProgressThinLoading } from "../components";
import { LoadingOverlay } from "../components";
import './DefaultLayout.scss';
import { useUserDetails } from "../context/UserContext";
import { logoutLocalStorage } from "../services/authService";
import { toast } from "react-toastify";

export default function DefaultLayout() {
    const [user, setUser] = useUserDetails();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const logoutAction = () => {
        logoutLocalStorage();
        setUser(null);
        toast.warn('Logged out.', {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/');
    };

    return (
        <main className="default-layout">
            <CustomNavbar title="Bizcards" user={user} logoutAction={logoutAction} pathname={pathname} />

            <div className="main">
                <div className="main-content">
                    <Suspense fallback={<AutoProgressThinLoading startFrom={0} msByPercent={20} />}>
                        <div className="m-4">
                            <Outlet />
                        </div>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </main>
    );
}