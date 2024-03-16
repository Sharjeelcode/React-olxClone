
import  olxlogo from "../assets/olx small.svg";
import  motors from "../assets/motors.svg";
import  property from "../assets/property.svg";
import  dropdown from "../assets/Dropdown trigger.svg";
import  Whiteserachicon from "../assets/white_search.png";
import  location from "../assets/location.png";




function Header() {
    return (
        <header
            className="pl-8 pt-4 pb-4  bg-[#F7F8F8] sticky top-0 w-full"
        >
            <div
                className="nav1 flex justify-center mb-4 md:flex md:ml-20 md:justify-start  w-full"
            >
                <img
                    className="mr-4 md:mr-12 md:w-16" src={olxlogo} 
                />
                <img
                    className="mr-4 md:mr-12" src={motors} 
                />
                <img
                    className="mr-4 md:mr-12" src={property} 
                />
            </div>
            <div
                className="hidden   md:flex gap-3 items-center md:ml-20"
            >
                <div
                    className=" flex rounded  justify-between  bg-white items-center w-64 border-2 border-gray p-2"
                >
                    <img
                        className="h-6 w-6  "
                        src={location}
                        alt=""
                    />
                    <p>
                        Pakistan
                    </p>
                    <img
                        src={dropdown}
                        alt=""
                    />
                </div>
                <div
                    className="w-96  flex items-center border-2 border-gray rounded"
                >
                    <input
                        className="w-full p-2 outline-[#23E5DB]"
                        type="text"
                        placeholder="Find Cars, Mobile Phones and more..."
                    />
                    <div
                        className=" p-2 bg-[#002f34]"
                    >
                        <img
                            className="h-6 w-8"
                            src={Whiteserachicon}
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <h1
                        className="font-bold text underline underline-offset-8"
                    >
                        Login
                    </h1>
                </div>
                <div>
                    <button
                        title="Sell"
                        className="flex relative items-center justify-center "
                    >
                        <img
                            src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
                            className="af24d916"
                            alt="Button border"
                        />
                        <div
                            className="flex absolute"
                        >
                            <img
                                src="https://www.olx.com.pk/assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg"
                                className="px-1"
                                alt="Plus icon"
                            />
                            <span
                                className="font-bold text-lg"
                            >SELL
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header