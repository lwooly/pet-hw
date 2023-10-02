function PetCard({ name, species, age, borderColor = 'black', image}) {

    const styles = {
        border: '4px solid',
        borderColor: borderColor,
        marginBottom: '2em'
    }


    return (
        <div style={styles} className="pet-card">
            <img className="pet-image" src={image} alt={name} />
            <h2>Name: {name}</h2>
            <p>Species: {species}</p>
            <p>Age: {age}</p>
        </div>
    )

}

export default PetCard