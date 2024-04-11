import banner from "../../assets/bank-tree.webp";
import BannerText from "../BannerText";
import './style.css'

function Banner() {
    return (
        <section>
            <div className="banner-div">
                <img src={banner} alt="bank-tree" className="banner" />
                <BannerText
                text={"Open a savings account with Argent Bank today!"}
                sub1={"No fees."}
                sub2={"No minimum deposit."}
                sub3={"High interest rates."}/>
            </div>
        </section>
    )
}

export default Banner