import adv1 from '../assets/crosal1.jpg'
import adv2 from '../assets/crosal2.jpg'
import Ads from '../components/Ads'
import { useEffect, useState } from 'react'
import Catagories from '../components/Catagories'
import { NavLink } from 'react-router-dom'




function LandingPage() {
const [AdsData ,setAdsData] = useState([])

const AdsCardsData = [
    {
        catagory : "fashion",
        price : "2000",
        detail :  "Brand new bridal footwears",
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
    },
    {
        catagory : "mobile",
        price : "33,000",
        detail :  "Xperia 5 Mark 2 | Single Sim",
        location : "Saddar ,Karachi",
        duration : "2 day",
    },
    {
        catagory : "mobile",
        price : "21,000",
        detail :  "Samsung Galaxy S10/S10+",
        location : "Defence ,Karachi",
        duration : "5 day",
    },
    {
        catagory : "mobile",
        price : "400,000",
        detail :  "iphone 14 pro max 256gb",
        location : "DHA Defence, Lahore",
        duration : "1 day ",
    },
    {
        catagory : "mobile",
        price : "125,000",
        detail :  "Samsung S21 ULTRA Dual Sim",
        location : "Satellite Town, Rawalpindi",
        duration : "3 day ",
    },
    {
        catagory : "car",
        price : "4,950,000",
        detail :  "Civic 2018 New Meter New Condition",
        location : "Bahria Town Karachi",
        duration : "1 day ",
    },
    {
        catagory : "car",
        price : "3,695,000",
        detail :  "Toyota Corolla Xli Converted Gli.",
        location : "Johar Town, Lahore",
        duration : "4 day ",
    },
    {
        catagory : "car",
        price : "3,695,000",
        detail :  "TOYOTA PRADO TX (2011) MODEL",
        location : "Bahria Town, Islamabad",
        duration : "1 week ",
    },
    {
        catagory : "car",
        price : "23,900,000",
        detail :  "Toyota Land Cruiser AX 2016",
        location : "DHA Phase 5, Lahore",
        duration : "3 week ",
    },
    {
        catagory : "bike",
        price : "680,000",
        detail :  "Kawasaki ninja replica 250cc",
        location : "Bahria Town Karachi",
        duration : "1 day ",
    },
    {
        catagory : "bike",
        price : "600,000",
        detail :  "Electric Heavy Bike",
        location : "Kot Abdul Malik, Sheikhüpura",
        duration : "5 day ",
    },
    {
        catagory : "bike",
        price : "330,000",
        detail :  "Yamaha 125G YBR Black Color",
        location : "Saddar, Rawalpindi",
        duration : "2 day ",
    },
    {
        catagory : "bike",
        price : "225,000",
        detail :  "Honda CG 125",
        location : "Chawinda, Sialkot",
        duration : "5 day ",
    },
    {
        catagory : "house",
        price : "42,500,000",
        detail :  "1 Kanal Double Storey House",
        location : "West Wood Housing Society, Lahore",
        duration : "5 day ",
    },
    {
        catagory : "house",
        price : "24,000,000",
        detail :  "5 Marla Luxury Bungalow",
        location : "DHA 9 Town, Lahore",
        duration : "2 day ",
    },
    {
        catagory : "house",
        price : "500,00,000",
        detail :  "Lavish Apartments For Rent",
        location : "Bahria Town, Lahore",
        duration : "1 day ",
    },
    {
        catagory : "house",
        price : "43,500,000",
        detail :  "10 Marla Beautiful Ultra Design House",
        location : "PIA Housing Scheme, Lahore",
        duration : "5 day ",
    },
    {
        catagory : "electronic",
        price : "8,500",
        detail :  "c1 model. wakei takei",
        location : "Hayatabad Phase 5, Peshawar",
        duration : "2 day ",
    },
    {
        catagory : "electronic",
        price : "49,999",
        detail :  "Audio Video Conference Logitech",
        location : "Shahra-e-Faisal, Karachi",
        duration : "3 week ",
    },
    {
        catagory : "electronic",
        price : "36,000",
        detail :  "43 INCH LED HD STOCK",
        location : "DHA Phase 2, Lahore",
        duration : "1 week ",
    },
    {
        catagory : "electronic",
        price : "25,000",
        detail :  "LED TV | SMART TV | ANDROID",
        location : "Others, Hyderabad",
        duration : "2 week ",
    },
    {
        catagory : "tablet",
        price : "7,999",
        detail :  "NEW Tab/ Gaming Tab/ Kids Tab",
        location : "PCSIR Staff Colony, Lahore",
        duration : "1 day ",
    },
    {
        catagory : "tablet",
        price : "23,000",
        detail :  "MICROSOFT SURFACE PRO 3",
        location : "Saddar, Karachi",
        duration : "3 weeks ago ",
    },
    {
        catagory : "tablet",
        price : "7,499",
        detail :  "Tab / Kids Tab / Samsung Tab",
        location : "Main Boulevard Gulberg, Lahore",
        duration : "1 weeks ago ",
    },
    {
        catagory : "tablet",
        price : "7,999",
        detail :  "Tabs best variants",
        location : "DHA Defence, Lahore",
        duration : "6 day ago ",
    },
    {
        catagory : "job",
        price : "15,000",
        detail :  "call center job",
        location : "DHA Defence, Lahore",
        duration : "1 day ago ",
    },
    {
        catagory : "job",
        price : "5,000",
        detail :  "Al-Hamd Garden, Lahore",
        location : "DHA Defence, Lahore",
        duration : "5 day ago ",
    },
    {
        catagory : "job",
        price : "20,000",
        detail :  "Female staff ki zarorat Hy",
        location : "Johar Town, Lahore",
        duration : "1 day ago ",
    },
    {
        catagory : "job",
        price : "3,000",
        detail :  "Assignment writing work Part Time",
        location : "Bahria Town Rawalpindi, Rawalpindi",
        duration : "2 day ago ",
    },
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
            <Catagories/>
            {/* All categories section  Ends */}
            
            {/* Main hero section starts */}
            <div className="hero-section  md:m-8">
                {/* fashion section starts */}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34] md:text-lg">More in Fashion & Beauty</h1>
                        <NavLink
                        to={'/fashion'} 
                            className="text-blue-500 text-lg flex"
                        >
                            View more >
                        </NavLink>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'fashion') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* fashion section ends */}
                {/* mobile section starts */}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34]  md:text-lg">Mobile Phones</h1>
                        <NavLink
                        to={'/mobile'} 
                            className="text-blue-500 text-lg flex"
                        >
                            View more >
                        </NavLink>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'mobile') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* mobile section sends */}
                {/* cars section starts */}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34]  md:text-lg">Cars</h1>
                        <p className="text-blue-500 text-lg flex">View more ></p>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'car') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* car section ends */}
                {/* bike section starts*/}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34]  md:text-lg">Bikes & Motorcycles</h1>
                        <p className="text-blue-500 text-lg flex">View more ></p>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'bike') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* bike section ends */}
                {/* house section start */}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34]  md:text-lg">Houses</h1>
                        <p className="text-blue-500 text-lg flex">View more ></p>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'house') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* house section ends */}
                {/* electronic section added */}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34]  md:text-lg">Video-Audio</h1>
                        <p className="text-blue-500 text-lg flex">View more ></p>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'electronic') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* electronic section ends */}
                {/* tablet section starts */}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34]  md:text-lg">Tablets</h1>
                        <p className="text-blue-500 text-lg flex">View more ></p>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'tablet') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* tablet section ends */}
                {/* jobs section starts */}
                <div className="fashion justify-center mr-2 ml-2">
                    <div className="flex w-full justify-between">
                        <h1 className="font-bold text-lg text-[#002f34]  md:text-lg">Jobs</h1>
                        <p className="text-blue-500 text-lg flex">View more ></p>
                    </div>
                    <div className="flex mb-4 flex-wrap justify-center w-full md:flex-nowrap ">
                        {
                            AdsData.map((ads,index)=>{
                                if (ads.catagory === 'job') {
                                    return(
                                        <Ads 
                                            key = {index}
                                            price = {ads.price} 
                                            detail = {ads.detail}
                                            location = {ads.location}
                                            duration = {ads.duration}
                                            fashion = {ads.catagory}
                                        />
                                    )
                                }
                            })
                        }
                       
                    </div>
                </div>
                {/* jobs section ends */}
                    
            </div>
        </>
    )
}

export default LandingPage