import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PetsService from '../services/PetsService'

const PetDetails = () => {
    const [pet, setPet] = useState({})
    const { petId } = useParams()

    useEffect(() => {
        const fetchPet = async () => {
            const res = await PetsService.getById(petId)
            setPet(res.data)
        }

        fetchPet()
    }, [])

    console.log(pet)
    return (
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7" style={{ marginTop: '190px' }}>
                    <div class="card p-3 py-4">
                        <div class="text-center">
                            <img src={pet?.imageUrl} width="200" /> </div>
                        <div class="text-center mt-3">
                            <h5 class="mt-2 mb-0">{pet?.name}</h5>
                            <span>{new Date(pet?.date).toLocaleDateString()}</span>
                            <div class="px-4 mt-1">
                                <p class="fonts">{pet?.description}</p>
                            </div>
                            <div class="buttons">
                                <button class="btn btn-outline-primary px-4">Adoption</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetDetails