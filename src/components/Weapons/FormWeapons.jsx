import React, { useState } from 'react';
import { postWeapon } from '../../api/apiCharacters';
import { useNavigate } from 'react-router';


const INITIAL_STATE = {
    name: '',
    type: '',
    owner: '',
    img: ''
}

const FormWeapons = (props) => {

    /* const INITIAL_STATE_LIST_WEAPONS = props.weapons */

    const [weapon, setWeapon] = useState(INITIAL_STATE);

    /* const [listWeapons, setListWeapons] = useState(INITIAL_STATE_LIST_WEAPONS); */

    const navigate = useNavigate()

    const handleInput = (e) => {
        const {name, value} = e.target;
        setWeapon({...weapon,[name]:value})
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        /* setListWeapons([...listWeapons, weapon]) */
        addWeapon()
    }

    const addWeapon = async () => {
        try {
            const newWeapon= await postWeapon(weapon);
            if(newWeapon) {
                navigate('/weapons')
            }
        } catch(error) {
            console.error(error)
        }
    }


    return(
        <>
        <h2>Formulario Armas</h2>
        <section className="section-create">
            <form onSubmit={submitForm}>
                <fieldset>
                    <label>
                        <p>Nombre</p>
                        <input type='text' name='name' value={weapon.name} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Tipo</p>
                        <input type='text' name='type' value={weapon.type} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Dueño</p>
                        <input type='text' name='owner' value={weapon.owner} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Imagen</p>
                        <input type='text' name='img' value={weapon.img} onChange={handleInput} />
                    </label>
                    <div>
                        <button style={{margin:`2rem 0`,padding: `0.5rem`,width: `50%`,border: `1px solid white`,background: `rgb(253, 240, 213)`,color: `rgb(51, 24, 50)`}} type='submit'>Guardar Personaje</button>
                    </div>
                </fieldset>
            </form>
            {/* <div>
                <p>Nombre: {weapon.name}</p>
                <p>Raza: {weapon.type}</p>
                <p>Origen: {weapon.owner}</p>
                <div >
                    {weapon.img ? (<img src={weapon.img} alt={weapon.name} width="200px" />) : null}
                </div>
            </div> */}
        </section>
    </>
    )
}

export default FormWeapons