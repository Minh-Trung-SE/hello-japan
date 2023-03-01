import BannerHome from "@/components/BannerHome/BannerHome"
import HomeContact from "@/components/HomeContact/HomeContact"
import HomeIntroduce from "@/components/HomeIntroduce/HomeIntroduce"
import HomePartnerStudy from "@/components/HomePartnerStudy/HomePartnerStudy"

const Home = () => {
    return (
        <>
            <BannerHome />
            <HomeIntroduce />
            <HomePartnerStudy />
            <HomeContact />
        </>
    )
}

export default Home