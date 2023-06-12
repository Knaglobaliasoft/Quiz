import React, { useState } from "react"
import coinimage from "../../Assets/Image/coins-image.png"
import trueimage from "../../Assets/Image/true.png"
import hartimage from "../../Assets/Image/heart-icon.svg"
import flegimage from "../../Assets/Image/fleg.svg"

function Play({ setModel }) {
    const [open, setOpen] = useState(false)
    const [renderPage] = useState("defaultPage")

    return (
        <>
            {renderPage === "defaultPage" && (
                <div className="p-[16px] h-[97.5vh]">
                    <div className="justify-center flex">
                        <img src={coinimage} alt="coinimage" />
                    </div>
                    <div className="text-center mt-[20px] text-white">
                        <h3 className="text-[22px] font-[700]">You have got 200 coins</h3>
                        <p className="text-[12px]">
                            Check out more quizzes to test your skills and keeps grabbing more
                            coins!
                        </p>
                    </div>
                    <div className="mt-[24px]">
                        <button
                            className="font-bold text-[20px] w-[100%] rounded-[8px] bg-[#5c4b82] p-[10px] text-white"
                            onClick={() => setOpen(true)}
                        >
                            Play Now
                        </button>
                    </div>
                    <div className="mt-[20px]">
                        <p className="text-[12px] text-white text-center">Sponsored </p>
                    </div>
                    <div className="w-[296px] h-[272px] m-auto"></div>
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
                                We have many top trending categories like Cricket, World, India,
                                Business & many more!
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
                    {open && (
                        <div
                            class="relative z-10"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                            <div class="fixed inset-0 z-10 overflow-y-auto">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div class="bg-[#5c4b82] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div class="sm:flex sm:items-start">
                                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center bg-[#6d949c] justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10"></div>
                                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3
                                                        class="text-lg font-medium leading-6 text-white"
                                                        id="modal-title"
                                                    >
                                                        Deactivate account
                                                    </h3>
                                                    <div class="mt-2">
                                                        <p class="text-sm text-white">
                                                            Are you sure you want to deactivate your account?
                                                            All of your data will be permanently removed. This
                                                            action cannot be undone.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-[#5c4b82] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                class="inline-flex w-full justify-center rounded-md border border-transparent bg-[#6d949c] px-4 py-2 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm"
                                            >
                                                Deactivate
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setModel(true)}
                                                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Play
