import React, {useContext, useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import { getLocations } from '../../api/apiLocations';

import { DataContext } from '../../App';
import ButtonCharacter from '../ButtonCharacter/ButtonCharacter';
import './Locations.scss';


const Locations = () => {
    //console.log(locations)

    /* const {data1} = useContext(DataContext); */
    const [locations, setLocations] = useState([]);

    const getLocationsApi = async () => {
        try {
            const data = await getLocations();
            setLocations(data.data)
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getLocationsApi();
    }, []);


    return (
        <>
        <h2>Localizaciones</h2>
        <section style={{display: `flex`, justifyContent: `center`, margin: `0 auto`}}>
            <div className="locations-grid">
                {locations.map(item => {
                    return (
                        <div key={JSON.stringify(item)} className="card" style={{minHeight: `30vh` }}>
                            <h3>{item.name}</h3>
                            {item.img
                            ? <img style={{width: `100%`, minHeight:`25vh` }}src={item.img} alt={item.name} />
                            : <img style={{width: `100%`, minHeight:`25vh` }}src= 'https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg' alt={item.name} />
                            }
                            <p>Residentes: {item.residents}</p>
                            <ButtonCharacter/>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Locations