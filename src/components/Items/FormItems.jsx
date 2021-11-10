import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { postItem } from '../../api/apiCharacters';

const INITIAL_STATE = {
    name: '',
    img: ''
}

const FormObjects = (props) => {

    /* const INITIAL_STATE_LIST_OBJECTS = props.objects */

    const [item, setItem] = useState(INITIAL_STATE);

    const navigate = useNavigate()

    /* const [listObjects, setListObjects] = useState(INITIAL_STATE_LIST_OBJECTS); */

    const handleInput = (e) => {
        const {name, value} = e.target;
        setItem({...item,[name]:value})
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        addItem();
    }

    const addItem = async () => {
        try {
            const newItem= await postItem(item);
            if(newItem) {
                navigate('/items')
            }
        } catch(error) {
            console.error(error)
        }
    }



    return(
        <>
        <h2>Formulario Objectos</h2>
        <section className="section-create">
            <form onSubmit={submitForm}>
                <fieldset>
                    <label>
                        <p>Nombre</p>
                        <input type='text' name='name' value={item.name} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Imagen</p>
                        <input type='text' name='img' value={item.img} onChange={handleInput} />
                    </label>
                    <div>
                        <button style={{margin:`2rem 0`,padding: `0.5rem`,width: `50%`,border: `1px solid white`,background: `rgb(253, 240, 213)`,color: `rgb(51, 24, 50)`}} type='submit'>Guardar Objecto</button>
                    </div>
                </fieldset>
            </form>
            {/* <div>
                <p>Nombre: {item.name}</p>
                <div >
                    {item.img ? (<img src={item.img} alt={item.name} width="200px" />) : null}
                </div>
            </div> */}
        </section>
    </>
    )
}

export default FormObjects