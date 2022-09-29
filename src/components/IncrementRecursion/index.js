import React, {useState} from 'react';

const IncrementRecursion = ({nb=0}) => {

    const [counter, setCounter] = useState(0);

    return (
        <div style={{marginLeft:"20px", marginTop:"20px"}}>
            - {nb+1}
            <button onClick={() => {
               setCounter(counter + 1)
            }}>+</button>
            <button onClick={() => {
                if (counter > 0) setCounter(counter - 1)
            }}>-</button>
            {
                Array.from({length:counter}).map((_,index)=>
                    <div key={index + counter}>
                        <IncrementRecursion nb={index}/>
                    </div>
                )
            }
        </div>
    );
};

export default IncrementRecursion;