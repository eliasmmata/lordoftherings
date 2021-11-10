import { useState } from "react";
import Characters from "../Characters/Characters";
import Locations from "../Locations/Locations";


const initialStatePersonaje = {
    name: "",
    surname: "",
    age: 0
}
const data = {
    characters: [
        {
            name: "Legolas",
            race: "Elfo",
            origin: "Bosque Negro",
            father: "Thranduil",
            img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/9/1418145717190/a6fd861c-89be-4e0d-b3a0-042aa7fb5900-620x372.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=31e304b2a1d33031567a538899de9587"
        },
        {
            name: "Gimli",
            race: "Enano",
            origin: "Erebor",
            father: "Gloin",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Aragorn",
            race: "Humano",
            origin: "Gondor",
            father: "Arathorn",
            img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/9/1418145717190/a6fd861c-89be-4e0d-b3a0-042aa7fb5900-620x372.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=31e304b2a1d33031567a538899de9587"
        },
        {
            name: "Frodo Bolson",
            race: "Hobbit",
            origin: "La Comarca",
            father: "Drogo Bolson",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Sam",
            race: "Hobbit",
            origin: "La Comarca",
            father: "Hamfast Gamyi",
            img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/9/1418145717190/a6fd861c-89be-4e0d-b3a0-042aa7fb5900-620x372.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=31e304b2a1d33031567a538899de9587"
        },
        {
            name: "Meriadoc Brandigamo",
            race: "Hobbit",
            origin: "La Comarca",
            father: "Saradoc Brandigamo",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Peregrin Tuk",
            race: "Hobbit",
            origin: "La Comarca",
            father: "Paladin Tuk",
            img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/9/1418145717190/a6fd861c-89be-4e0d-b3a0-042aa7fb5900-620x372.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=31e304b2a1d33031567a538899de9587"
        },
        {
            name: "Bilbo Bolson",
            race: "Hobbit",
            origin: "La Comarca",
            father: "Bungo Bolson",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Gandalf",
            race: "Istar",
            origin: "Desconocido",
            father: "Desconocido",
            img: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/9/1418145717190/a6fd861c-89be-4e0d-b3a0-042aa7fb5900-620x372.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=31e304b2a1d33031567a538899de9587"
        },
        {
            name: "Boromir",
            race: "Humano",
            origin: "Gondor",
            father: "Denethor II",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        }
    ],
    locations: [
        {
            name: 'La Comarca',
            residents: 'Hobbits',
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: 'Minas Tirith',
            residents: 'Humanos',
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: 'Rohan',
            residents: 'Humanos',
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: 'Gondor',
            residents: 'Humanos',
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Rivendel",
            residents: "Elfos",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: 'El Bosque Negro',
            residents: "Elfos",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: 'Erebor',
            residents: 'Enanos',
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        }
    ],
    weapons: [
        {
            name: "Andúril",
            type: "Espada",
            owner: "Aragorn",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Dardo",
            type: "Daga",
            owner: "Frodo Bolson",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Orcrist",
            type: "Espada",
            owner: "Thorin",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Glamdring",
            type: "Espada",
            owner: "Gandalf",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Puñal de Morgul",
            type: "Daga",
            owner: "Rey Brujo",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Gúthwinë",
            type: "Espada",
            owner: "Eomer",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
    ],
    objects: [
        {
            name: "Anillo Único",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Mithril",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Palantír",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        },
        {
            name: "Piedra del Arca",
            img: "https://www.techgames.com.mx/wp-content/uploads/2020/12/The-Lord-of-the-Rings-Amazon.jpg"
        }
    ]

}

const Estados = () => {
    
    const [personaje, setPersonaje] = useState(initialStatePersonaje);

    const [flag, setFlag] =  useState(false)

    return(
        <>
        <div style={{ border: '10px solid yellow'}}>
            <button style={{ border: '1px solid white', background: 'black', marginTop: '1rem', width: '50%'}} 
            onClick={() => setFlag(!flag)}>{flag ? 'Personajes' : 'Localizaciones'}</button>
            <p style={{ color: 'white'}}>Valor de la bandera: {flag === true ? 'true' : 'false' }</p>

            {flag ? <Characters characters={data.characters}/> : <Locations locations={data.locations}/>}

            <div>
                <p>Personaje</p>
                <p>{personaje.name}</p>
                <input type="text" onChange={(e) => setPersonaje({...personaje, name:e.target.value})} />
            </div>
        </div>
        </>
    )
}

export default Estados
