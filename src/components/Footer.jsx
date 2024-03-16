import twiterlogo from '../assets/Twitter Logo.svg'
import Facebooklogo from '../assets/Facebook Logo.svg'
import Youtubelogo from '../assets/Youtube Logo.svg'
import Instagramlogo from '../assets/Instagram Logo.svg'
import Applogo from '../assets/app.svg'
import Playstore from '../assets/play.svg'
import Applestore from '../assets/appgallery.svg'

function Footer() {
  return (
    <>
    <footer className="flex  flex-col text-center md:px-20 justify-center w-full  h-auto md:flex bg-[#EBEEEF] md:h-48 md:text-start md:flex-row md:w-auto md:justify-around ">
        <div className="flex flex-col gap-2 text-xs  ml-4 mt-4">
            <h1 className="font-bold mb-4 text-slate-800">POPULAR CATEGORIES</h1>
            <a className="text-slate-500 hover:text-slate-800" href="#">Cars</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Flats for rent</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Mobile Phones</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Jobs</a>
        </div>
        <div className="flex flex-col  gap-2 text-xs  ml-4 mt-4">
            <h1 className="font-bold mb-4 text-slate-800">TRENDING SEARCHES</h1>
            <a className="text-slate-500 hover:text-slate-800" href="#">Bikes</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Watches</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Books</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Dogs</a>
        </div>
        <div className="flex flex-col gap-2 text-xs   ml-4 mt-4">
            <h1 className="font-bold mb-4 text-slate-800">ABOUT US</h1>
            <a className="text-slate-500 hover:text-slate-800" href="#">About Dubizzle Group</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">OLX Blog</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Contact Us</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">OLX for Businesses</a>
        </div>
        <div className="flex flex-col gap-2 text-xs  ml-4 mt-4">
            <h1 className="font-bold mb-4 text-slate-800">OLX</h1>
            <a className="text-slate-500 hover:text-slate-800" href="#">Help</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Sitemap</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Terms of use</a>
            <a className="text-slate-500 hover:text-slate-800" href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col text-xs  ml-4 mt-4 mr-4">
            <h1 className="font-bold mb-4 text-slate-800">FOLLOW US</h1>
            <div className="flex justify-center mb-4 md:justify-start">
                <img className="w-8" src={twiterlogo} alt=""/>
                <img className="w-8" src={Facebooklogo} alt=""/>
                <img className="w-8" src={Youtubelogo} alt=""/>
                <img  className="w-8"src={Instagramlogo} alt=""/>
            </div>
            <div className="flex justify-center mb-4 md:justify-start">
                <img className="w-20" src={Applogo} alt=""/>
                <img className="w-20" src={Playstore} alt=""/>
                <img className="w-20" src={Applestore} alt=""/>
            </div>
           
        </div>
    </footer>
    
    <div className="lastfoot p-4 bg-[#002F34] flex justify-center md:justify-end ">
       <p className="text-white text-sm" >Free classifieds in Pakistan . © 2006-2024 OLX</p>

    </div>
    </>
  )
}

export default Footer