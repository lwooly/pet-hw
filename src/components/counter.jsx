import { useState } from "react"
import Controls from "./counterControls"

function Counter () {
    //set counter to 0 initially
    const [count, setCount] = useState(0)


    const reduceCountFn = () => {
        setCount(count - 1)
    }

    const increaseCountFn = () => {
        setCount(count + 1)
    }

    return (
        <div style={{backgroundColor: 'darkgrey', marginBottom: '2em', padding: '1em'}}>
            <p>Count: {count}</p>
            <Controls increaseCountFn={increaseCountFn} reduceCountFn={reduceCountFn}/>
        </div>
    )

}

export default Counter