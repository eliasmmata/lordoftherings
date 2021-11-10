import React ,{useEffect, useState} from 'react';
import { useContext } from 'react';
import { getWeapons } from '../../api/apiCharacters';
import { DataContext } from '../../App';

import '../Locations/Locations.scss'

export default function Weapons() {

    /*     const {data1:{weapons} ,setData} = useContext(DataContext) */

    const [weapons, setWeapons] = useState([])

    const getWeaponsApi = async () => {
        try {
            const data = await getWeapons();
            setWeapons(data)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getWeaponsApi();
    }, []);

    return (
        // callback para sacar la función fuera 
        <>
            <h2 style={{ display: 'block' }}>Weapons</h2>
            <section className="locations-grid" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '1rem', border: '10px solid #fdf0d5' }}>
                {weapons.map((weapon, i) =>
                    <div className="card" key={JSON.stringify(weapon)}>
                        <h3>{weapon.name}</h3>
                        {weapon.img
                            ? <img style={{width: `100%`, minHeight:`25vh` }}src={weapon.img} alt={weapon.name} />
                            : <img style={{width: `100%`, minHeight:`25vh` }}src= 'https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg' alt={weapon.name} />
                            }
                        <p>Tipo: {weapon.type}</p>
                        <p>Dueño: {weapon.owner}</p>
                        <p>{weapon.description}</p>
                    </div>
                )}
            </section>
        </>
    )
}