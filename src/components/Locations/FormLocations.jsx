import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { postLocations } from '../../api/apiLocations';


/* import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../App'; */

const INITIAL_STATE = {
    name: '',
    residents: '',
    img: ''
}
const FormLocations = (props) => {

    /* const {data1 ,setData} = useContext(DataContext) */

    /* const INITIAL_STATE_LIST_CHARACTERS = props.characters */

    const [location, setLocation] = useState(INITIAL_STATE);

    const navigate = useNavigate()

    /* const [listCharacters, setListCharacters] = useState(INITIAL_STATE_LIST_CHARACTERS) */


    /* const [listCharacters, setListCharacters] = useState(data1.character) */ // este no hace falta creo

    const handleInput = (e) => {
        const { name, value } = e.target
        setLocation({ ...location, [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        /* const dataCopy= {...data1}
        dataCopy.characters.push(character)
        setData(dataCopy) */
        addLocation();
    }

    const addLocation= async () => {
        try {
            const newLocation = await postLocations(location);
            if(newLocation) {
                navigate('/locations')
            }
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <h2>Formulario Lugares</h2>
            <section className="section-create">
                <form onSubmit={submitForm}>
                    <fieldset>
                        <label>
                            <p>Nombre</p>
                            <input type='text' name='name' value={location.name} onChange={handleInput} />
                        </label>
                        <label>
                            <p>Habitantes</p>
                            <input type='text' name='residents' value={location.residents} onChange={handleInput} />
                        </label>
                        <label>
                            <p>Imagen</p>
                            <input type='text' name='img' value={location.img} onChange={handleInput} />
                        </label>
                        <div>
                            <button style={{margin:`2rem 0`,padding: `0.5rem`,width: `50%`,border: `1px solid white`,background: `rgb(253, 240, 213)`,color: `rgb(51, 24, 50)`}} type='submit'>Guardar Personaje</button>
                        </div>
                    </fieldset>
                </form>
                {/* <div>
                    <p>Nombre: {location.name}</p>
                    <p>Habitantes: {location.residents}</p>
                    <p>Imagen: {location.img}</p>
                    <div >
                        {location.img ? (<img src={location.img} alt={location.name} width="200px" />) : null}
                    </div>
                </div> */}
            </section>
        </>
    )
}
export default FormLocations