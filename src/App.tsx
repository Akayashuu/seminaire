import { useState } from 'react';
import Counter from './components/Counter';
import CounterContainer from './components/CounterChildren';
import Input from './components/Input';

function App() {
    const [props, setProps] = useState({
        limitVal: 6,
        opts: {
            min: -1,
            max: 5,
        },
    });
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="space-y-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center turnAndSun">
                    <b>Counter App</b>
                </h1>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <CounterContainer children={<Counter {...props} />} />
                </div>
                <div className="space-y-4">
                    <Input
                        value={props.limitVal}
                        label={"Valeur Limite d'affichage"}
                        onChange={(value) =>
                            setProps({ ...props, limitVal: value })
                        }
                    />
                    <Input
                        value={props.opts.min}
                        label={'Valeur Minimale'}
                        onChange={(value) =>
                            setProps({
                                ...props,
                                opts: { ...props.opts, min: value },
                            })
                        }
                    />
                    <Input
                        value={props.opts.max}
                        label={'Valeur Maximale'}
                        onChange={(value) =>
                            setProps({
                                ...props,
                                opts: { ...props.opts, max: value },
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
