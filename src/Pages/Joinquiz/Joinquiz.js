import React, { useState } from "react"
import backimage from "../../Assets/Image/back-icon.svg"
import logo from "../../Assets/Image/logo.png"
import coinicon from "../../Assets/Image/coin-icon.png"
import notification from "../../Assets/Image/notifications-icon.svg"
import ipl from "../../Assets/Image/ipl.png"
import coin from "../../Assets/Image/coin-iconquiz.png"
import heart from "../../Assets/Image/heart-icon.svg"
import flag from "../../Assets/Image/fleg.svg"
import close from "../../Assets/Image/close.svg"
import Contenstrule from "../../Components/Contenstrule/Contenstrule"
import History from "../../Components/History/History"

const Joinquiz = () => {
    const [openHistorys, setOpenHistory] = useState(false)
    const [openContest, setOpenContest] = useState(false)
    const [openPrize, setOpenPrize] = useState(false)

    return (
        <>
            {openHistorys ? (
                <History setOpenHistory={setOpenHistory} openHistorys={openHistorys} />
            ) : openContest ? (
                <Contenstrule
                    openContest={openContest}
                    setOpenContest={setOpenContest}
                />
            ) : (
                <div className="main-img ">
                    <div className="relative w-full sm:w-[360px] bg-image m-auto h-[100vh] overflow-y-scroll">
                        <div className="justify-between gradint_bg py-[8px] px-[16px] block items-center">
                            <div className="">
                                <div className="flex items-center justify-between py-[8px]">
                                    <div className="w-[50%] flex items-center">
                                        <div className="w-[20%] cursor-pointer">
                                            <a href="/Mainpage">
                                                <img src={backimage} alt="backimage" />
                                            </a>
                                        </div>
                                        <div className="W-[40%]">
                                            <img src={logo} alt="logo" className="w-[90px]" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <div className="flex w-[80px] rounded-[24px] mr-[10px] border border-[#5c4b82] items-center px-[8px] bg-[#5c4b82]">
                                            <div className="mr-[6px]">
                                                <img src={coinicon} alt="coinicon" />
                                            </div>
                                            <div className="text-white">
                                                <h6 className="text-[14px]">200</h6>
                                                <p className="text-[10px] mt-[-2px]">Coins</p>
                                            </div>
                                        </div>
                                        <div className="bg-[#5c4b82] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                                            <img src={notification} alt="notification" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center px-3 py-4">
                            <img src={ipl} alt="ipl" className="m-auto" />
                            <span className="text-[10px] text-white my-2">IPL</span>
                            <div>
                                <h6 className="text-[18px] text-white justify-center font-bold flex items-center">
                                    Play and Win 250,000
                                    <img src={coin} alt="coin" className="w-[18px] ml-2" />
                                </h6>
                                <div className="relative">
                                    <p className="text-[12px] text-white mt-[8px] mb-[16px] font-bold">
                                        You’ve got 60 seconds to answer all questions. Answer as many
                                        questions as you can. Entry fee will be 0
                                    </p>
                                    <div className="absolute right-5 top-[19px]">
                                        <img src={coin} alt="coin" className="w-[14px]" />
                                    </div>
                                </div>
                                <p className="text-[12px] mb-[16px] text-white">
                                    Join and save the coins you win! Its free & safe!
                                </p>
                            </div>
                            <div className="mt-[30px]">
                                <button
                                    onClick={() => setOpenHistory(true)}
                                    className=" join bg-[#5c4b82] font-bold transition-all text-white py-2 px-[90px] sm:px-[100px] text-[22px] rounded-lg"
                                >
                                    Join Quiz
                                </button>
                            </div>
                            <div className="mt-[40px]">
                                <a
                                    href="/Playquiz"
                                    className="font-bold py-[13px] px-[73px] text-[22px] text-white border border-white rounded-lg"
                                >
                                    Play as Guest
                                </a>
                            </div>
                            <div className="mt-[30px] h-[275px]"></div>
                            <div className="flex items-center justify-between gap-4 relative">
                                <button
                                    onClick={() => setOpenPrize(true)}
                                    className="text-white border border-white h-[40px] w-1/2 flex items-center justify-center"
                                >
                                    Views Prizes
                                </button>
                                <button
                                    onClick={() => setOpenContest(true)}
                                    className="border border-white text-white  h-[40px] w-1/2 flex items-center justify-center"
                                >
                                    Contest Rules
                                </button>
                            </div>
                            <div className="mt-[30px]">
                                <p className="flex  items-center justify-center text-white text-[12px]">
                                    Made with{" "}
                                    <img alt="" src={heart} className="mx-[3px]" /> in India{" "}
                                    <img alt="" src={flag} className="mx-[3px]" />
                                </p>
                            </div>
                        </div>
                        {openPrize ? (
                            <div className="absolute z-[999] top-0 bottom-0 w-full bg-[#00000080]" onClick={() => setOpenPrize(false)}>
                                <div className="bg-[#5c4b82] absolute bottom-0 w-full">
                                    <div className="w-full py-[10px] flex items-center justify-end">
                                        <button onClick={() => setOpenPrize(false)}><img src={close} alt="close" className="w-[30px]" /></button>
                                    </div>
                                    <h1 className="text-white font-bold text-xl text-center py-[20px]">Prizes Rank List</h1>
                                    <ul>
                                        <li className="text-white flex justify-between font-semibold border-b border-[#6d949c] py-[16px] px-[14px]">
                                            <p>Rank 1</p>
                                            <p className="flex items-center">
                                                <img src={coin} alt="coin" className="w-[15px] mr-[4px]" />2,000
                                            </p>
                                        </li>
                                        <li className="text-white flex justify-between font-semibold border-b border-[#6d949c] py-[16px] px-[14px]">
                                            <p>Rank 2-10</p>
                                            <p className="flex items-center">
                                                <img src={coin} alt="coin" className="w-[15px] mr-[4px]" />1,000
                                            </p>
                                        </li>
                                        <li className="text-white flex justify-between font-semibold border-b border-[#6d949c] py-[16px] px-[14px]">
                                            <p>Rank 11- 50</p>
                                            <p className="flex items-center">
                                                <img src={coin} alt="coin" className="w-[15px] mr-[4px]" />600
                                            </p>
                                        </li>
                                        <li className="text-white flex justify-between font-semibold border-b border-[#6d949c] py-[16px] px-[14px]">
                                            <p>Rank 51-200</p>
                                            <p className="flex items-center">
                                                <img src={coin} alt="coin" className="w-[15px] mr-[4px]" />200
                                            </p>
                                        </li>
                                        <li className="text-white flex justify-between font-semibold border-b border-[#6d949c] py-[16px] px-[14px]">
                                            <p>Rank 201-500</p>
                                            <p className="flex items-center">
                                                <img src={coin} alt="coin" className="w-[15px] mr-[4px]" />100
                                            </p>
                                        </li>
                                        <li className="text-white flex justify-between font-semibold border-b border-[#6d949c] py-[16px] px-[14px]">
                                            <p>Rank 501-1000</p>
                                            <p className="flex items-center">
                                                <img src={coin} alt="coin" className="w-[15px] mr-[4px]" />50
                                            </p>
                                        </li>
                                        <li className="text-white flex justify-between font-semibold border-b border-[#6d949c] py-[16px] px-[14px]">
                                            <p>Rank 5000-10000</p>
                                            <p className="flex items-center">
                                                <img src={coin} alt="coin" className="w-[15px] mr-[4px]" />10
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Joinquiz
