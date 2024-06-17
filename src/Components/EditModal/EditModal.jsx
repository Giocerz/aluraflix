import './EditModal.css'
import cancelIcon from '../../assets/X-cancel.svg'
import { useState } from 'react';

function EditModal({ changeStateModal, setReloadSection, videoData }) {
    const [formData, setFormData] = useState({
        titulo: videoData != null ? videoData?.name : '',
        categoria: videoData != null ? videoData?.categoryId : '',
        imagen: videoData != null ? videoData?.image : '',
        video: videoData != null ? videoData?.video : '',
        descripcion: videoData != null ? videoData?.description : ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleCancelBtn = () => {
        changeStateModal();
    };

    const handleClearForm = () => {
        setFormData({
            titulo: '',
            categoria: '',
            imagen: '',
            video: '',
            descripcion: ''
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const updateVideo = {
            id: videoData.id,
            name: formData.titulo,
            image: formData.imagen,
            video: formData.video,
            description: formData.descripcion,
            categoryId: formData.categoria,
        }
        fetch(`http://localhost:3000/videos/${videoData?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateVideo)
        })
        .then((res) => {
            res.json();
            alert('Se guardaron los cambios');
            setReloadSection((prevState) => !prevState);
            changeStateModal();
        })
        .catch((error) => {
            console.error(error);
            alert('Ocurrio un error');
        })
    }

    return (
        <div className='modal-container'>
            <div className='modal'>
                <button className='cancel-btn' onClick={handleCancelBtn}>
                    <img src={cancelIcon} />
                </button>
                <h2>EDITAR CARD:</h2>
                <form onSubmit={handleSubmitForm}>
                    <label>
                        <span>Titulo</span>
                        <input name='titulo' type='text' minLength={2} maxLength={100} value={formData.titulo} onChange={handleInputChange} required />
                    </label>
                    <label>
                        <span>Categoria</span>
                        <select name='categoria' value={formData.categoria} onChange={handleInputChange}>
                            <option value={0}>Frontend</option>
                            <option value={1}>Backend</option>
                            <option value={2}>Innovación y Gestión</option>
                        </select>
                    </label>
                    <label>
                        <span>Imagen</span>
                        <input name='imagen' type='url' value={formData.imagen} onChange={handleInputChange} required />
                    </label>
                    <label>
                        <span>Video</span>
                        <input name='video' type='url' value={formData.video} onChange={handleInputChange} required />
                    </label>
                    <label>
                        <span>Descripcion</span>
                        <textarea name='descripcion' maxLength={200} minLength={2} value={formData.descripcion} onChange={handleInputChange} required></textarea>
                    </label>
                    <div className='btn-container'>
                        <button className='save-form-btn'>Guardar</button>
                        <button className='clear-form-btn' onClick={handleClearForm}>Limpiar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditModal;