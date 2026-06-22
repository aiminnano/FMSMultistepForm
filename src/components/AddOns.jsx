import { useState } from 'react'
import checkmark from '../../assets/images/icon-checkmark.svg'

function AddOns({step, setStep, option, setOption, plan, setPlan, isOn}){

    const [checked, setChecked] = useState(false);

    return(
        <>
            <div className={`${step === 3 ? 'flex' : 'hidden'} flex-col gap-30 md:gap-12 w-full`}>
                <div className="relative z-1 flex flex-col items-start shadow-2xl md:shadow-none rounded-xl gap-5 md:gap-9 w-full max-w-[768px] p-6 pt-8 pb-8 md:p-10 md:pl-25 md:pr-25 md:max-w-[643px] bg-white">
                    <div className="flex flex-col items-start gap-2 md:gap-1">
                        <h1 className="text-2xl md:text-[33px] font-bold text-blue950">Pick add-ons</h1>
                        <p className="text-grey500">Add-ons help enhance your gaming experience.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:gap-4 w-full text-blue950">
                        <div className={`flex items-center gap-4 place-content-between border border-purple200 w-full p-3 md:p-5.5 md:pt-4.5 md:pb-4.5 rounded-lg ${checked ? 'border-purple600 bg-blue50' : 'border-purple200' }`}>
                            <div className='flex items-center gap-3.5 md:gap-5.5'>   
                                <div className={`flex items-center justify-center border border-purple200 w-5.5 h-5.5 rounded-sm cursor-pointer ${checked ? 'bg-purple600' : 'bg-white' }`} onClick={() => setChecked(!checked)}>
                                    {checked && <span><img src={checkmark} alt="checked-icon" /></span> }
                                </div>
                                <div className='flex flex-col leading-4.5 md:gap-1 items-start'>
                                    <div className='text-blue950 font-bold text-[15px] md:text-[17px]'>Online Service</div>
                                    <div className='text-grey500 text-[13px] md:text-sm'>Access to multiplayer games</div>
                                </div>
                            </div>     
                            <div className='text-[13px] font-medium text-purple600 md:text-sm'>{isOn ? '+$10/yr' : '+$1/mo'}</div>
                        </div>
                        <div className={`flex items-center gap-4 place-content-between border border-purple200 w-full p-3 md:p-5.5 md:pt-4.5 md:pb-4.5 rounded-lg ${checked ? 'border-purple600 bg-blue50' : 'border-purple200' }`}>
                            <div className='flex items-center gap-3.5 md:gap-5.5'>
                                <div className={`flex items-center justify-center border border-purple200 w-5.5 h-5.5 rounded-sm cursor-pointer ${checked ? 'bg-purple600' : 'bg-white' }`} onClick={() => setChecked(!checked)}>
                                    {checked && <span><img src={checkmark} alt="checked-icon" /></span> }
                                </div>
                                <div className='flex flex-col leading-4.5 md:gap-1 items-start'>
                                    <div className='text-blue950 font-bold text-[15px] md:text-[17px]'>Larger Storage</div>
                                    <div className='text-grey500 text-[13px] md:text-sm'>Extra 1TB of cloud save</div>
                                </div> 
                            </div>
                            <div className='text-[13px] font-medium text-purple600'>{isOn ? '+$20/yr' : '+$2/mo'}</div>
                        </div>
                        <div className={`flex items-center gap-4 place-content-between border border-purple200 w-full p-3 md:p-5.5 md:pt-4.5 md:pb-4.5 rounded-lg ${checked ? 'border-purple600 bg-blue50' : 'border-purple200' }`}>
                            <div className='flex items-center gap-3.5 md:gap-5.5'>
                                <div className={`flex items-center justify-center border border-purple200 w-5.5 h-5.5 rounded-sm cursor-pointer ${checked ? 'bg-purple600' : 'bg-white' }`} onClick={() => setChecked(!checked)}>
                                    {checked && <span><img src={checkmark} alt="checked-icon" /></span> }
                                </div>
                                <div className='flex flex-col leading-4.5 md:gap-1 items-start'>
                                    <div className='text-blue950 font-bold text-[15px] md:text-[17px]'>Customizable profile</div>
                                    <div className='text-grey500 text-[12.5px] md:text-sm'>Custom theme on your profile</div>
                                </div>
                            </div>
                            <div className='text-[13px] font-medium text-purple600'>{isOn ? '+$20/yr' : '+$2/mo'}</div>
                        </div>

                    </div>
                </div>
                <div className="flex items-center place-content-between md:pl-25 bg-white w-full p-4 md:p-0 md:pr-25 fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto ">
                    <div className='cursor-pointer text-grey500 text-sm hover:text-blue950 font-medium md:text-base' onClick={() => setStep(2)}>Go back</div>
                    <button type="button" className=" hover:bg-blue300 bg-blue950 text-white text-sm p-3 md:pl-6 md:pr-6 rounded-md md:text-base cursor-pointer">Next Step</button>
                </div>
            </div>
        </>
    )
}

export default AddOns;