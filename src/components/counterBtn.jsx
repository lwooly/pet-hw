function CounterBtn ({change , countChangeFn}) {
    return (
        <button onClick={() => countChangeFn()}>{change}</button>
    )
}

export default CounterBtn