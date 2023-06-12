import React, { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import logo from "../../Assets/Image/logo.png"
import contact from "../../Assets/Image/contactbg.svg"
import email from "../../Assets/Image/email-us-icon.svg"
import facebook from "../../Assets/Image/facebook.svg"
import twitter from "../../Assets/Image/twitter.svg"
import instagram from "../../Assets/Image/instagram.svg"
import pintrest from "../../Assets/Image/pin.svg"
import Header from "../../Components/Header/Header"

const people = [
    { id: 1, name: 'General Query' },
    { id: 2, name: 'Businnes inquiery' },
    { id: 3, name: 'Game Submission' },
    { id: 4, name: 'Advertising' },
    { id: 5, name: 'Others' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Contact = () => {
    const [selected, setSelected] = useState(people[3])
    return (
        <div>
            <div>
                <Header />
                <div>
                    <div className="mx-[20px] lg:mx-[60px] 2xl:mx-[110px] mb-[40px]">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-[50%] pt-[20px] pb-[40px]">
                                <div className="max-w-[600px] m-auto mb-[30px]">
                                    <img src={contact} alt="contact" className="w-full" />
                                </div>
                                <div className="max-w-[600px] m-auto text-center lg:text-start">
                                    <h1 className="text-[18px] font-bold mb-[8px]">
                                        Get in Touch with us
                                    </h1>
                                    <p>
                                        Have a question? We’d love to hear from you! 🤗 Drop us a line
                                        and we’ll get back to you as soon as possible
                                    </p>
                                    <div className="flex items-center justify-center lg:justify-start">
                                        <img src={email} alt="email" />
                                        <div className="ml-[10px] mt-[20px]">
                                            <p className="text-[12px]">Email Us </p>
                                            <a href="mailto:hello@atmegame.com" className="text-[12px]">
                                                hello@atmegame.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[50%] pt-[30px] lg:pt-0">
                                <div className="max-w-[500px] lg:max-w-[300px] xl:max-w-[400px] 2xl:max-w-[540px] m-auto">
                                    <div className="w-full mb-[24px]">
                                        <Listbox value={selected} onChange={setSelected}>
                                            {({ open }) => (
                                                <>
                                                    <div className="relative mt-2">
                                                        <Listbox.Button className="relative cursor-default bg-white  pl-3 pr-10 text-left text-gray-900 shadow-sm border border-[#6d949c] rounded-md w-full px-3 py-2 sm:text-sm sm:leading-6">
                                                            <span className="block truncate">{selected.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <BiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </Listbox.Button>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {people.map((person) => (
                                                                    <Listbox.Option
                                                                        key={person.id}
                                                                        className={({ active }) =>
                                                                            classNames(
                                                                                active ? 'bg-[#5c4b82] text-white' : 'text-gray-900',
                                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                            )
                                                                        }
                                                                        value={person}
                                                                    >
                                                                        {({ selected, active }) => (
                                                                            <>
                                                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                    {person.name}
                                                                                </span>

                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active ? 'text-white' : 'text-[#5c4b82]',
                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                        )}
                                                                                    >
                                                                                        <BsCheck className="h-5 w-5" aria-hidden="true" />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                ))}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>
                                    </div>
                                    <div className="mb-[24px]">
                                        <input variant="outlined" label="Name" className="border border-[#6d949c] rounded-md w-full px-3 py-2 outline-none" />
                                    </div>
                                    <div className="mb-[24px]">
                                        <input variant="outlined" label="Mobile" className="border border-[#6d949c] rounded-md w-full px-3 py-2 outline-none" />
                                    </div>
                                    <div className="mb-[24px]">
                                        <input variant="outlined" label="Email" className="border border-[#6d949c] rounded-md w-full px-3 py-2 outline-none" />
                                    </div>
                                    <div className="mb-[24px]">
                                        <textarea
                                            variant="static"
                                            label="Static"
                                            placeholder="Static"
                                            className="border border-[#6d949c] w-full rounded-md px-3 py-2 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <button className="bg-[#5c4b82] py-[10px] px-[15px] mt-[16px] rounded-[50px] w-full text-white">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex mx-[30px] 2xl:mx-[110px] flex-col lg:flex-row items-start justify-between ">
                        <div>
                            <img src={logo} className="w-[100px] sm:w-[160px]" alt="logo" />
                            <p className="max-w-[500px] xl:max-w-[600px] mt-[13px]">
                                Atmegame.com is a completely new platform for the online games
                                lovers. The best part is that all games available on our website are
                                free and can be enjoyable on multiple devices, including desktop,
                                mobile phones, tablets, and iPhones or iPads.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-[10px] mt-[10px] lg:mt-0 lg:mb-[30px]">About Us</h1>
                            <a href="#sport" className="mb-[10px]">Home</a>
                            <a href="#sport" className="mb-[10px]">Submit a Game</a>
                            <a href="#sport" className="mb-[10px]">About Us</a>
                            <a href="#sport" className="mb-[10px]">Blog</a>
                            <a href="#sport" className="mb-[10px]">Sitemap</a>
                            <a href="#sport" className="mb-[10px]">Contact Us</a>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-[10px] mt-[10px] lg:mt-0 lg:mb-[30px]">Games</h1>
                            <a href="#sport" className="mb-[10px]">Sport Games</a>
                            <a href="#sport" className="mb-[10px]">Action Games</a>
                            <a href="#sport" className="mb-[10px]">Arcode games</a>
                            <a href="#sport" className="mb-[10px]">Racing games</a>
                            <a href="#sport" className="mb-[10px]">Adventure games</a>
                            <a href="#sport" className="mb-[10px]">Girls games</a>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold mb-[10px] mt-[10px] lg:mt-0 lg:mb-[30px]">Connect</h1>
                            <button className="flex items-center bg-[#5c4b82] px-[10px] py-[8px] rounded-[20px] w-[150px] text-white mb-[7px]">
                                <img src={facebook} alt="facebook" className="mr-[10px]" />
                                Facebook
                            </button>
                            <button className="flex items-center bg-[#5c4b82] px-[10px] py-[8px] rounded-[20px] w-[150px] text-white mb-[7px]">
                                <img src={twitter} alt="twitter" className="mr-[10px]" />
                                Twitter
                            </button>
                            <button className="flex items-center bg-[#5c4b82] px-[10px] py-[8px] rounded-[20px] w-[150px] text-white mb-[7px]">
                                <img src={instagram} alt="instagram" className="mr-[10px]" />
                                Instagram
                            </button>
                            <button className="flex items-center bg-[#5c4b82] px-[10px] py-[8px] rounded-[20px] w-[150px] text-white mb-[7px]">
                                <img src={pintrest} alt="pintrest" className="mr-[10px]" />
                                Pintrest
                            </button>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Contact