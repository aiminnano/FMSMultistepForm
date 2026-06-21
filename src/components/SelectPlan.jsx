import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import { useState } from 'react'

function SelectPlan({step, setStep}){

    const [isOn, setIsOn] = useState(false);
    const [selected, setSelected] = useState(0);

    return(
        <>
            <div className={`${step === 2 ? 'flex' : 'hidden'} flex-col gap-30 md:gap-20 w-full`}>
                <div className="relative z-1 flex flex-col items-start shadow-2xl md:shadow-none rounded-xl gap-5 md:gap-9 w-full max-w-[768px] p-6 pt-8 pb-8 md:p-10 md:pl-25 md:pr-25 md:max-w-[643px] bg-white">      
                    <div className="flex flex-col items-start gap-2 md:gap-1">
                        <h1 className="text-2xl md:text-[33px] font-bold text-blue950">Select your plan</h1>
                        <p className="text-grey500">You have the option of monthly or yearly billing.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 w-full text-blue950 w-full">
                        <div className={`flex flex-start md:flex-col gap-4 md:gap-9 border w-full p-4 rounded-lg ${selected === 0 ? 'bg-blue50 border-purple600' : 'border-purple200' } cursor-pointer`} onClick={() => setSelected(0)}>
                            <img src={arcade} className='w-[40px] h-[40px]' alt="arcade-icon" />
                            <div className='flex flex-col items-start'>
                                <div className='text-blue950 font-medium'>Arcade</div>
                                <div className='text-sm text-grey500'>$9/mo</div>
                            </div>
                        </div>
                        <div className={`flex flex-start md:flex-col gap-4 md:gap-9 border border-purple200 hover:border-purple600 w-full p-4 rounded-lg cursor-pointer ${selected === 1 ? 'bg-blue50 border-purple600' : 'border-purple200'}`} onClick={() => setSelected(1)}>
                            <img src={advanced} className='w-[40px] h-[40px]' alt="arcade-icon" />
                            <div className='flex flex-col items-start'>
                                <div className='text-blue950 font-medium'>Advanced</div>
                                <div className='text-sm text-grey500'>$2/mo</div>
                            </div>
                        </div>
                        <div className={`flex flex-start md:flex-col gap-4 md:gap-9 border border-purple200 hover:border-purple600 w-full p-4 rounded-lg cursor-pointer ${selected === 2 ? 'bg-blue50 border-purple600' : 'border-purple200'}`} onClick={() => setSelected(2)}>
                            <img src={pro} className='w-[40px] h-[40px]' alt="arcade-icon" />
                            <div className='flex flex-col items-start'>
                                <div className='text-blue950 font-medium'>Pro</div>
                                <div className='text-sm text-grey500'>$15/mo</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-6 justify-center p-3 w-full bg-blue50'>
                        
                            <div className={`${isOn ? 'text-grey500 font-normal' : 'text-blue950 font-medium'}`}>Monthly</div>
                            <div 
                                onClick={() => setIsOn(!isOn)}
                                className={`relative w-9.5 h-5 rounded-full cursor-pointer bg-blue950`}
                                >   
                                <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-transform duration-300 ${isOn ? 'translate-x-5.5' : 'translate-x-1'}`} />
                            </div>
                            <div className={`${isOn ? 'text-blue950 font-medium' : 'text-grey500 font-normal'} `}>Yearly</div>
                        
                    </div>
                </div>
                <div className="flex items-center place-content-between md:pl-25 bg-white w-full p-4 md:p-0 md:pr-25 fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto ">
                    <div className='cursor-pointer text-grey500 text-sm hover:text-blue950 font-medium md:text-base' onClick={() => setStep(1)}>Go back</div>
                    <button type="button" className=" hover:bg-blue300 bg-blue950 text-white text-sm p-3 md:pl-6 md:pr-6 rounded-md md:text-base cursor-pointer">Next Step</button>
                </div>
            </div>
        </>
    )
}

export default SelectPlan;