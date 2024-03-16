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




function LandingPage() {
  return (
    <>
      {/* Advertisement starts  */}
    <div className="hidden md:flex flex-col justify-center m-4  ">
        <img className="w-auto" src={adv1} />
        <img className="w-auto h-24 self-center mt-8" src={adv2} />
    </div>
     {/* Advertisement Ends  */}

     {/* All categories section  starts */}
    <div className="catagories m-9 text-center md:text-start">
        <h1 className="text-2xl  font-bold">All categories</h1>
        <div className="flex  flex-wrap mt-4 justify-center align-middle md:justify-start">
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32">
                <img className="w-24" src={mobile} />
                <p className="mt-2 font-bold">Mobile</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32">
                <img className="w-24" src={car} />
                <p className="mt-2 font-bold">Vehicles</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32 ">
                <img className="w-24" src={home} />
                <p className="mt-2 font-bold text-center">Propert For Sale</p>
            </div>
            <div className="w-20 mb-6 text-center mr-6 flex flex-col items-center md:w-32 ">
                <img className="w-24" src={key} />
                <p className="mt-2 font-bold">Property For Rent</p>
            </div>
            <div className="w-20 mb-6 mr-6 text-center flex flex-col items-center md:w-32 ">
                <img className="w-24" src={camera} />
                <p className="mt-2 font-bold">Electronics & Home Appliances</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col items-center md:w-32 ">
                <img className="w-24" src={bike} />
                <p className="mt-2 font-bold">Bikes</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src={tractor} />
                <p className="mt-2 font-bold">Business, Industrial & Agriculture</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center  md:w-32">
                <img className="w-24" src={service} />
                <p className="mt-2 font-bold">Services</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src={jobs} />
                <p className="mt-2 font-bold">Jobs</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src={animals} />
                <p className="mt-2 font-bold">Animals</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src={furniture}  />
                <p className="mt-2 font-bold">Furniture & Home Decor</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src={fashion} />
                <p className="mt-2 font-bold">Fashion & Beauty</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src={books} />
                <p className="mt-2 font-bold">Books, Sports & Hobbies</p>
            </div>
            <div className="w-20 mb-6 mr-6 flex flex-col text-center items-center md:w-32 ">
                <img className="w-24" src={kids} />

                <p className="mt-2 font-bold">Kids</p>
            </div>
        </div>
    </div>
    {/* All categories section  Ends */}
    </>
  )
}

export default LandingPage