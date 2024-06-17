import './Header.css'
import aluraLogo from '../../assets/LogoMain.svg'
import newVideoIcon from '../../assets/NuevoVideo.svg'
import homeIcon from '../../assets/HomeIcon.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="main-header">
                <img className='header-logo' src={aluraLogo} />
                <nav>
                    <Link className='home-btn header-btn' to={'/'}>Home</Link>
                    <Link className='new-btn header-btn' to={'/new'}>New</Link>
                </nav>
            </header>
            <header className="mobile-header">
                <nav>
                    <Link className='home-btn-mobile' to={'/'}><img src={homeIcon}/><spa>Home</spa></Link>
                    <Link className='new-btn-mobile' to={'/new'}><img src={newVideoIcon}/></Link>
                </nav>
            </header>
        </>
    );
}

export default Header;