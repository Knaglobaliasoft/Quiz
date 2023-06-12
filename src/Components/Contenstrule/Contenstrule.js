import React from "react"
import backimage from "../../Assets/Image/back-icon.svg"
import logo from "../../Assets/Image/logo.png"
import coinicon from "../../Assets/Image/coin-icon.png"
import notification from "../../Assets/Image/notifications-icon.svg"
import check from "../../Assets/Image/chek.svg"
import heart from "../../Assets/Image/heart-icon.svg"
import flag from "../../Assets/Image/fleg.svg"

const Contenstrule = ({ navigateToContacts, setNavigateToContacts, setOpenContest, openContest }) => {

    return (
        <>
            <div className="main-img ">
                <div className="w-full sm:w-[360px] m-auto h-[100vh] overflow-y-scroll bg-image">
                    <div className="gradint_bg py-[8px] px-[16px]">
                        <div className="flex items-center justify-between py-[8px]">
                            <div className="w-[50%] flex items-center">
                                {navigateToContacts ?
                                    <div className="w-[20%] cursor-pointer">
                                        <button onClick={() => setNavigateToContacts(false)}>
                                            <img src={backimage} alt="backimage" />
                                        </button>
                                    </div> : ''
                                }
                                {openContest ? <div className="w-[20%] cursor-pointer">
                                    <button onClick={() => setOpenContest(false)}>
                                        <img src={backimage} alt="backimage" />
                                    </button>
                                </div> : ''}

                                <div className="W-[40%]">
                                    <img src={logo} alt="logo" className="w-[90px]" />
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
                    </div>
                    <div className="px-[13px] pt-[20px]">
                        <h1 className="text-white text-[24px] font-bold">Contest Rules!</h1>
                        <ul>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                The winners for each quiz will be declared based on the scores
                                they obtain during the participation in the quiz.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                There will be a fixed time for declaring the winners of each quiz.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                You will have overall 60 seconds to solve as many as questions
                                from 20 questions in quiz.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                There will be 4 options given below each question and one will be
                                the answer for it out of them.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                Each right answer fetches you 25 points.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                Each wrong answer gives you (-) 10 points.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                Remember users can use each lifeline once during the each contest.
                                Use a given amount of coins from your coin bank or watch an ad for
                                a few secs to use the lifeline for free!
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px]">
                                <img src={check} alt="check" className="w-[14px] mr-[12px]" />
                                You would have 4 different lifelines to use:
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px] px-[20px]">
                                <div className="h-[10px] w-[16px] border border-white rounded-full mt-[6px] mr-[12px]"></div>
                                50:50 – On using it, two incorrect answers will be eliminated from
                                the screen.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px] px-[20px]">
                                <div className="h-[10px] w-[16px] border border-white rounded-full mt-[6px] mr-[12px]"></div>
                                Freezer Time – A pause for the ongoing timer will take place for
                                30 seconds while allowing the users get more time to answer the
                                question.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px] px-[20px]">
                                <div className="h-[10px] w-[16px] border border-white rounded-full mt-[6px] mr-[12px]"></div>
                                Audience Poll – You can use this option to choose the right answer
                                out of 4 options by using the intelligence of the smart audience.
                            </li>
                            <li className="flex items-start text-white text-[14px] mb-[18px] px-[20px]">
                                <div className="h-[10px] w-[16px] border border-white rounded-full mt-[6px] mr-[12px]"></div>
                                Flip Question – A new question will interchange the question
                                currently showing on the screen.
                            </li>
                        </ul>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px] text-white text-center">Sponsored </p>
                    </div>
                    <div className="w-[296px] h-[272px] m-auto"></div>
                    <div>
                        <p className="flex  items-center justify-center text-white text-[12px]">
                            Made with <img alt="" src={heart} className="mx-[3px]" /> in
                            India <img alt="" src={flag} className="mx-[3px]" />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contenstrule
