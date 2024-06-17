import './VideoCard.css'
import deleteIcon from '../../assets/Delete.svg'
import editIcon from '../../assets/Edit.svg'
import EditModal from '../EditModal/EditModal';
import { useState } from 'react';

function VideoCard({ setReloadSection, videoData, color = '#FFBA05' }) {
    const [isShowModal, setIsShowModal] = useState(false);

    const changeStateModal = () => {
        setIsShowModal((prevState) => !prevState);
    };

    const handleEditBtn = () => {
        changeStateModal();
    };

    const handleDeleteBtn = () => {
        fetch(`http://localhost:3000/videos/${videoData?.id}`, {
            method: 'DELETE'
        })
            .then((res) => {
                res.json();
                setReloadSection((prevState) => !prevState);
            })
            .catch((error) => console.error(error));
    }

    return (
        <>
            <article className='video-card' style={{ borderColor: color }}>
                <a href={videoData?.video} target='_blank'>
                    <div className='image-container' style={{ '--box-shadow-color': color }}>
                        <img
                            className='video-card-image'
                            src={videoData?.image}
                        />
                    </div>
                </a>
                <div className='video-card-actions'>
                    <button onClick={handleDeleteBtn}>
                        <img src={deleteIcon} />
                        <span>Eliminar</span>
                    </button>
                    <button onClick={handleEditBtn}>
                        <img src={editIcon} />
                        <span>Editar</span>
                    </button>
                </div>
            </article>
            {isShowModal && <EditModal changeStateModal={changeStateModal} setReloadSection={setReloadSection} videoData={videoData} />}
        </>
    );
}

export default VideoCard;