import './Button.scss';

const clickLocation = (location) => {
    // este location lo saca de abajo en props.locationName
    console.log(location)
} 

export default function Button(props) {
   
    return (
        // callback para sacar la función fuera 
        <button onClick={() => clickLocation(props.locationName)}>Saber más</button>

    )
}