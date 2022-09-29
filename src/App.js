import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import IncrementRecursion from "./components/IncrementRecursion";

const App = () => {
    const [count, setCount] = useState(1);
    const [rgb,setRGB] = useState(0)

    useEffect(() => {
        setRGB(count%255)
    },[count])

    return (
        <div className="App">
            <div className="App-header">
                <div>{count}</div>
                {
                    [1,2,3,4,5].map((v) => {
                        return (<Counter count={count} setCount={setCount} step={10**v} text={`Count by 10 to power ${v}`}/>)
                    })
                }

                {/*<IncrementRecursion />*/}

            </div>
        </div>
    );
}

export default App;
