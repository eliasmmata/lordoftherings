import React, { useEffect, useState } from 'react';
import { getItems } from '../../api/apiCharacters';
import ButtonCharacter from '../ButtonCharacter/ButtonCharacter';
import './../Characters/Characters.scss';



/* import { useContext } from 'react';
import { DataContext } from '../../App';
 */

const Items = () => {
    //quito props de los parentesis de arriba al usar use context

    // setData no es obligatorio ponerlo solo si lo uso (SIN API)
    /* const {data1 ,setData} = useContext(DataContext) */

    // LLAMADA API
    const [items, setItems] = useState([])

    const getItemsApi = async () => {
        try {
            const data = await getItems();
            setItems(data)

        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getItemsApi();
    }, []);

    return (
        <>
            <h2>Objetos</h2>
            <div className="characters-grid">
                {/* cambio props por data1 , quito data1 al ir por api */}
                {items.map(item => {
                    return (
                        <div className="card" key={JSON.stringify(item)} >
                            <h3 style={{minHeight:`5vh` }}>{item.name}</h3>
                            {item.img
                            ? <img style={{width: `100%`, minHeight:`25vh` }}src={item.img} alt={item.name} />
                            : <img style={{width: `100%`, minHeight:`25vh` }}src= 'https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg' alt={item.name} />
                            }
                            <ButtonCharacter/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Items