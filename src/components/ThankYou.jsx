import thankyou from '../../assets/images/icon-thank-you.svg'

function ThankYou(){
    return(
        <>
            <div className="flex flex-col gap-30 md:gap-20 w-full">
                <div className="relative z-1 flex flex-col items-start shadow-2xl md:shadow-none rounded-xl gap-5 md:gap-6 w-full max-w-[768px] p-5 pt-8 pb-8 md:p-10 md:pl-25 md:pr-25 md:max-w-[643px] bg-white">
                    <div className="flex flex-col items-center gap-2 text-center mt-11 mb-11 md:gap-1">
                        <img src={thankyou} className='w-13.5 h-13.5 mb-4' alt="check-icon" />
                        <h1 className="text-2xl md:text-[33px] font-bold text-blue950">Thank you!</h1>
                        <p className="text-grey500 text-[16.5px]">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;