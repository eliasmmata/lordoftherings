import React, { useEffect, useState } from 'react';
import { deleteCharacter, getCharacters } from '../../api/apiCharacters';
import ButtonCharacter from '../ButtonCharacter/ButtonCharacter';
import './Characters.scss';

/* import { useContext } from 'react';
import { DataContext } from '../../App';
 */

const Characters = () => {
    //quito props de los parentesis de arriba al usar use context

    // setData no es obligatorio ponerlo solo si lo uso (SIN API)
    /* const {data1 ,setData} = useContext(DataContext) */

    // LLAMADA API
    const [characters, setCharacters] = useState([])

    const getCharactersApi = async () => {
        try {
            const data = await getCharacters();
            setCharacters(data)

        } catch(error) {
            console.error(error)
        }
    }

    const delCharacter = async(id) => {
        try {
            await deleteCharacter(id);
            const newElements = characters.filter(item => item._id !== id);
            setCharacters(newElements)

        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCharactersApi();
    }, []);

    return (
        <>
            <h2>Personajes</h2>
            <div className="characters-grid">
                {/* cambio props por data1 , quito data1 al ir por api */}
                {characters.map(item => {
                    return (
                        <div className="card" key={JSON.stringify(item)} >
                            <h3 style={{minHeight:`5vh` }}>{item.name}</h3>
                            <p>Hijo de {item.father}</p>
                            {item.img
                            ? <img style={{width: `100%`, minHeight:`30vh` }} src={item.img} alt={item.name} />
                            : <img style={{width: `100%`, minHeight:`30vh` }} src= 'https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg' alt={item.name} />
                            }
                            <p>Raza: {item.race}</p>
                            <p>Origen: {item.origin}</p>
                            <button onClick={() => delCharacter(item._id)} style={{cursor: `not-allowed`}}>Borrar</button>
                            <ButtonCharacter/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Characters

