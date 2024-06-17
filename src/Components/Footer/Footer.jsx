import './Footer.css'
import aluraLogo from '../../assets/LogoMain.svg'

function Footer() {
    return (
        <footer className="main-footer">
            <img className='footer-logo' src={aluraLogo}/>
        </footer>
    );
}

export default Footer;