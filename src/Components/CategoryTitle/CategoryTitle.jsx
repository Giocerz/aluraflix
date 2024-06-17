import './CategoryTitle.css'

function CategoryTitle({children, backgroundColor='#6BD1FF'}) {
    return (
        <h2 className='category-title' style={{backgroundColor: backgroundColor}}>
            {children}
        </h2>
    );
}

export default CategoryTitle;