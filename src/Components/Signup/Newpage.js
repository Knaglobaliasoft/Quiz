import React from 'react'
import logoimage from '../../Assets/Image/logo.png'
import backimage from '../../Assets/Image/back-icon.svg'
import Notificationimage from '../../Assets/Image/notifications-icon.svg'
import coinimage from '../../Assets/Image/coin-icon.png'
import googalimage from '../../Assets/Image/google.png'
import hartimage from '../../Assets/Image/heart-icon.svg'
import flegimage from '../../Assets/Image/fleg.svg'
import trueimage from '../../Assets/Image/true.png'


const Newpage = ({ back }) => {

    return (
        <>
            <div>
                <div className='w-full m-auto'>
                    <div className='justify-between gradint_bg py-[8px] px-[16px] flex items-center'>
                        <div className='flex items-center '>
                            <div className='pr-[10px]'>
                                <button onClick={() => { back() }}><img src={backimage} alt='backimage' /></button>
                            </div>
                            <div className=''>
                                <img src={logoimage} alt="logoimage" className="w-[100px]" />
                            </div>
                        </div>
                        <div className='w-[40px] h-[40px] p-[8px] rounded-[50px]'>
                            <img src={Notificationimage} alt="Notificationimage" className="m-auto" />
                        </div>
                    </div>
                    <div className='h-[91.8vh]'>
                        <div className='mt-[24px] text-white text-center'>
                            <h3 className='text-[22px] font-bold'>Sign up now & Play Quiz</h3>
                        </div>
                        <div className='flex text-center justify-center items-start gap-[5px] pt-[10px] text-white'>
                            <p className='pb-[24px] text-[12px]'>Play Quizzes and win</p>
                            <img src={coinimage} alt="coinimage" className="w-[18px] h-[18px]" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='bg-[#fff] flex items-center gap-[10px] rounded-[10px] p-[10px]'>
                                <img src={googalimage} alt="googalimage" className="w-[18px] h-[18px]" />
                                <a href='https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fplay128.atmequiz.com%3Fid%3Dauth759151&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=642956286698-e0vmvj5417iar00j9aj08f428n4ncke9.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fplay128.atmequiz.com&prompt&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow' className='text-[#6d949c] font-[600]'>Sign up with Googal</a>
                            </div>
                        </div>
                        <div className='mt-[32px] p-[16px] text-white'>
                            <h3 className='pb-[24px] text-[18px] font-bold'>Play Quiz and Win Coins!</h3>
                            <ul className='text-[14px]'>
                                <li className='pb-[16px] flex items-center gap-[10px]'>
                                    <img className='bg-[#6d949c] h-[18px] w-[18px] rounded-[50px] p-[4px]' src={trueimage} alt="trueimage" />
                                    Get coins on the completion of each quiz.</li>
                                <li className='pb-[16px] flex items-center gap-[10px]'>
                                    <img className='bg-[#6d949c] h-[18px] w-[18px] rounded-[50px] p-[4px]' src={trueimage} alt="trueimage" />
                                    Upgrade your skills with our top quizzes.</li>
                                <li className='pb-[16px] flex items-center gap-[10px]'>
                                    <img className='bg-[#6d949c] h-[18px] w-[18px] rounded-[50px] p-[4px]' src={trueimage} alt="trueimage" />
                                    We have many top trending categories like Cricket, World, India, Business & many more!</li>
                                <li className='pb-[16px] flex items-center gap-[10px]'>
                                    <img className='bg-[#6d949c] h-[18px] w-[18px] rounded-[50px] p-[4px]' src={trueimage} alt="trueimage" />
                                    Millions of quiz admirer like you showed trust on us.</li>
                                <li className='pb-[16px] flex items-center gap-[10px]'>
                                    <img className='bg-[#6d949c] h-[18px] w-[18px] rounded-[50px] p-[4px]' src={trueimage} alt="trueimage" />
                                    Challenge lakhs of players from across the world!</li>
                            </ul>
                        </div>
                        <div className='text-white pt-[16px] text-center'>
                            <div className='flex items-center gap-[5px] justify-center text-[12px]'>made <img src={hartimage} alt="hartimage" /> with <img src={flegimage} alt="flegimage" /> love</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Newpage


