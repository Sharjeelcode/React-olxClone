import adv1 from '../assets/crosal1.jpg'
import adv2 from '../assets/crosal2.jpg'

function LandingPage() {
  return (
    <>
      {/* Advertisement starts  */}
    <div className="hidden md:flex flex-col justify-center m-4  ">
        <img className="w-auto" src={adv1} alt=""/>
        <img className="w-auto h-24 self-center mt-8" src={adv2} alt=""/>
    </div>
     {/* Advertisement Ends  */}
     {/* All categories section  starts */}
    <div className="catagories m-9 text-center md:text-start">
        <h1 className="text-2xl  font-bold">All categories</h1>
        <div className="flex  flex-wrap mt-4 justify-center align-middle md:justify-start">
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32">
                <img className="w-24" src="../assts/mobile.png" alt=""/>
                <p className="mt-2 font-bold">Mobile</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32">
                <img className="w-24" src="../assts/car.png" alt=""/>
                <p className="mt-2 font-bold">Vehicles</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32 ">
                <img className="w-24" src="../assts/home.png" alt=""/>
                <p className="mt-2 font-bold text-center">Propert For Sale</p>
            </div>
            <div className="w-20 mb-6 text-center mr-6 flex flex-col items-center md:w-32 ">
                <img className="w-24" src="../assts/key.png" alt=""/>
                <p className="mt-2 font-bold">Property For Rent</p>
            </div>
            <div className="w-20 mb-6 mr-6 text-center flex flex-col items-center md:w-32 ">
                <img className="w-24" src="../assts/camera.png" alt=""/>
                <p className="mt-2 font-bold">Electronics & Home Appliances</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32 ">
                <img className="w-24" src="../assts/bike.png" alt=""/>
                <p className="mt-2 font-bold">Bikes</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src="../assts/tractor.png" alt=""/>
                <p className="mt-2 font-bold">Business, Industrial & Agriculture</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center  md:w-32">
                <img className="w-24" src="../assts/service.png" alt=""/>
                <p className="mt-2 font-bold">Services</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src="../assts/jobs.png" alt=""/>
                <p className="mt-2 font-bold">Jobs</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src="../assts/animals.png" alt=""/>
                <p className="mt-2 font-bold">Animals</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src="../assts/furniture.png" alt=""/>
                <p className="mt-2 font-bold">Furniture & Home Decor</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src="../assts/fashion.png" alt=""/>
                <p className="mt-2 font-bold">Fashion & Beauty</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src="../assts/books.png" alt=""/>
                <p className="mt-2 font-bold">Books, Sports & Hobbies</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src="../assts/kids.png" alt=""/>

                <p className="mt-2 font-bold">Kids</p>
            </div>
        </div>
    </div>
    {/* All categories section  Ends */}
    </>
  )
}

export default LandingPage