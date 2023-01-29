import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { Footer } from "../components";
import { CustomNavbar, AutoProgressThinLoading } from "../components";
import { LoadingOverlay } from "../components";
import './DefaultLayout.scss';
import { useUserDetails } from "../context/UserContext";
import { logoutLocalStorage } from "../services/authService";
import { toast } from "react-toastify";
import { FallbackPageMemoizer, useFallback, FallbackPlaceholder } from '../context/FallbackContext';

export default function DefaultLayout() {
    const [ fallback ] = useFallback();
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
            <CustomNavbar title="Bizcards" user={user} logoutAction={logoutAction} pathname={pathname}>
                { fallback.isLoading && <AutoProgressThinLoading startFrom={10} step={1} stepDelay={1} msByPercent={30} maxPercent={90} />}
            </CustomNavbar>
            
            <div className="main">
                <div className="main-content m-4">
                    <Suspense fallback={<FallbackPlaceholder />}>
                        <Outlet />
                    </Suspense>
                </div>
                <Footer />
            </div>
        </main>
    );
}