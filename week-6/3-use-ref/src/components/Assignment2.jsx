import React, { useState, useRef, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. 
//Use useRef to create a variable that persists across renders 
//without causing additional renders when it changes.

export function Assignment2() {
    const [count, setCount] = useState(0);
    const totalRendered = useRef(0);

    const handleReRender = () => {
        setCount(count + 1);
    };

    totalRendered.current = totalRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {totalRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};