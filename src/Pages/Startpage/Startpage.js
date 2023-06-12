import React, { useState } from "react"
import Newpage from "../../Components/Signup/Newpage"
import trueimage from "../../Assets/Image/true.png"
import hartimage from "../../Assets/Image/heart-icon.svg"
import flegimage from "../../Assets/Image/fleg.svg"
import Play from "../../Components/Play/Play"
import Mainpage from "../Mainpage/Mainpage"

const Startpage = () => {
    const [renderPage, setRenderPage] = useState("defaultPage")
    const [model, setModel] = useState(false)
    // const pageChangeHandle = (page) => {
    //     console.log(pageChangeHandle)
    //     setRenderPage(page)
    // }

    return (
        <>
            {model ? (
                <Mainpage />
            ) : (
                <div className="main-img">
                    <div className="w-full sm:w-[360px] h-screen overflow-y-auto bg-image m-auto">
                        {renderPage === "defaultPage" && (
                            <div className="p-[16px]">
                                <div>
                                    <p className="text-[12px] text-white text-center">Sponsored </p>
                                </div>
                                <div className="w-[296px] h-[272px] m-auto"></div>
                                <div className="box_shedow border-[1px] border-[#6d949c] rounded-[8px] mt-[8px]">
                                    <div className="p-[16px]">
                                        <div className="text-white text-center">
                                            <h3 className="text-[22px] font-bold">Quik Start!</h3>
                                            <p className="text-[12px] pb-[8px]">
                                                Just answer 2 questions and win
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-[2px] relative w-[100%] bg-[#5c4b82]">
                                        <div className=" text-white top-[-11px] left-[34%] z-10 bg-[#5c4b82] px-[15px] py-[2px] absolute w-max text-[12px] rounded-full">
                                            <p>
                                                Question <span>1 / 2</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-[24px] text-white p-[5px]">
                                        <h3 className="font-bold text-center p-[16px]">
                                            The World Environment Day is celebrated through the world on
                                            …… every year.
                                        </h3>
                                        <ul className=" flex-wrap-reverse gap-[5px] m-[2px] justify-between">
                                            <li className="">
                                                <button
                                                    className={
                                                        renderPage === "play"
                                                            ? ""
                                                            : "w-[100%]  h-[40px] my-[5px] bg-[#5c4b82] box_shedow_two p-[8px] text-[#fff] font-[500] text-[14px] rounded-[8px]"
                                                    }
                                                    onClick={() => setRenderPage("play")}
                                                >
                                                    World Health Day
                                                </button>
                                            </li>
                                            <li className="">
                                                <button
                                                    className={
                                                        renderPage === "play"
                                                            ? ""
                                                            : "w-[100%]  h-[40px] my-[5px] bg-[#5c4b82] box_shedow_two p-[8px] text-[#fff] font-[500] text-[14px] rounded-[8px]"
                                                    }
                                                    onClick={() => setRenderPage("play")}
                                                >
                                                    World AIDS Day
                                                </button>
                                            </li>
                                            <li className="">
                                                <button
                                                    className={
                                                        renderPage === "play"
                                                            ? ""
                                                            : "w-[100%]  h-[40px] my-[5px] bg-[#5c4b82] box_shedow_two p-[8px] text-[#fff] font-[500] text-[14px] rounded-[8px]"
                                                    }
                                                    onClick={() => setRenderPage("play")}
                                                >
                                                    World Human Rights Day
                                                </button>
                                            </li>
                                            <li className="">
                                                <button
                                                    className={
                                                        renderPage === "play"
                                                            ? ""
                                                            : "w-[100%]  h-[40px] my-[5px] bg-[#5c4b82] box_shedow_two p-[8px] text-[#fff] font-[500] text-[14px] rounded-[8px]"
                                                    }
                                                    onClick={() => setRenderPage("play")}
                                                >
                                                    World Habitat Day
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-white mt-[20px] text-center pb-[12px] p-[8px]">
                                        <h6 className="text-[14px] font-[500]"># Fun Fact</h6>
                                        <p className="text-[12px]">
                                            Praveen Kumar bowled the first delivery in the IPL played by
                                            Sourav Ganguly.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-[16px] items-center text-center">
                                    <button
                                        className={renderPage === "rainbow" ? "" : ""}
                                        onClick={() => setRenderPage("rainbow")}
                                    >
                                        <h4 className="mb-0 text-white hover:underline">Sign up</h4>
                                    </button>
                                    <span className="px-[6px] text-[#6d949c]">OR</span>
                                    <button
                                        className={renderPage === "hello" ? "" : ""}
                                        onClick={() => setRenderPage("hello")}
                                    >
                                        <h4 className="mb-0 text-white hover:underline">Sign in</h4>
                                    </button>
                                </div>
                                <div className="mt-[32px] text-white">
                                    <h3 className="pb-[24px] text-[18px] font-bold">
                                        Play Quiz and Win Coins!
                                    </h3>
                                    <ul className="text-[14px]">
                                        <li className="pb-[16px] flex items-center gap-[10px]">
                                            <img
                                                className="bg-[#5c4b82] h-[18px] w-[18px] rounded-[50px] p-[4px]"
                                                src={trueimage} alt="trueimage"
                                            />
                                            Get coins on the completion of each quiz.
                                        </li>
                                        <li className="pb-[16px] flex items-center gap-[10px]">
                                            <img
                                                className="bg-[#5c4b82] h-[18px] w-[18px] rounded-[50px] p-[4px]"
                                                src={trueimage} alt="trueimage"
                                            />
                                            Upgrade your skills with our top quizzes.
                                        </li>
                                        <li className="pb-[16px] flex items-center gap-[10px]">
                                            <img
                                                className="bg-[#5c4b82] h-[18px] w-[18px] rounded-[50px] p-[4px]"
                                                src={trueimage} alt="trueimage"
                                            />
                                            We have many top trending categories like Cricket, World,
                                            India, Business & many more!
                                        </li>
                                        <li className="pb-[16px] flex items-center gap-[10px]">
                                            <img
                                                className="bg-[#5c4b82] h-[18px] w-[18px] rounded-[50px] p-[4px]"
                                                src={trueimage} alt="trueimage"
                                            />
                                            Millions of quiz admirer like you showed trust on us.
                                        </li>
                                        <li className="pb-[16px] flex items-center gap-[10px]">
                                            <img
                                                className="bg-[#5c4b82] h-[18px] w-[18px] rounded-[50px] p-[4px]"
                                                src={trueimage} alt="trueimage"
                                            />
                                            Challenge lakhs of players from across the world!
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-white pt-[16px] text-center">
                                    <p className="flex items-center gap-[5px] justify-center text-[12px]">
                                        made <img src={hartimage} alt="hartimage" /> with{" "}
                                        <img src={flegimage} alt="flegimage" /> love
                                    </p>
                                </div>
                            </div>
                        )}
                        {renderPage === "hello" && (
                            <>
                                <Newpage back={() => setRenderPage("defaultPage")} />
                                <button
                                    className={renderPage === "hello" ? "" : ""}
                                    onClick={() => setRenderPage("defaultPage")}
                                >
                                    <span className="mb-0 text-white"></span>
                                </button>
                            </>
                        )}

                        {renderPage === "play" && (
                            <>
                                <Play
                                    setModel={setModel}
                                    back={() => setRenderPage("defaultPage")}
                                />
                                <button
                                    className={renderPage === "hello" ? "" : ""}
                                    onClick={() => setRenderPage("defaultPage")}
                                >
                                    <span className="mb-0 text-white"></span>
                                </button>
                            </>
                        )}
                        {renderPage === "rainbow" && (
                            <>
                                <Newpage back={() => setRenderPage("defaultPage")} />
                                <button
                                    className={renderPage === "hello" ? "" : ""}
                                    onClick={() => setRenderPage("defaultPage")}
                                >
                                    <span className="mb-0 text-white"></span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Startpage
