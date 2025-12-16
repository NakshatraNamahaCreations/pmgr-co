import HomePage from "../Home/HomePage";
import AbtBanner from "./Abtbanner";
import Footer from "../Home/Footer";
import TeamList from "./teamList"
import CoreExpertise from "../Home/CoreExpertise"


export default function team(){
    return(
        <>
        <HomePage/>
        <AbtBanner/>
        <TeamList/>
        <CoreExpertise/>
        <Footer/>
        </>
    )
}