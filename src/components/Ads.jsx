import { useEffect, useState } from "react"
import like from "../assets/heart.png"
import fashionimage from "../assets/watch.jpg"
import mobileimage from '../assets/mbile.jpg'
import car from '../assets/c2.jpg'
import bike from '../assets/b1.jpg'
import house from '../assets/h1.jpg'

function Ads(props) {
const {price,detail,location,duration,fashion} = props
const [image ,setimage] =  useState()

useEffect(()=>{
    if (fashion === "fashion") {
        setimage(fashionimage)
    }if (fashion === "mobile") {
        setimage(mobileimage)
    }
    if (fashion === "car") {
        setimage(car)
    }
    if (fashion === "bike") {
        setimage(bike)
    }
    if (fashion === "house") {
        setimage(house)
    }
},[fashion])

    return (
            <div className="card h-auto  rounded border-2 mt-4 mr-2 md:w-auto md:mr-4">
                <img className="h-40 w-64" src={image} />
                <div className="flex justify-between mx-2 my-1">
                    <p className="font-bold text-lg truncate">Rs {price}</p>
                    <img className="w-5 " src={like} />
                </div>
                <p className="mx-2 my-2 text-slate-600 w-56 h-12  line-clamp-2">{detail}</p>
                <p className="mx-2 my-1 text-sm text-slate-600 w-56  line-clamp-2">{location}</p>
                <p className="mx-2 my-1 text-xs text-slate-600 line-clamp-2">{duration} ago</p>
            </div>
    )
}

export default Ads