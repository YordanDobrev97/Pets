
const Pets = ({ pets, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    console.log(pets)
    return (
        <>
            {pets.map((pet) => {
                console.log(pet)
                return (
                    <article key={pet._id} className="border">
                        <h3 className="text-white text-center">{pet.name}</h3>
                        <img src={pet.imageUrl} alt="pet image" />
                        <p className="text-white text-center">{new Date(pet.date).toLocaleDateString()}</p>
                        <button className="btn btn-info details-btn">Details</button>
                    </article>
                )
            })}
        </>
    )
}

export default Pets