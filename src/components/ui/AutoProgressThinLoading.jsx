import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './LoadingOverlay.scss';

export default function AutoProgressThinLoading({ startFrom, msByPercent }) {
    const [progress, setProgress] = useState(startFrom);
    useEffect(() => {
        let disposed = false;
        (async () => {
            for (let i = 0; i <= 100; i++) {
                if (!disposed) {
                    setProgress(i);
                    await new Promise((res) => setTimeout(() => res(), msByPercent));
                }
                else return;
            }
        })();
        return () => {
            disposed = true;
        };
    }, []);
    return (
        <ProgressBar style={{ borderRadius: 0, height: 3 }} now={progress} />
    );
}