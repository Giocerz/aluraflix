import { useEffect, useState } from 'react';
import { CATEGORIES } from '../../logic/appConstants';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import VideoCard from '../VideoCard/VideoCard';
import './CategorySection.css'

function CategorySection({ categoryId = 0, reloadSection, setReloadSection}) {
    const [videosData, setVideosData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/videos?categoryId=${categoryId}`)
            .then((res) => res.json())
            .then((data) => setVideosData(data))
            .catch((error) => console.error(error))
    }, [reloadSection])

    return (
        <>
            {
                videosData.length > 0 &&
                <section className='category-section'>
                    <div className='category-title-container'>
                        <CategoryTitle backgroundColor={CATEGORIES[categoryId].color}>{CATEGORIES[categoryId].name.toUpperCase()}</CategoryTitle>
                    </div>
                    <div className='video-card-carrousel'>
                        {videosData.map((videoData) => <VideoCard key={`${videoData?.id}`} setReloadSection={setReloadSection} videoData={videoData} color={CATEGORIES[categoryId].color} />)}
                    </div>
                </section>
            }
        </>
    );
}

export default CategorySection;