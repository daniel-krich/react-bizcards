import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import AuthorizedOnly from "./guards/AuthorizedOnly";
import DefaultLayout from "./layout/DefaultLayout";


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const BusinessCards = lazy(() => import('./pages/BusinessCards'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const BusinessRegister = lazy(() => import('./pages/BusinessRegister'));

export default function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/" element={< Home/>} />
                    <Route path="/about" element={< About/>} />
                    <Route path="/login" element={< Login/>} />
                    <Route path="/register" element={< Register/>} />
                    <Route path="/business-register" element={< BusinessRegister/>} />
                    <Route path="/business-cards" element={<AuthorizedOnly component={BusinessCards} fallback={'/'} />} />
                    <Route path="*" element={<Navigate to={'/'} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}