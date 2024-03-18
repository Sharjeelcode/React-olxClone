

function Ads(props) {
const {price,detail,location,duration} = props

    return (
            <div className="card h-auto  rounded border-2 mt-4 mr-2 md:w-auto md:mr-4">
                <img className="h-40 w-64" src="../assts/shoes.jpg" alt="" />
                <div className="flex justify-between mx-2 my-1">
                    <p className="font-bold text-lg truncate">Rs {price}</p>
                    <img className="w-6 " src="../assts/heart.png" alt="" />
                </div>
                <p className="mx-2 my-2 text-slate-600 w-56 h-12  line-clamp-2">{detail}</p>
                <p className="mx-2 my-1 text-sm text-slate-600 w-56  line-clamp-2">{location}</p>
                <p className="mx-2 my-1 text-xs text-slate-600 line-clamp-2">{duration} ago</p>
            </div>
    )
}

export default Ads