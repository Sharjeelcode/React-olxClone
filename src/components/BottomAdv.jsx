// import { adBanner } from "../assets/ad3.jpg";
import Applogo from '../assets/app.svg'
import Playstore from '../assets/play.svg'
import Applestore from '../assets/appgallery.svg'
import olxAdvImg from '../assets/a4.webp'
import adBanner from '../assets/ad3.jpg'


function BottomAdv() {
  return (
    <>
    <div className="hidden md:flex justify-center mt-4 w-full ">
        <img src={adBanner} alt=""/>
    </div>
    <div className="hidden w-full md:flex border-b-2 border-slate-400 bg-[#F7F8F9] mt-4">
        <div  className="flex">
            <img className="h-full" src={olxAdvImg} alt=""/>
        </div>
        <div className="flex flex-col justify-center  p-4">
            <h1 className="font-extrabold text-3xl mt-4">TRY THE OLX APP</h1>
            <p className="text-sm">Buy, sell and find just about anything using the 
            <br/> 
            app on your mobile.
            </p>
        </div>
        <div className="mt-6 h-40 w-0.5 bg-slate-500"></div>
        <div className="flex flex-col justify-center  p-4">
            <h1 className="font-bold text-lg mt-4">GET YOUR APP TODAY</h1>
            <div className="flex flex-wrap">
            <img className="w-20" src={Applogo} alt=""/>
                <img className="w-20" src={Playstore} alt=""/>
                <img className="w-20" src={Applestore} alt=""/>
            </div>
        </div>

    </div>
    </>
  )
}

export default BottomAdv