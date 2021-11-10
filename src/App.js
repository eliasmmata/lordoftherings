import './App.css';
import React, { useState } from 'react';
import Characters from './components/Characters/Characters';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Locations from './components/Locations/Locations';
import Items from './components/Items/Items';
import Weapons from './components/Weapons/Weapons';
import Estado from './components/Estados/Estado';
import FormCharacters from './components/Characters/FormCharacters'
import FormWeapons from './components/Weapons/FormWeapons';
import FormItems from './components/Items/FormItems';
import FormLocations from './components/Locations/FormLocations';
import Effect from './components/Effect/Effect';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


// para poder utilizar los datos en otros componentes
export const DataContext = React.createContext(null)

function App() {



    // data1 lo creo yo y el data de useState es el del array
    /* const [data1, setData] = useState(data) */

    const [flag, setFlag] = useState(false);

    const [show, setShow] = useState(false)

    return (
        <div className="App">
                {/* englobo los componentes que van a usar mi variable */}
            <DataContext.Provider /* value={{data1, setData}} */>
                    <BrowserRouter>
                        <Navbar/>
                        {/* rutas dentro del data context  y browserRouter por encima de Navbar*/}   
                        <Routes>
                            <Route path='/characters' element={<Characters/>}></Route>
                            <Route path='/characters/create' element={<FormCharacters/>}></Route>
                            <Route path='/locations' element={<Locations/>}></Route>
                            <Route path='/locations/create' element={<FormLocations/>}></Route>
                            <Route path='/weapons' element={<Weapons/>}></Route>
                            <Route path='/weapons/create' element={<FormWeapons/>}></Route>
                            <Route path='/items' element={<Items/>}></Route>
                            <Route path='/items/create' element={<FormItems/>}></Route>
                        </Routes>
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                        </Routes>
                    </BrowserRouter>
                    
            {/*     <Effect />
                
                <FormCharacters characters={data.characters}/>
                
                <FormWeapons weapons={data.weapons}/>
                
                <FormObjects objects={data.objects}/>
                

                <button style={{width: `20%`, border: `1px solid white`, background:`#fdf0d5`, color:`#331832`}} onClick={() => setFlag(!flag)}>{flag ? 'Localizaciones' : 'Personajes'}</button>
                {flag ? <Locations/> : <Characters/>}
                
                <button onClick={() => setShow(!show)}>{show ? 'Objetos':'Armas'}</button>
                {!show ? <Objects objects={data.objects}/> : <Weapons weapons={data.weapons}/>}

                <Estado locations={data.locations} /> */}

            {/* hasta aquí va a leer data1 */}
            </DataContext.Provider>

            <Footer/>


        </div>
    );
}

export default App;