import { useState } from "react";

const Form = () => {

    const [create,setCreate] = useState({
        name: '',
        description:'',
        genres:'',
        image: '',
        rating: '',
        platform: '',
        release: '',
    });

    const handleChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;

        setCreate({
            ...create,
            [property] : value
        })
    }

    return (
        <>
            <h1>Este es el Form</h1>
            <div>
                <label>Name: </label>
                <input type="text" value={create.name} onChange={handleChange} name="name"/>
            </div>

            <div>
                <label>Description</label>
                <input type="text" value={create.description} onChange={handleChange} name="description"/>
            </div>

            <div>
                <label>Genres: </label>
                <input type="text" value={create.genres} onChange={handleChange} name="genres"/>
            </div>

            <div>
                <label >Imagen: </label>
                <input type="text" value={create.image} onChange={handleChange} name="image"/>
            </div>

            <div>
                <label >Rating: </label>
                <input type="text" value={create.rating} onChange={handleChange} name="rating"/>
            </div>

            <div>
                <label >Platform: </label>
                <input type="text" value={create.platform} onChange={handleChange} name="platform"/>
            </div>

            <div>
                <label >Release: </label>
                <input type="text" value={create.release} onChange={handleChange} name="release"/>
            </div>
        </>
    )
}

export default Form;