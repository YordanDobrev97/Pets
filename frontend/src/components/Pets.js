import { Link } from 'react-router-dom'

const Pets = ({ pets, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            {pets.map((pet) => {
                return (
                    <article key={pet._id} className="border">
                        <h3 className="text-white text-center">{pet.name}</h3>
                        <img width="300" height="200" src={pet.imageUrl} alt="pet image" />
                        <p className="text-white text-center">{new Date(pet.date).toLocaleDateString()}</p>
                        <Link to={`/pets/${pet._id}`} className="btn btn-info details-btn">Details</Link>
                    </article>
                )
            })}
        </>
    )
}

export default Pets