import { useState } from 'react';

function Counter({
    ...props
}: {
    limitVal: number;
    opts: {
        min: number;
        max: number;
    };
}) {
    const { limitVal, opts } = props;
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <div
                className="flex items-center justify-center space-x-4"
                style={{ marginBottom: '1rem' }}
            >
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    onClick={() => setCount(count - 1)}
                    disabled={count <= opts.min}
                >
                    -
                </button>
                <span>{count}</span>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                    onClick={() => setCount(count + 1)}
                    disabled={count >= opts.max}
                >
                    +
                </button>
            </div>
            <br></br>
            <div className="conditional">
                {count == limitVal ? null : count < limitVal ? (
                    <span>Count is less than {limitVal}</span>
                ) : (
                    <span>Count is greater than {limitVal}</span>
                )}{' '}
                <span>and its current value is {count}</span>
            </div>
        </div>
    );
}

export default Counter;
