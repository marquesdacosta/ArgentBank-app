import "./style.css"


function FeatureItem({imageUrl , description , title , text}){
    return (
        <div className="feature-item">
            <img src={imageUrl} alt={description} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default FeatureItem