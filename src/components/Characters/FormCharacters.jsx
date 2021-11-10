import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { postCharacter } from '../../api/apiCharacters';


/* import { useContext } from 'react/cjs/react.development';
import { DataContext } from '../../App'; */

const INITIAL_STATE = {
    name: '',
    race: '',
    origin: '',
    father: '',
    img: ''
}
const FormCharacters = (props) => {

    /* const {data1 ,setData} = useContext(DataContext) */

    /* const INITIAL_STATE_LIST_CHARACTERS = props.characters */

    const [character, setCharacter] = useState(INITIAL_STATE);

    const navigate = useNavigate()

    /* const [listCharacters, setListCharacters] = useState(INITIAL_STATE_LIST_CHARACTERS) */


    /* const [listCharacters, setListCharacters] = useState(data1.character) */ // este no hace falta creo

    const handleInput = (e) => {
        const { name, value } = e.target
        setCharacter({ ...character, [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        /* const dataCopy= {...data1}
        dataCopy.characters.push(character)
        setData(dataCopy) */
        addCharacter();
    }

    const addCharacter = async () => {
        try {
            const newCharacter = await postCharacter(character);
            if(newCharacter) {
                navigate('/characters')
            }
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <h2>Formulario Personajes</h2>
            <section className="section-create">
                <form onSubmit={submitForm}>
                    <fieldset>
                        <label>
                            <p>Nombre</p>
                            <input type='text' name='name' value={character.name} onChange={handleInput} />
                        </label>
                        <label>
                            <p>Raza</p>
                            <input type='text' name='race' value={character.race} onChange={handleInput} />
                        </label>
                        <label>
                            <p>Origen</p>
                            <input type='text' name='origin' value={character.origin} onChange={handleInput} />
                        </label>
                        <label>
                            <p>Hijo de</p>
                            <input type='text' name='father' value={character.father} onChange={handleInput} />
                        </label>
                        <label>
                            <p>Imagen</p>
                            <input type='text' name='img' value={character.img} onChange={handleInput} />
                        </label>
                        <div>
                            <button style={{margin:`2rem 0`,padding: `0.5rem`,width: `50%`,border: `1px solid white`,background: `rgb(253, 240, 213)`,color: `rgb(51, 24, 50)`}} type='submit'>Guardar Personaje</button>
                        </div>
                    </fieldset>
                </form>
            {/*  <div>
                    <p>Nombre: {character.name}</p>
                    <p>Raza: {character.race}</p>
                    <p>Origen: {character.origin}</p>
                    <div >
                        {character.img ? (<img src={character.img} alt={character.name} width="200px" />) : null}
                    </div>
                </div> */}
            </section>
        </>
    )
}
export default FormCharacters