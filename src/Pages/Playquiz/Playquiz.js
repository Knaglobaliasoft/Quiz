import React, { useState } from "react"
import coin from "../../Assets/Image/coin-iconquiz.png"
import heart from "../../Assets/Image/heart-icon.svg"
import flag from "../../Assets/Image/fleg.svg"
import audience from "../../Assets/Image/audience.svg"
import freeze from "../../Assets/Image/freeze.svg"
import flip from "../../Assets/Image/flip.png"
import close from "../../Assets/Image/close.svg"
import History from "../../Components/History/History"

const Playquiz = ({ back }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("50:50")
    const [opensignup, setOpensignup] = useState(false)
    const [add, setAdd] = useState(false)

    return (
        <>
            {opensignup ? (
                <History setOpensignup={setOpensignup} opensignup={opensignup} />
            ) : (
                <>
                    <div className="main-img">
                        <div className="relative w-full sm:w-[360px] m-auto h-screen overflow-y-auto bg-image py-3">
                            <div className="flex justify-between h-full flex-col gap-3">
                                <div className="px-4">
                                    <div>
                                        <div className="mb-10">
                                            <p className="text-[10px] text-center text-white my-2">
                                                FILM AND CELEBRITY
                                            </p>
                                            <h6 className="text-[16px] text-white justify-center font-bold flex items-center">
                                                Play and Win 250,000
                                                <img src={coin} alt="coin" className="w-[18px] ml-2" />
                                            </h6>
                                        </div>
                                        <div className="flex text-white items-end pb-[30px] justify-between border-2 border-b-0 border-[#6d949c] rounded-t-lg relative p-4">
                                            <div className="flex items-center mb-[10px]">
                                                <div className="h-[7px] w-[20px] bg-green-500 mr-2 rounded-lg"></div>
                                                <span className="">0</span>
                                            </div>
                                            <div className="flex flex-col justify-center text-center border-4 border-[#fb0] rounded-full h-[70px] w-[70px] bg-[#5c4b82] mt-[-50px]">
                                                <strong className="text-xl font-bold">52</strong>
                                                <span className="text-white text-[10px] font-bold">
                                                    SEC LEFT
                                                </span>
                                            </div>
                                            <div className="flex items-center mb-[10px]">
                                                <div className="h-[7px] w-[20px] bg-red-500 mr-2 rounded-lg"></div>
                                                <span className="">0</span>
                                            </div>
                                        </div>
                                        <div className="border-2 border-[#6d949c] rounded-b-lg relative">
                                            <h1 className="text-sm sm:text-base text-white text-center pb-4 px-2 pt-2 font-semibold mt-[24px]">
                                                A Huge Network Of Millions Of Computer Networks
                                                Constitutes The
                                            </h1>
                                            <div className="border-2 border-white border-dashed w-[60px] m-auto"></div>
                                            <div className="px-3">
                                                <div>
                                                    <button className="bg-white text-[#5c4b82] font-semibold h-[54px] text-xs sm:text-sm rounded-lg w-full mt-3">
                                                        Internet
                                                    </button>
                                                    <button className="bg-white text-[#5c4b82] font-semibold h-[54px] text-xs sm:text-sm rounded-lg w-full mt-3">
                                                        Satelites
                                                    </button>
                                                    <button className="bg-white text-[#5c4b82] font-semibold h-[54px] text-xs sm:text-sm rounded-lg w-full mt-3">
                                                        Electronic Device
                                                    </button>
                                                    <button className="bg-white text-[#5c4b82] font-semibold h-[54px] text-xs sm:text-sm rounded-lg w-full mt-3">
                                                        E-mail
                                                    </button>
                                                </div>
                                                <p className="text-center text-white my-4">
                                                    Your Score : <strong>0</strong>
                                                </p>
                                            </div>
                                            <div className="absolute left-[35%] top-[-13px]">
                                                <p className="text-white text-sm border-2 rounded-full px-[6px] bg-[#5c4b82]">
                                                    Question <strong>1 /</strong>20
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="flex mt-4 items-center justify-center text-white text-[12px]">
                                                Made with
                                                <img src={heart} alt="heart" className="mx-[3px]" /> in
                                                India{" "}
                                                <img src={flag} alt="flag" className="mx-[3px]" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="relative mb-[27px]">
                                        <div className="h-[2px] w-full bg-[#5c4b82]"></div>
                                    </div>
                                    <div className="absolute top-[-10px] left-[38%] sm:left-[130px]">
                                        <button onClick={() => setAdd(!add)} className="text-white text-sm border-2 w-[100px] flex justify-center rounded-full px-[6px] bg-[#5c4b82]">
                                            LIFELINES
                                        </button>
                                    </div>
                                    <ul className={add ? "items-center justify-between px-4 hidden" : "flex items-center justify-between px-4"}>
                                        <div className={value === "50:50" ? "h-[120px]" : "h-[120px]"}>
                                            <button
                                                className="text-white text-center"
                                                onClick={() => {
                                                    setOpen(true); setValue("50:50")
                                                }}
                                            >
                                                <div className="border-[#6d949c] border rounded-full mx-[10px] m-auto h-14 w-14 flex items-center justify-center mb-[21px]">
                                                    <span>50</span>:<span>50</span>
                                                </div>
                                                <span>50 : 50
                                                </span>
                                            </button>
                                        </div>
                                        <div className={value === "audience" ? "h-[120px]" : "h-[120px]"}>
                                            <button
                                                className="text-white text-center"
                                                onClick={() => {
                                                    setValue("audience"); setOpen(true)
                                                }}
                                            >
                                                <div className="border-[#6d949c] border rounded-full m-auto h-14 w-14 flex items-center justify-center mb-3">
                                                    <img className="w-[24px]" src={audience} alt="audience" />
                                                </div>
                                                <span>Audience poll</span>
                                            </button>
                                        </div>
                                        <div className={value === "Freeze" ? "h-[120px]" : "h-[120px]"}>
                                            <button
                                                className="text-white text-center"
                                                onClick={() => {
                                                    setOpen(true); setValue("Freeze")
                                                }}
                                            >
                                                <div className="border-[#6d949c] border rounded-full m-auto h-14 w-14 flex items-center justify-center mb-3">
                                                    <img className="w-[22px]" src={freeze} alt="freeze" />
                                                </div>
                                                <span>Freeze Timer</span>
                                            </button>
                                        </div>
                                        <div className={value === "Flip" ? "h-[120px]" : "h-[120px]"}>
                                            <button
                                                className="text-white text-center"
                                                onClick={() => {
                                                    setOpen(true); setValue("Flip")
                                                }}
                                            >
                                                <div className="border-[#6d949c] border rounded-full m-auto h-14 w-14 flex items-center justify-center mb-3">
                                                    <img src={flip} alt="flip" className="w-[24px]" />
                                                </div>
                                                <span>Flip Question</span>
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            {open ? (
                                <>
                                    <div className="p-4 absolute bottom-0 bg-[#5c4b82] w-full  max-w-full  border-t-2 border-[#6849aa] text-white text-center">
                                        <div className="relative">
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="w-[40px] flex ml-auto justify-end"
                                            >
                                                <img src={close} alt="close" className="w-[30px] hover:bg-[#00000026] rounded-full" />
                                            </button>
                                            <h1 className="text-lg font-bold mb-[20px] mt-[-14px]">
                                                Use Audience Poll Lifeline
                                            </h1>
                                            <p className="text-sm font-normal mb-[24px]">
                                                The Audience poll be paused for 30 seconds to
                                                allow  more time  to answer  the questions.
                                            </p>
                                            <div>
                                                <button
                                                    className="relative  glow-button bg-[#f09f22e6] text-[20px] font-bold h-[50px] w-full rounded-lg mb-[10px] transition-all"
                                                    onClick={() => setOpensignup(true)}
                                                >
                                                    Use For Free
                                                    <div className="glow-button-spark"></div>
                                                </button>
                                            </div>
                                            <span className="px-[6px] text-[#fff]">OR</span>
                                            <button
                                                className="join h-[50px] mt-[10px] w-full border border-white rounded-lg flex items-center justify-center">
                                                Use For 20  <img src={coin} alt="coin" className="w-[18px] ml-2" />
                                            </button>
                                            {value === "50:50" ? (
                                                <div className="absolute top-[-60px] left-[120px]">
                                                    <div className="border-[#5c4b82] rounded-full bg-[#5c4b82] h-16 w-16 flex items-center justify-center mb-3">
                                                        <span>50</span>:<span>50</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            {value === "audience" ? (
                                                <div className="absolute top-[-60px] left-[120px]">
                                                    <div className="border-[#5c4b82] rounded-full bg-[#5c4b82] h-16 w-16 flex items-center justify-center mb-3">
                                                        <img
                                                            className="w-[30px]"
                                                            src={audience}
                                                            alt="audience"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            {value === "Freeze" ? (
                                                <div className="absolute top-[-60px] left-[120px]">
                                                    <div className="border-[#5c4b82] rounded-full bg-[#5c4b82] h-16 w-16 flex items-center justify-center mb-3">
                                                        <img className="w-[26px]" src={freeze} alt="freeze" />
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            {value === "Flip" ? (
                                                <div className="absolute top-[-60px] left-[120px]">
                                                    <div className="border-[#5c4b82] rounded-full bg-[#5c4b82] h-16 w-16 flex items-center justify-center mb-3">
                                                        <img src={flip} alt="flip" className="w-[30px]" />
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Playquiz
