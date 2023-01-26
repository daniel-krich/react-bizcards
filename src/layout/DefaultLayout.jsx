import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import './DefaultLayout.scss';

export default function DefaultLayout() {

    return (
        <main className="default-layout">
            <Navbar />
            <div className="main">
                <div className="main-content m-4">
                    <Suspense fallback={<LoadingOverlay />}>
                        <Outlet />
                    </Suspense>
                </div>
                <Footer />
            </div>
        </main>
    );
}