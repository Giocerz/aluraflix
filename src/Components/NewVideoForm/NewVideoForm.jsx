import { useState } from 'react';
import './NewVideoForm.css'
import { useNavigate } from 'react-router-dom';

function NewVideoForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagen: '',
        video: '',
        descripcion: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const updateVideo = {
            name: formData.titulo,
            image: formData.imagen,
            video: formData.video,
            description: formData.descripcion,
            categoryId: formData.categoria,
        }
        fetch(`http://localhost:3000/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateVideo)
        })
        .then((res) => {
            res.json();
            handleClearForm();
            navigate('/');
            
        })
        .catch((error) => {
            console.error(error);
            alert('Ocurrio un error');
        })
    }

    const handleClearForm = () => {
        setFormData({
            titulo: '',
            categoria: '',
            imagen: '',
            video: '',
            descripcion: ''
        });
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmitForm}>
                <h2>Crear Tarjeta</h2>
                <label>
                    <span>Título</span>
                    <input name='titulo' type='text' placeholder='titulo del video' minLength={2} maxLength={100} value={formData.titulo} onChange={handleInputChange} required />
                </label>
                <label>
                    <span>Categoria</span>
                    <select name='categoria' value={formData.categoria} onChange={handleInputChange} required>
                        <option value="" disabled>escoja una categoria</option>
                        <option value={0}>Frontend</option>
                        <option value={1}>Backend</option>
                        <option value={2}>Innovación y Gestión</option>
                    </select>
                </label>
                <label>
                    <span>Imagen</span>
                    <input name='imagen' type='url' placeholder='link de la imagen' value={formData.imagen} onChange={handleInputChange} required />
                </label>
                <label>
                    <span>Video</span>
                    <input name='video' type='url' placeholder='link del video' value={formData.video} onChange={handleInputChange} required />
                </label>
                <label>
                    <span>Descripción</span>
                    <textarea name='descripcion' placeholder='¿de qué se trata el video?' maxLength={200} minLength={2} value={formData.descripcion} onChange={handleInputChange} required></textarea>
                </label>
                <div className='btn-container'>
                    <button className='save-form-btn'>Guardar</button>
                    <button className='clear-form-btn' onClick={handleClearForm}>Limpiar</button>
                </div>
            </form>
        </div>
    );
}

export default NewVideoForm;