

function Ads() {
    return (
            <div className="card h-auto  rounded border-2 mt-4 mr-2 md:w-auto md:mr-4">
                <img className="h-40 w-64" src="../assts/shoes.jpg" alt="" />
                <div className="flex justify-between m-4">
                    <p className="font-bold text-lg">Rs 2000</p>
                    <img className="w-6 " src="../assts/heart.png" alt="" />
                </div>
                <p className="m-4 text-slate-600">Brand new bridal footwear</p>
                <p className="m-4  mb-2 text-slate-600">Saddar ,Karachi</p>
                <p className="ml-4 mb-4 text-sm text-slate-600">1 day ago</p>
            </div>
    )
}

export default Ads