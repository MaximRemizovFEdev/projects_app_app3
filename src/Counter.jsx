import React, { useState } from 'react';

const Counter = ({text}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>App2 - Counter</h2>
            {text && <p>{text}</p>}
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    );
};

export default Counter; 