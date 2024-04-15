import "../../assets/bank-tree.webp";
import BannerText from "../../components/BannerText";
import './style.css'

function Banner() {
    return (
        <section>
            <div className="banner-div">
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