import CounterBtn from "./counterBtn"

function Controls ({reduceCountFn, increaseCountFn}) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}} className="controls">
                <CounterBtn change={'-'} countChangeFn={reduceCountFn}/>
                <CounterBtn change={'+'} countChangeFn={increaseCountFn}/>
            </div>
    )
}

export default Controls