import React from 'react'
import { useState, useEffect } from 'react'
import PetsService from '../services/PetsService'

const Gallery = () => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        PetsService.getAll()
            .then(petRes => {
                setPets(petRes.data)
            })
    }, [])

    return (
        <React.Fragment>
            <section className="gallery">
                {pets && pets.map((pet, indx) => {
                    return (
                        <article className="border">
                            <h3 className="text-white text-center">{pet.name}</h3>
                            <img src={pet.imageUrl} alt="pet image" />
                            <p className="text-white text-center">{new Date(pet.date).toLocaleDateString()}</p>
                            <button className="btn btn-info details-btn">Details</button>
                        </article>
                    )
                })}
                <nav className="pagination-nav">
                    <ul className="pagination">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true"><i className="fa fa-chevron-left" aria-hidden="true"></i></span>
                            </a>
                        </li>
                        <li className="active"><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#">05</a></li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true"><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>


        </React.Fragment>
    )
}

export default Gallery