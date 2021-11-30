import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PetsService from '../services/PetsService'
import UsersService from '../services/UsersService'
import { useCookies } from 'react-cookie'
import jwtParser from '../utils/jwtParser'

const PetDetails = () => {
    const [pet, setPet] = useState({})
    const { petId } = useParams()
    const cookies = useCookies(['name'])
    const { jwt } = cookies[0]
    const { userId } = jwtParser(jwt)

    const [notification, setNotification] = useState('')

    useEffect(() => {
        const fetchPet = async () => {
            const res = await PetsService.getById(petId)
            setPet(res.data)
        }

        fetchPet()
    }, [])

    const adopt = async () => {
        const res = await UsersService.adopt(petId, userId)
        if (res.data?.owner === userId) {
            setNotification('Successful adoption!')
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-7" style={{ marginTop: '190px' }}>
                    <div className="card p-3 py-4">
                        <div className="text-center">
                            <img src={pet?.imageUrl} width="200" /> </div>
                        <div className="text-center mt-3">
                            <h5 className="mt-2 mb-0">{pet?.name}</h5>
                            <span>{new Date(pet?.date).toLocaleDateString()}</span>
                            <div className="px-4 mt-1">
                                <p className="fonts">{pet?.description}</p>
                            </div>
                            {pet?.owner === userId ? (
                                <React.Fragment>
                                    <button className="btn btn-warning">Adopted</button>
                                    <button className="card-button">Back to the shelter</button>
                                </React.Fragment>
                            ) : (
                                <div className="buttons">
                                    <button onClick={adopt} className="btn btn-outline-primary px-4">Adoption</button>
                                </div>
                            )}

                            {notification ? (<p className="alert alert-info">{notification}</p>) : <React.Fragment></React.Fragment>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetDetails