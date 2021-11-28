import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PetsService from '../services/PetsService'

const AddPet = () => {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    const addPet = async () => {
        await PetsService.add(name, image, description)
        navigate('/gallery')
    }

    return (
        <section className="row" style={{ padding: '20%' }}>
            <div className="col-lg-12">
                <label className="display-5 text-white">Name</label>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="col-lg-12">
                <label className="text-white">URL</label>
                <input type="text" className="form-control" onChange={(e) => setImage(e.target.value)} value={image} />
            </div>

            <div className="col-lg-12">
                <label className="text-white">Description</label>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" placeholder="Description..." />
            </div>

            <div className="col-lg-12 text-center">
                <button className="btn btn-primary mt-3 w-50" onClick={addPet}>Add</button>
            </div>
        </section>
    )
}

export default AddPet