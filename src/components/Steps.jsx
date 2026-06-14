import sidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import sidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'

function Steps() {
    return (
        <>
            <div className='md:relative w-full md:max-w-[274px] md:h-[568px]'>
                <img src={sidebarDesktop} className='hidden md:block absolute z-0' alt="sidebar-desktop" />
                <img src={sidebarMobile} className=' md:hidden left-1/2 -translate-x-1/2 absolute z-0 w-full' alt="sidebar-mobile" />
                <div className='relative z-2 flex md:flex-col justify-center md:items-start gap-4 md:gap-7 w-full p-8 md:p-8 md:pt-9.5'>
                    

                    <div className=' flex md:gap-4 text-white md:w-full'>
                        <div className=' w-8.5 h-8.5 flex items-center justify-center rounded-full border-1 border-blue300 font-bold text-sm bg-blue200 text-blue950'>1</div>
                        <div className='hidden md:flex flex-col items-start justify-center'>
                            <div className='font-normal text-blue300 text-xs'>STEP 1</div>
                            <div className='font-medium tracking-widest text-[14px] leading-[1.5]'>YOUR INFO</div>
                        </div>
                    </div>
                    <div className=' flex md:gap-4 text-white md:w-full'>
                        <div className=' w-8.5 h-8.5 flex items-center justify-center rounded-full border-1 border-white font-bold text-sm'>2</div>
                        <div className='hidden md:flex flex-col items-start justify-center'>
                            <div className='font-normal text-blue300 text-xs'>STEP 2</div>
                            <div className='font-medium tracking-widest text-[14px] leading-[1.5]'>SELECT PLAN</div>
                        </div>
                    </div>
                    <div className=' flex md:gap-4 text-white md:w-full'>
                        <div className=' w-8.5 h-8.5 flex items-center justify-center rounded-full border-1 border-white font-bold text-sm'>3</div>
                        <div className='hidden md:flex flex-col items-start justify-center'>
                            <div className='font-normal text-blue300 text-xs'>STEP 3</div>
                            <div className='font-medium tracking-widest text-[14px] leading-[1.5]'>ADD-ONS</div>
                        </div>
                    </div>
                    <div className=' flex md:gap-4 text-white md:w-full'>
                        <div className=' w-8.5 h-8.5 flex items-center justify-center rounded-full border-1 border-white font-bold text-sm'>4</div>
                        <div className='hidden md:flex flex-col items-start justify-center'>
                            <div className='font-normal text-blue300 text-xs'>STEP 4</div>
                            <div className='font-medium tracking-widest text-[14px] leading-[1.5]'>SUMMARY</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps;