import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FallbackContext = createContext(null);

export function useFallback() {
    const fallback = useContext(FallbackContext);
    return fallback;
}

export function FallbackContextProvider({ children }) {
    const fallbackState = useState({
        component: null,
        isLoading: true
    });
    return (
        <FallbackContext.Provider value={fallbackState}>
            {children}
        </FallbackContext.Provider>
    );
}

export function FallbackPlaceholder() {
    const [fallback, setFallback] = useFallback();
    const fallbackComponent = useMemo(() => fallback.component, [fallback.component]);
    useEffect(() => {
        setFallback(previousFallback => ({
            ...previousFallback,
            isLoading: true
        }));
        return () => {
            setFallback(previousFallback => ({
                ...previousFallback,
                isLoading: false
            }));
        };
    }, []);
    return (
        <div style={{ pointerEvents: 'none' }}>
            {fallbackComponent}
        </div>
    );
}

export function FallbackPageMemoizer({ children }) {
    const [_, setFallback] = useFallback();
    useEffect(() => {
        setFallback(fallback => ({
            ...fallback,
            component: children
        }));
    }, [children]);
    return children;
}