import React, { useState } from "react"
import trigger from "../../Assets/Image/sublogo.png"
import close from "../../Assets/Image/close.svg"
import user from "../../Assets/Image/user.png"
import facebook from "../../Assets/Image/facebook.svg"
import twitter from "../../Assets/Image/twitter.svg"
import instagram from "../../Assets/Image/instagram.svg"
import pintrest from "../../Assets/Image/pin.svg"
import rules from "../../Assets/Image/contest-rules.svg"
import right from "../../Assets/Image/right.svg"
import coinhistory from "../../Assets/Image/coin-history.svg"
import about from "../../Assets/Image/about-us.svg"
import contact from "../../Assets/Image/contact-us.svg"
import report from "../../Assets/Image/report-issue.svg"
import Contenstrule from "../Contenstrule/Contenstrule"
import History from "../History/History"

const Sidebar = ({
    setOpen,
    setNavigateToContacts,
    navigateToContacts,
    NavigateToHistory,
    setNavigateToHistory
}) => {
    const [Report, setReport] = useState(true)
    return (
        <div>
            <>
                {navigateToContacts ? (
                    <Contenstrule setNavigateToContacts={setNavigateToContacts} navigateToContacts={navigateToContacts} />
                ) : NavigateToHistory ? (
                    <History setNavigateToHistory={setNavigateToHistory} NavigateToHistory={NavigateToHistory} />
                ) : (
                    <div className="m-auto fixed max-w-[300px] w-[300px]  top-0 bg-[#5c4b82] h-[100vh]">
                        <div className="flex justify-between px-5 pt-[10px]">
                            <img src={trigger} alt="trigger" className="w-[40px] h-[30px]" />
                            <button onClick={() => setOpen(false)}>
                                <img src={close} alt="close" className="w-[40px]" />
                            </button>
                        </div>
                        <div className="text-center text-white mt-[-40px]">
                            <img src={user} alt="user" className="m-auto" />
                            <h1 className="text-[16px] font-semibold">Welcome</h1>
                            <p className="text-[12px] font-medium">play Quiz & earn coins</p>
                            <button className="w-[80px] h-[34px] p-[8px] font-semibold rounded-lg bg-[#fff] text-[#5c4b82] flex items-center justify-center m-auto mt-[8px]">
                                SIGN IN
                            </button>
                        </div>
                        <div className="mt-[20px]">
                            <button
                                className="flex items-center justify-between w-full border border-t border-[#352851] p-[16px]"
                                onClick={() => setNavigateToContacts(true)}
                            >
                                <div className="flex items-center">
                                    <img src={rules} alt="rules" />
                                    <h4 className="text-white font-semibold text-[16px] ml-[20px]">
                                        Contest Rules
                                    </h4>
                                </div>
                                <img src={right} alt="right" className="w-[18px]" />
                            </button>
                            <button
                                className="flex items-center justify-between w-full border border-t border-[#352851] p-[16px]"
                                onClick={() => setNavigateToHistory(true)}
                            >
                                <div className="flex items-center">
                                    <img src={coinhistory} alt="coinhistory" />
                                    <h4 className="text-white font-semibold text-[16px] ml-[20px]">
                                        Coins History
                                    </h4>
                                </div>
                                <img src={right} alt="right" className="w-[18px]" />
                            </button>
                            <a href="/about" target="_blank" className="flex items-center justify-between w-full border border-t border-[#352851] p-[16px]">
                                <div className="flex items-center">
                                    <img src={about} alt="about" />
                                    <h4 className="text-white font-semibold text-[16px] ml-[20px]">
                                        About Us
                                    </h4>
                                </div>
                                <img src={right} alt="right" className="w-[18px]" />
                            </a>

                            <a href="/Contact" target="_blank" className="flex items-center justify-between w-full border border-t border-[#352851] p-[16px]">
                                <div className="flex items-center">
                                    <img src={contact} alt="contact" />
                                    <h4 className="text-white font-semibold text-[16px] ml-[20px]">
                                        Contact Us
                                    </h4>
                                </div>
                                <img src={right} alt="right" className="w-[18px]" />
                            </a>

                            <div className="relative">
                                <button
                                    className="flex items-center justify-between w-full border border-y border-[#352851] p-[16px]"
                                    onClick={() => setReport(!true)}
                                >
                                    <div className="flex items-center">
                                        <img src={report} alt="report" />
                                        <h4 className="text-white font-semibold text-[16px] ml-[20px]">
                                            Report anf Issue
                                        </h4>
                                    </div>
                                    <img src={right} alt="right" className="w-[18px]" />
                                </button>
                                {!Report ? (
                                    <>
                                        <div className="bg-[#5c4b82] absolute h-[560px] top-0 w-full z-[999]">
                                            <div className="text-center">

                                                <button className="flex justify-end w-full">
                                                    <img
                                                        src={close} alt="close"
                                                        className="w-[30px]"
                                                        onClick={() => setReport(!false)}
                                                    />
                                                </button>
                                                <h1 className="font-bold text-[24px] text-white text-center">
                                                    Report and Issue
                                                </h1>
                                                <p className="text-[12px] text-white">
                                                    What kind of problem have you encountered?
                                                </p>
                                            </div>
                                            <div className="mt-[20px]">
                                                <label class="container">
                                                    It's not responding
                                                    <input type="radio" name="radio" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    It stopped working
                                                    <input type="radio" name="radio" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    Delayed loading
                                                    <input type="radio" name="radio" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    Game not responding
                                                    <input type="radio" name="radio" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    Instruction not clear
                                                    <input type="radio" name="radio" />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="container">
                                                    Other
                                                    <input type="radio" name="radio" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="pl-[30px]">
                                                <p className="text-white text-[15px]">Enter other issues/problems</p>
                                                <textarea className="h-[40px] w-[150px] rounded-[15px] border-white border-4"></textarea>
                                            </div>
                                            <div className="mx-[20px]">
                                                <button className="mt-[30px] bg-[#6d949c] text-white w-full h-[56px] rounded-[6px]">Send Feedback</button>
                                            </div>
                                        </div>
                                    </>
                                ) : undefined}
                            </div>
                        </div>
                        <div className="pl-[20px] mt-[40px]">
                            <p className="pl-[10px] text-white">Connect with us</p>
                            <div className="flex">
                                <a
                                    href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569849&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9062198%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA5Y6eBhAbEiwA_2ZWITfLCinv13MNCIrvdDxcwctqZrBSEhEhOB0iMpyXXLIQOKzdr6wtlxoCPRIQAvD_BwE"
                                    className="border border-[#352851] rounded h-[44px] w-[44px] flex items-center justify-center m-[8px]"
                                >
                                    <img src={facebook} alt="facebook" />
                                </a>
                                <a
                                    href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                                    className="border border-[#352851] rounded h-[44px] w-[44px] flex items-center justify-center m-[8px]"
                                >
                                    <img src={twitter} alt="twitter" />
                                </a>
                                <a
                                    href="https://www.instagram.com/accounts/login/"
                                    className="border border-[#352851] rounded h-[44px] w-[44px] flex items-center justify-center m-[8px]"
                                >
                                    <img src={instagram} alt="instagram" />
                                </a>
                                <a
                                    href="https://www.instagram.com/accounts/login/"
                                    className="border border-[#352851] rounded h-[44px] w-[44px] flex items-center justify-center m-[8px]"
                                >
                                    <img src={pintrest} alt="pintrest" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </>
        </div>
    )
}

export default Sidebar
