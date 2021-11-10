import './ButtonCharacter.scss'

const clickCharacter = (name) => {
    console.log(name)
     
}

function mouseOver(name) {
    console.log(name)
  }



export default function ButtonCharacter(props) {
   
    return (
        // callback para sacar la función fuera 

        <button className ="buttonOne" onMouseOver={() => mouseOver(props.valueName)} onClick={() => clickCharacter(props.valueName)}>Saber más</button>

        // este valueName se pone luego en el button de donde lo meta
        
    )
}