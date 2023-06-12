import React from 'react'
import notification from "../../Assets/Image/notification-icon.svg"
import coinicon from "../../Assets/Image/coin-icon.png"
import search from "../../Assets/Image/search.svg"
import logo from "../../Assets/Image/logo.png"


const Header = () => {
    return (
        <div>
            <div className="bg-[#5c4b82]">
                <div className="header px-[20px] lg:px-0 flex items-center justify-between py-[12px] max-[50px] 2xl:mx-[110px]">
                    <div className="w-[50%]">
                        <img src={logo} alt='logo' className="w-[100px] sm:w-[150px]" />
                    </div>
                    <div className="w-[50%]">
                        <div className="flex items-center justify-end">
                            <div className="subheader relative w-[430px] flex justify-end">
                                <input
                                    type="search"
                                    id="#Search"
                                    placeholder="Search games"
                                    className=" bg-[#6d949cc9] rounded-[40px] py-[8px] pl-[30px] sm:pl- w-[50px] sm:w-[200px] border-0 text-white"
                                />
                                <div className="absolute right-[10px] top-[10px]">
                                    <img src={search} alt='search' className="w-[20px]" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mx-[20px] hidden sm:block">
                                    <img src={notification} alt='notification' />
                                </div>
                                <div className="hidden sm:flex w-[80px] rounded-[24px] mr-[10px] border border-[#6d949c] items-center px-[8px] bg-[#6d949c]">
                                    <div className="mr-[6px]">
                                        <img src={coinicon} alt='coinicon' />
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-[14px]">0</h6>
                                        <p className="text-[10px] mt-[-2px]">Coins</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header