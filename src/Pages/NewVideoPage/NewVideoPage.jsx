import NewVideoForm from '../../Components/NewVideoForm/NewVideoForm';
import './NewVideoPage.css'

function NewVideoPage() {
    return (
        <>
            <section className="new-video-banner">
                <h1>NUEVO VIDEO</h1>
                <p>Complete el formulario para crear una nueva tarjeta de video</p>
            </section>
            <NewVideoForm />
        </>
    );
}

export default NewVideoPage;