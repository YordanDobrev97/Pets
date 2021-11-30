import React, { useState, useEffect } from 'react'
import PetsService from '../services/PetsService'
import Pets from '../components/Pets'
import Pagination from '../components/Pagination'

const Gallery = () => {
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [petsPerPage] = useState(3)

    useEffect(() => {
        const fetchPets = async () => {
            setLoading(true)
            const res = await PetsService.getAll()
            setPets(res.data)
            setLoading(false)
        }

        fetchPets()
    }, [])

    const indexOfLastPost = currentPage * petsPerPage;
    const indexOfFirstPost = indexOfLastPost - petsPerPage;
    const currentPets = pets.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <React.Fragment>
            <section className="gallery">
                <Pets pets={currentPets} loading={loading} />

                <Pagination
                    petsPerPage={petsPerPage}
                    totalPets={pets.length}
                    paginate={paginate} />
            </section>
        </React.Fragment>
    )
}

export default Gallery