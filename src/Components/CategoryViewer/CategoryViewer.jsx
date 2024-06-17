import { useState } from "react";
import CategorySection from "../Category/CategorySection";
import './CategoryViewer.css'

function CategoryViewer() {
    const [reloadSection, setReloadSection] = useState(false);

    return (
        <>
            <div className="category-viewer-container">
                <CategorySection categoryId={0} reloadSection={reloadSection} setReloadSection={setReloadSection} />
                <CategorySection categoryId={1} reloadSection={reloadSection} setReloadSection={setReloadSection} />
                <CategorySection categoryId={2} reloadSection={reloadSection} setReloadSection={setReloadSection} />
            </div>
        </>
    );
}

export default CategoryViewer;