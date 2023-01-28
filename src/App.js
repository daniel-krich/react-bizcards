import Router from "./Router";
import { ToastContainer } from 'react-toastify';
import { UserContextProvider } from "./context/UserContext";

export default function App() {
    return (
        <UserContextProvider>
            <Router />
            <ToastContainer />
        </UserContextProvider>
    );
}