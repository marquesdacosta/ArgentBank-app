import "./style.css";

function BannerText({text , sub1 , sub2, sub3}){
    return (
        <div className="banner-text">
            <p className="sub">{sub1}</p>
            <p className="sub">{sub2}</p>
            <p className="sub">{sub3}</p>
            <p className="text">{text}</p>
        </div>
    )
}

export default BannerText