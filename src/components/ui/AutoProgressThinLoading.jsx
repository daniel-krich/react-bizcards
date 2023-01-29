import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './LoadingOverlay.scss';


const progressStyles = { position: 'absolute', bottom: 0, borderRadius: 0, height: 4, width: '100%' };

export default function AutoProgressThinLoading({ startFrom, msByPercent, step, stepDelay, maxPercent = 100 }) {
    const [progress, setProgress] = useState(startFrom);
    useEffect(() => {
        let disposed = false;
        (async () => {
            for (let i = startFrom + 1; i <= maxPercent; i++) {
                if (!disposed) {
                    if(i % step == 0) {
                        setProgress(i);
                        await new Promise((res) => setTimeout(() => res(), stepDelay));
                    }
                    else {
                        await new Promise((res) => setTimeout(() => res(), msByPercent));
                    }
                    
                }
                else return;
            }
        })();
        return () => {
            disposed = true;
        };
    }, []);
    return (<ProgressBar style={progressStyles} now={progress} />);
}