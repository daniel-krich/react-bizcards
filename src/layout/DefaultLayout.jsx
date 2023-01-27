import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Footer } from "../components";
import { CustomNavbar } from "../components";
import { LoadingOverlay } from "../components";
import './DefaultLayout.scss';

export default function DefaultLayout() {

    return (
        <main className="default-layout">
            <CustomNavbar />
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