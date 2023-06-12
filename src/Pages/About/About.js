import React from "react"
import logo from "../../Assets/Image/logo.png"
import about from "../../Assets/Image/about-us-page-image.svg"
import home from "../../Assets/Image/homeabout.svg"
import mission from "../../Assets/Image/our-mission.svg"
import vision from "../../Assets/Image/our-vision.svg"
import signup from "../../Assets/Image/sign-up-image.svg"
import facebook from "../../Assets/Image/facebook.svg"
import twitter from "../../Assets/Image/twitter.svg"
import instagram from "../../Assets/Image/instagram.svg"
import pintrest from "../../Assets/Image/pin.svg"
import Header from "../../Components/Header/Header"

const About = () => {
    return (
        <div>
            <Header />
            <div className="max-[50px] 2xl:mx-[110px] px-[14px] sm:px-[33px] 2xl:px-[43px] about">
                <div>
                    <div className=" mb-[40px]">
                        <div className="flex-col lg:flex-row flex items-center justify-between">
                            <div className="w-full lg:w-[50%] pt-[20px] pb-[40px]">
                                <div className="mb-[40px]">
                                    <h1 className="text-[22px] font-bold mb-[24px]">
                                        A Widely Accepted Platform for Fun Seekers
                                    </h1>
                                    <p className="text-[14px] xl:text-[16px] max-w-[760px] mb-[40px]">
                                        Atmegame.com is a completely new platform for the online
                                        games lovers. The best part is that all games available on
                                        our website are free and can be enjoyable on multiple
                                        devices, including desktop, mobile phones, tablets, and
                                        iPhones or iPads. So, all you need to bother only about what
                                        kind of new online game you want to try and start having
                                        fun!
                                    </p>
                                    <p className="text-[14px] xl:text-[16px] max-w-[750px]">
                                        It is our pleasure to help players of all ages to explore
                                        the best world of PC and HTML5 games for free. We respect
                                        the feelings and tastes of every gamer right from those who
                                        are crazy for death-defying action challenges to the foodies
                                        who love to practice their culinary skills by checking out a
                                        huge variety of cooking games.
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-[20px] xl:text-[22px] font-bold mb-[14px]">
                                        We Compile Best Online Games in One Place
                                    </h1>
                                    <p className="text-[14px] xl:text-[16px] max-w-[710px]">
                                        On atmegame.com, we have got you covered with all the
                                        popular online games categories, such as high flying
                                        airplane games, mind boggling puzzles, adrenaline-infused
                                        racing games, thrilling shooting games, many more. You can
                                        even find a fabulous collection of stickman games such as
                                        Stickman Downhill, Stickman Dirtbike, and Stickman Freeride.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-[50%]  pt-[20px] pb-[40px]">
                                <div>
                                    <img className="m-auto lg:ml-auto  lg:mr-[60px]" src={about} alt='about' />
                                    <p className="text-[18px] xl:text-[22px] mt-[60px] max-w-[630px] border-l-2  border-[#045c5c] pl-[30px]">
                                        We have collected the best free games to play on the web for
                                        you. Browse our wider and cool collection of colorful and
                                        graphically-improved mobile-friendly games and let the
                                        high-quality entertainment will work for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center lg:flex-row items-center p-[20px] 2xl:p-[60px] border border-dashed border-black">
                    <div className="w-full lg:w-[80%]">
                        <h1 className="text-center lg:text-start text-[22px] mb-[16px]">
                            A Brief Overview about Atmegame
                        </h1>
                        <p className="overview max-w-[530px] xl:max-w-[800px] mb-[30px]">
                            Established in 2015, Atmegame.com is an advanced technology-driven
                            gaming portal that continues fulfilling multiple gaming needs of
                            players from all age groups. It is a wonderful effort of Apay
                            Marketing Private Limited, which is highly valued today for
                            employing the power of simulative technologies.
                        </p>
                        <p className="overview max-w-[530px] xl:max-w-[820px] !mt-[20px] lg:mt-0">
                            With more 5000 games over the website and over 200 in-house games,
                            we have today evolved as one of the most popular free online game
                            website. Our experts work closely with the knowledgeable and
                            skilled game developers to deliver state-of-the-art products.
                            Simple and eye-catchy games have helped to increase traffic on our
                            website continuously and include us in the list of top game
                            websites in India.
                        </p>
                    </div>
                    <div className="w-full lg:w-[40%] pt-[20px] lg:pt-0">
                        <div>
                            <div className="">
                                <div className="relative m-auto lg:mr-auto max-w-[450px] pb-[20px] rounded-[60px] bg-[#0474fe4a] pl-[80px]">
                                    <h1 className="text-[40px] xl:text-[50px] text-[#0474fe]">2015</h1>
                                    <p className="text-[18px] mt-[-10px] xl:mt-[-20px]">Established in</p>
                                    <div className="absolute shadow-lg left-[-20px] top-[10px] bg-white h-[80px] w-[80px] flex items-center justify-center rounded-full">
                                        <img src={home} alt='home' />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div className="relative m-auto lg:mr-auto max-w-[450px] pb-[20px] rounded-[60px] bg-[#e7f6f3] pl-[80px]">
                                    <h1 className="text-[40px] xl:text-[50px] text-[#26c782]">200 +</h1>
                                    <p className="text-[18px] mt-[-10px] xl:mt-[-20px]">In-house games</p>
                                    <div className="absolute left-[-20px] top-[10px] bg-white h-[80px] w-[80px] flex items-center justify-center rounded-full">
                                        <img src={home} alt='home' />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div className="relative m-auto lg:mr-auto max-w-[450px] pb-[20px] rounded-[60px] bg-[#ebe7ff] pl-[80px]">
                                    <h1 className="text-[40px] xl:text-[50px] text-[#6142ff]">5000 +</h1>
                                    <p className="text-[18px] mt-[-10px] xl:mt-[-20px]">Games on Website</p>
                                    <div className="absolute left-[-20px] top-[10px] bg-white h-[80px] w-[80px] flex items-center justify-center rounded-full">
                                        <img src={home} alt='home' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row pt-[40px] gap-[10px]">
                    <div className="w-full lg:w-[50%] p-[20px] lg:pt-[60px] lg:pr-[70px] 2xl:pr-[100px] lg:pb-[20px] lg:pl-[50px] 2xl:pl-[70px] mission">
                        <h1 className="mb-[16px] text-[16px] font-bold">Our Mission</h1>
                        <p className="max-w-[480px]">
                            To offer the enormous collection of free online games that players
                            of all ages are sure to love. We through our wider team of
                            professionals proudly maintain our values of collaboration and
                            integrity. We deliberately support our developers and their
                            quality work, while working hard on key points on how to grow a
                            rich and connected player community.
                        </p>
                        <img src={mission} alt='mission' className="m-auto lg:mr-auto mt-[50px]" />
                    </div>
                    <div className="w-full lg:w-[50%] p-[20px] lg:pt-[60px] lg:pr-[70px] 2xl:pr-[100px] lg:pb-[20px] lg:pl-[50px] 2xl:pl-[70px] vision">
                        <h1 className="mb-[16px] text-[16px] font-bold">Our Vision</h1>
                        <p className="max-w-[480px]">
                            With a vision of creating a worldwide accepted free online gaming
                            platform, we are focused to improve the world of fun and
                            entertainment. Since inception, Atmegame.com prioritized serving
                            gamers without asking their age or gender. This means that players
                            can trust us when it comes to seeking unbiased thrill and fun.
                        </p>
                        <img src={vision} alt='vision' className="m-auto lg:mr-auto mt-[50px]" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row px-[20px] sm:px-[60px] py-[30px] bg-[#f5f7ff] mt-[40px]">
                    <div className="mr-[60px]">
                        <img src={signup} alt='signup' className="w-[200px]" />
                    </div>
                    <div>
                        <h1 className="text-[16px] mb-[16px] font-bold">Join the Fun</h1>
                        <p className="max-w-[1100px]">
                            Sign up with our website for free to avail of all the amazing
                            benefits of the registered players in the form of awards,
                            statistics, your own avatar, high scores and much more! Play your
                            desired game in your PC, Windows phone, Android phone, iPhone to
                            have fun on the go!
                        </p>
                        <button className="bg-[#5c4b82] text-white rounded-[50px] mt-[16px] w-[170px] h-[42px]">Join Now</button>
                    </div>
                </div>
                <div className="py-[40px]">
                    <div className="flex flex-col lg:flex-row items-start justify-between ">
                        <div>
                            <img src={logo} alt='logo' className="w-[100px] sm;w-[160px]" />
                            <p className="max-w-[500px] xl:max-w-[600px] mt-[13px]">
                                Atmegame.com is a completely new platform for the online games
                                lovers. The best part is that all games available on our website are
                                free and can be enjoyable on multiple devices, including desktop,
                                mobile phones, tablets, and iPhones or iPads.
                            </p>
                        </div>
                        <div className="pt-5 lg:pt-0 flex flex-col">
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
                                <img src={facebook} alt='' className="mr-[10px]" />
                                Facebook
                            </button>
                            <button className="flex items-center bg-[#5c4b82] px-[10px] py-[8px] rounded-[20px] w-[150px] text-white mb-[7px]">
                                <img src={twitter} alt='' className="mr-[10px]" />
                                Twitter
                            </button>
                            <button className="flex items-center bg-[#5c4b82] px-[10px] py-[8px] rounded-[20px] w-[150px] text-white mb-[7px]">
                                <img src={instagram} alt='' className="mr-[10px]" />
                                Instagram
                            </button>
                            <button className="flex items-center bg-[#5c4b82] px-[10px] py-[8px] rounded-[20px] w-[150px] text-white mb-[7px]">
                                <img src={pintrest} alt='' className="mr-[10px]" />
                                Pintrest
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
