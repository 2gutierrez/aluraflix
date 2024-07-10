import "./Footer.css"
import LogoMain from "Componentes/Footer/LogoMain.png"

const Footer=()=>{
    return (
        <div className="footer-container">
        <img className="LogoMain" src={LogoMain} alt='logo alura'/>
        </div>
    )
}

export default Footer