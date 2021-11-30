import { useState, useEffect } from 'react'
import UsersService from '../services/UsersService'
import { useCookies } from 'react-cookie'
import jwtParser from '../utils/jwtParser'
import Pets from '../components/Pets'
import Pagination from '../components/Pagination'

const UserPets = () => {
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [petsPerPage] = useState(3)
    const cookies = useCookies(['name'])

    useEffect(() => {
        const fetchPets = async () => {
            const { jwt } = cookies[0]
            const { userId } = jwtParser(jwt)
            const res = await UsersService.getPets(userId);
            console.log(res.data)
            setPets(res.data)
        }

        fetchPets()
    }, [])

    const indexOfLastPost = currentPage * petsPerPage;
    const indexOfFirstPost = indexOfLastPost - petsPerPage;
    const currentPets = pets.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className="gallery">
            <Pets pets={currentPets} loading={loading} />

            <Pagination
                petsPerPage={petsPerPage}
                totalPets={pets.length}
                paginate={paginate} />
        </section>
    )
}

export default UserPets