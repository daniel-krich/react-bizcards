import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import GuestOnly from "./guards/GuestOnly";
import BusinessOnly from "./guards/BusinessOnly";
import DefaultLayout from "./layout/DefaultLayout";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const BusinessCards = lazy(() => import('./pages/BusinessCards'));
const CreateBusinessCard = lazy(() => import('./pages/CreateBusinessCard'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const BusinessRegister = lazy(() => import('./pages/BusinessRegister'));

export default function RoutesConfig() {
    return (
        <BrowserRouter /*basename="/react-bizcards"*/>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="login" element={<GuestOnly component={Login} fallback={'/'} />} />
                    <Route path="register" element={<GuestOnly component={Register} fallback={'/'} />} />
                    <Route path="business-register" element={<GuestOnly component={BusinessRegister} fallback={'/'} />} />
                    <Route path="business-cards" element={<BusinessOnly component={BusinessCards} fallback={'/login'} />} />
                    <Route path="business-cards/create" element={<BusinessOnly component={CreateBusinessCard} fallback={'/login'} />} />
                    <Route path="*" element={<Navigate to={'/'} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}