function FinishingUp({step, setStep, option, setOption, plan, setPlan, isOn, onlineService, setOnlineService, largerStorage, setLargerStorage, customProfile, setCustomProfile, totalPerMonth, totalPerYear, optionValuePM, optionValuePY}){
    const labels = {arcade: 'Arcade', advanced: 'Advanced', pro: 'Pro'}
    return(
        <>
            <div className={`${step === 4 ? 'flex' : 'hidden'} flex-col gap-30 md:gap-20 w-full`}>
                <div className=" z-1 flex flex-col items-start shadow-2xl md:shadow-none rounded-xl gap-5 md:gap-6 w-full max-w-[768px] p-6 pt-8 pb-8 md:p-10 md:pl-25 md:pr-25 md:max-w-[643px] bg-white">
                    <div className="flex flex-col items-start gap-2 md:gap-1">
                        <h1 className="text-2xl md:text-[33px] font-bold text-blue950">Finishing up</h1>
                        <p className="text-grey500">Double-check everything looks OK before confirming.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:gap-3 w-full text-blue950 bg-blue50 p-4 rounded-lg md:p-5 md:mt-3">
                        <div className="flex items-center place-content-between w-full pb-3 border-b-1 border-purple200 md:pb-6">
                            <div>
                                <div className="font-medium text-sm md:text-[17px] text-blue950">{labels[option]} {isOn ? '(Yearly)' : '(Monthly)'}</div>
                                <div className="text-grey500 underline text-sm font-medium cursor-pointer hover:text-purple600 hover:font-semibold">Change</div>
                            </div>
                            <div className="text-blue950 font-bold">{isOn ? `$${optionValuePY}/yr` : `$${optionValuePM}/mo`}</div>
                        </div>
                        {onlineService && <div className="flex items-center place-content-between w-full md:pt-1">
                            <div>   
                                <div className="text-grey500 text-[15px] ">Online service</div>
                            </div>
                            <div className="text-blue950">{isOn ? '+$10/yr' : '+$1/mo'}</div>
                            
                        </div>}
                        {largerStorage && <div className="flex items-center place-content-between w-full ">
                            <div>    
                                <div className="text-grey500 text-[15px] ">Larger storage</div>
                            </div>
                            <div className="text-blue950 ">{isOn ? '+$20/yr' : '+$2/mo'}</div>
                        </div>}
                        {customProfile && <div className="flex items-center place-content-between w-full ">
                            <div>    
                                <div className="text-grey500 text-[15px] ">Customizable Profile</div>
                            </div>
                            <div className="text-blue950 ">{isOn ? '+$20/yr' : '+$2/mo'}</div>
                        </div>}
                    </div>
                    <div className="flex items-center place-content-between w-full p-4 pb-0 pt-0">
                        <div className="text-grey500 text-[15px]">Total (per month)</div>
                        <div className="text-purple600 font-bold text-xl">${isOn ? `${totalPerYear}/yr` : `${totalPerMonth}/mo`}</div>
                    </div>
                </div>
                <div className="z-2 flex items-center place-content-between md:pl-25 bg-white w-full p-4 md:p-0 md:pr-25 fixed bottom-0 left-0 right-0 md:absolute md:bottom-8 md:left-auto md:right-auto md:max-w-[648px] ">
                    <div className='cursor-pointer text-grey500 text-sm hover:text-blue950 font-medium md:text-base' onClick={() => setStep(3)}>Go back</div>
                    <button type="button" className=" hover:bg-blue300 bg-blue950 text-white text-sm p-3 md:pl-6 md:pr-6 rounded-md md:text-base cursor-pointer md:bg-purple600" onClick={() => setStep(5)}>Confirm</button>
                </div>
            </div>
        </>
    )
}

export default FinishingUp;