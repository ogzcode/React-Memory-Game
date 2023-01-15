import React, { useEffect, useState } from 'react';

function Clock(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (props.restart) {
            setCount(0);
        }
    });

    return (
        <p>Clock: <span>{parseInt(count / 60)}</span>:<span>{count % 60}</span></p>
    );
}

export default Clock;