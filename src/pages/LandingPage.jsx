import adv1 from '../assets/crosal1.jpg'
import adv2 from '../assets/crosal2.jpg'
import mobile from '../assets/mobile.png'
import car from '../assets/car.png'
import home from '../assets/home.png'
import key from '../assets/key.png'
import camera from '../assets/camera.png'
import bike from '../assets/bike.png'
import tractor from '../assets/tractor.png'
import service from '../assets/service.png'
import jobs from '../assets/jobs.png'
import animals from '../assets/animals.png'
import furniture from '../assets/furniture.png'
import fashion from '../assets/fashion.png'
import books from '../assets/books.png'
import kids from '../assets/kids.png'
import Ads from '../components/Ads'
import { useEffect, useState } from 'react'




function LandingPage() {
const [AdsData ,setAdsData] = useState([])

const AdsCardsData = [
    {
        catagory : "fashion",
        price : "2000",
        detail :  "Brand new bridal footwears hfdkjhgkjdfghdrfgjkadsasddasasddsa",
        location : "Saddar ,Karachi",
        duration : "2 day",
    },
    {
        catagory : "fashion",
        price : "2780",
        detail :  "D30 Bluetooth smart watch",
        location : "I-8/2, Islamabad",
        duration : "1 day",
    },
    {
        catagory : "fashion",
        price : "2400",
        detail :  "women's pu leather plain bag",
        location : "New Karachi - Sector 5-D, Karachi",
        duration : "1 day",
    },
    {
        catagory : "fashion",
        price : "4000",
        detail :  "football cleats",
        location : "New Multan, Multan",
        duration : "6 day",
    }
]
useEffect(()=>{
    setAdsData(AdsCardsData)
},[])

    return (
        <>
            {/* Advertisement starts  */}
            <div className="hidden md:flex flex-col justify-center m-4  ">
                <img className="w-auto" src={adv1} />
                <img className="w-auto h-24 self-center mt-8" src={adv2} />
            </div>
            {/* Advertisement Ends  */}

            {/* All categories section  starts */}
            <div className="catagories md:ml-20 m-9 text-center md:text-start">
                <h1 className="text-xl md:ml-6 md:mr-20 text-[#002f34] font-bold">All categories</h1>
                <div className="flex gap-x-16 gap-y-5 flex-wrap mt-4 justify-center align-middle md:justify-center">
                    <div className="w-20   flex flex-col items-center md:w-20">
                        <img className="w-20" src={mobile} />
                        <p className="mt-2 text-sm font-bold">Mobile</p>
                    </div>
                    <div className="w-20   flex flex-col items-center md:w-20">
                        <img className="w-20" src={car} />
                        <p className="mt-2 text-sm font-bold">Vehicles</p>
                    </div>
                    <div className="w-20  flex flex-col items-center md:w-20 ">
                        <img className="w-20" src={home} />
                        <p className="mt-2 text-sm font-bold text-center">Propert For Sale</p>
                    </div>
                    <div className="w-20  text-center flex flex-col items-center md:w-20 ">
                        <img className="w-20" src={key} />
                        <p className="mt-2 text-sm font-bold">Property For Rent</p>
                    </div>
                    <div className="w-20  text-center flex flex-col items-center md:w-20 ">
                        <img className="w-20" src={camera} />
                        <p className="mt-2 text-sm font-bold">Electronics & Home Appliances</p>
                    </div>
                    <div className="w-20  flex flex-col items-center md:w-20 ">
                        <img className="w-20" src={bike} />
                        <p className="mt-2 text-sm font-bold">Bikes</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center md:w-20 ">
                        <img className="w-20" src={tractor} />
                        <p className="mt-2 text-sm font-bold">Business, Industrial & Agriculture</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center  md:w-20">
                        <img className="w-20" src={service} />
                        <p className="mt-2 text-sm font-bold">Services</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center md:w-20 ">
                        <img className="w-20" src={jobs} />
                        <p className="mt-2 text-sm font-bold">Jobs</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center md:w-20 ">
                        <img className="w-20" src={animals} />
                        <p className="mt-2 text-sm font-bold">Animals</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center md:w-20 ">
                        <img className="w-20" src={furniture} />
                        <p className="mt-2 font-bold">Furniture & Home Decor</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center md:w-20 ">
                        <img className="w-20" src={fashion} />
                        <p className="mt-2 text-sm font-bold">Fashion & Beauty</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center md:w-20 ">
                        <img className="w-20" src={books} />
                        <p className="mt-2 text-sm font-bold">Books, Sports & Hobbies</p>
                    </div>
                    <div className="w-20  flex flex-col text-center items-center md:w-20 ">
                        <img className="w-20" src={kids} />

                        <p className="mt-2 text-sm font-bold">Kids</p>
                    </div>
                </div>
            </div>
            {/* All categories section  Ends */}
            {/* Main hero section starts */}
            <div className="hero-section  md:m-8">
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg  md:text-2xl">More in Fashion & Beauty</h1>
                        <p className="text-blue-500 text-lg flex">View more ></p>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads)=>{
                                if (ads.catagory === 'fashion') {
                                    return(
                                        <Ads 
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                        />
                                    )
                                }
                            })
                        }
                        {/* <Ads price={'2000'} location ={"Saddar ,Karachi"} detail = {"Brand new bridal footwear"} duration = {"1 day"} />
                        <Ads />
                        <Ads />
                        <Ads /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage