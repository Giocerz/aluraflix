import './Header.css'
import aluraLogo from '../../assets/LogoMain.svg'
import newVideoIcon from '../../assets/NuevoVideo.svg'
import homeIcon from '../../assets/HomeIcon.svg'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
    const location = useLocation();
    const [btnSelected, setBtnSelected] = useState(true);

    useEffect(() => {
        if(location.pathname == '/') {
            setBtnSelected(true);
        } else if(location.pathname == '/new') {
            setBtnSelected(false);
        }
    }, [location.pathname]);

    const styleBtnSelected = (selected) => {
        return selected ? 'select-btn' : '';
    }

    return (
        <>
            <header className="main-header">
                <img className='header-logo' src={aluraLogo} />
                <nav>
                    <Link className={`home-btn header-btn ${styleBtnSelected(btnSelected)}`} to={'/'}>Home</Link>
                    <Link className={`new-btn header-btn ${styleBtnSelected(!btnSelected)}`} to={'/new'}>New</Link>
                </nav>
            </header>
            <header className="mobile-header">
                <nav>
                    <Link className='home-btn-mobile' to={'/'}><img src={homeIcon}/><span>Home</span></Link>
                    <Link className='new-btn-mobile' to={'/new'}><img src={newVideoIcon}/></Link>
                </nav>
            </header>
        </>
    );
}

export default Header;