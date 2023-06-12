import React, { useState } from "react"
import logo from "../../Assets/Image/logo.png"
import coinicon from "../../Assets/Image/coin-icon.png"
import bar from "../../Assets/Image/menu-icon.svg"
import notification from "../../Assets/Image/notifications-icon.svg"
import coin from '../../Assets/Image/coinstack.png'
import { User } from "./User"
import { Userdata } from "./Userdata"
import heart from "../../Assets/Image/heart-icon.svg"
import flag from "../../Assets/Image/fleg.svg"
import Sidebar from "../Sidebar/Sidebar"

const Homemain = () => {
    const [value, setValue] = useState("Contests")
    const [open, setOpen] = useState(false)
    const [navigateToContacts, setNavigateToContacts] = useState(false)
    const [NavigateToHistory, setNavigateToHistory] = useState(false)
    const [navigateToContactus, setnavigateToContactus] = useState(false)

    return (
        <div className="main-img">
            <div className="w-full sm:w-[360px] h-screen overflow-y-auto m-auto bg-image">
                <div className="relative">
                    {!navigateToContacts && !NavigateToHistory && (
                        <>
                            <div className="flex items-center justify-between px-[16px] py-[8px]">
                                <div className="w-[50%] flex items-center">
                                    <div className="cursor-pointer">
                                        <button className="w-full" onClick={() => setOpen(true)}>
                                            <img src={bar} alt="" />
                                        </button>
                                    </div>
                                    <div className="W-[40%]">
                                        <img src={logo} alt="" className="w-[90px]" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <div className="flex w-[80px] rounded-[24px] mr-[10px] items-center px-[8px] bg-[#5c4b82]">
                                        <div className="mr-[6px]">
                                            <img src={coinicon} alt="" />
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-[14px]">200</h6>
                                            <p className="text-[10px] mt-[-2px]">Coins</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#5c4b82] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                                        <img src={notification} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <p className="text-[12px] text-white text-center">Sponsored </p>
                            </div>
                            <div className="w-[296px] h-[272px] m-auto"></div>
                            <div className="py-[16px] px-[15px]">
                                <div className="">
                                    <div className="flex justify-between items-center">
                                        <div
                                            className={
                                                value === "Contests"
                                                    ? " w-1/2 border-b-4 border-white text-white  text-center text-[14px] px-[16px] py-2 cursor-pointer font-semibold"
                                                    : "w-1/2 text-[#6d949c] border-b-4 border-b-transparent text-center text-[14px]  px-[16px] py-2 cursor-pointer font-semibold"
                                            }
                                        >
                                            <button onClick={() => setValue("Contests")}>
                                                Contests
                                            </button>
                                        </div>
                                        <div
                                            className={
                                                value === "IPL & Cricket"
                                                    ? " w-1/2 border-b-4 border-white text-white  text-center text-[14px] px-[16px] py-2 cursor-pointer font-semibold"
                                                    : "w-1/2 text-[#6d949c] border-b-4 border-b-transparent text-center text-[14px]  px-[16px] py-2 cursor-pointer font-semibold"
                                            }
                                        >
                                            <button onClick={() => setValue("IPL & Cricket")}>
                                                IPL & Cricket
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {value === "Contests" ? (
                                    <div>
                                        {User.map((data) => {
                                            return (
                                                <div className="rounded-[8px] bg-[#fff] mt-[16px]">
                                                    <div className="flex items-center justify-end px-2 pt-[10px]">
                                                        <div className="w-[10px] h-[10px] bg-[#6dc658] rounded-full mr-[8px]"></div>
                                                        <p className="text-[10px] text-[#6dc658]">
                                                            {data.live}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between px-[8px] py-[8px]">
                                                        <div className="flex items-start justify-between">
                                                            <div className="px-[15px]">
                                                                <img src={data.img} alt="img" className="w-[48px]" />
                                                            </div>
                                                            <div className="pl-[15px]">
                                                                <h6 className="text-[12px] font-semibold">{data.title}</h6>
                                                                <p className="items-center text-[14px] sm:text-[16px] flex gap-[2px] font-bold mb-[-5px]">
                                                                    {data.pretitle}
                                                                    <img src={coin} alt="coin" className="w-[25px]" />
                                                                    <span>{data.amopre}</span>
                                                                </p>
                                                                <span className="text-[10px] text-[#999] mt-[10px] block sm:text-[11px]">
                                                                    {data.amount}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between pb-[8px] px-[8px]">
                                                        <div className="flex items-center">
                                                            <div className="flex items-center pl-[16px] w-[78px]">
                                                                <div className="w-[10px] h-[10px] bg-[#6dc658] rounded-full mr-1"></div>
                                                                <p className="text-[11px] text-[#6dc658] font-semibold">
                                                                    {data.number}
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center pl-[15px]">
                                                                <p className="text-[12px] text-[#333] flex items-center gap-[2px]">
                                                                    {data.entry}<img src={coin} alt="coin" className="w-[25px]" />{data.eno}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="/Joinquiz" target="_top" className="border-[#5c4b82] border-[1px] bg-[#fff] p-[8px] font-semibold w-[83px] h-[30px] flex items-center justify-center rounded-[8px] uppercase text-[#5c4b82] text-[9px]">
                                                                {data.play}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) : (
                                    <div>
                                        {Userdata.map((data) => {
                                            return (
                                                <div className="rounded-[8px] bg-[#fff] mt-[16px]">
                                                    <div className="flex items-center justify-end px-2 pt-[10px]">
                                                        <div className="w-[10px] h-[10px] bg-[#6dc658] rounded-full mr-[8px]"></div>
                                                        <p className="text-[10px] text-[#6dc658]">
                                                            {data.live}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-between px-[8px] py-[8px]">
                                                        <div className="flex items-start justify-between">
                                                            <div className="px-[15px]">
                                                                <img src={data.img} alt="img" className="w-[48px]" />
                                                            </div>
                                                            <div className="pl-[15px]">
                                                                <h6 className="text-[12px] font-semibold">{data.title}</h6>
                                                                <p className="items-center text-[14px] sm:text-[16px] flex gap-[2px] font-bold mb-[-5px]">
                                                                    {data.pretitle}
                                                                    <img src={coin} alt="coin" className="w-[25px]" />
                                                                    <span>{data.amopre}</span>
                                                                </p>
                                                                <span className="text-[10px] text-[#999] mt-[10px] block sm:text-[11px]">
                                                                    {data.amount}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between pb-[8px] px-[8px]">
                                                        <div className="flex items-center">
                                                            <div className="flex items-center pl-[16px] w-[78px]">
                                                                <div className="w-[10px] h-[10px] bg-[#6dc658] rounded-full mr-1"></div>
                                                                <p className="text-[11px] text-[#6dc658] font-semibold">
                                                                    {data.number}
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center pl-[15px]">
                                                                <p className="text-[12px] text-[#333] flex items-center gap-[2px]">
                                                                    {data.entry}<img src={coin} alt="coin" className="w-[25px]" />{data.eno}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="/Joinquiz" target="_top" className="border-[#5c4b82] border-[1px] bg-[#fff] p-[8px] font-semibold w-[83px] h-[30px] flex items-center justify-center rounded-[8px] uppercase text-[#5c4b82] text-[9px]">
                                                                {data.play}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                                }
                            </div>
                            <div>
                                <p className="flex  items-center justify-center text-white text-[12px]">
                                    Made with{" "}
                                    <img alt="" src={heart} className="mx-[3px]" /> in
                                    India <img alt="" src={flag} className="mx-[3px]" />
                                </p>
                            </div>
                        </>
                    )}
                    <div className={open ? "block" : "hidden"}>
                        <Sidebar
                            setOpen={setOpen}
                            open={open}
                            setNavigateToContacts={setNavigateToContacts}
                            navigateToContacts={navigateToContacts}
                            NavigateToHistory={NavigateToHistory}
                            setNavigateToHistory={setNavigateToHistory}
                            navigateToContactus={navigateToContactus}
                            setnavigateToContactus={setnavigateToContactus}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homemain
