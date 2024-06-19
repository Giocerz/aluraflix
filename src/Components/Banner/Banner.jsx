import './Banner.css'
import playerImage from '../../assets/player.svg';

function Banner() {
    return (
        <section className='banner-section'>
            <div className='banner-content'>
                <div className='banner-description'>
                    <h1 className='banner-title'>FRONT END</h1>
                    <h2>Challenge React</h2>
                    <p>Este challenge es una forma de aprendizaje.
                        Es un mecanismo donde podrás comprometerte
                        en la resolución de un problema para poder
                        aplicar todos los conocimientos adquiridos
                        en la formación React.
                    </p>
                </div>
                <a href='https://www.youtube.com/watch?v=ov7vA5HFe6w&ab_channel=AluraLatam' target='_blank'>
                    <img className='banner-image' src={playerImage} />
                </a>
            </div>
        </section>
    );
}

export default Banner;