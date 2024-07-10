import ButtonContainer from "./ButtonContainer/ButtonContainer"
import "./Header.css"

const  Header=()=>{
    return (
    <header className="header">
        
        <img className="logo" src="/img/LogoMain.png" alt='logo alura'/>
        <ButtonContainer/>
        
       
     </header>
    )
}

export default Header