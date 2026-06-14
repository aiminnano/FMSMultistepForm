function PersonalInfo() {
    return(
        <>
            <div className="flex flex-col gap-30 md:gap-15">
                <div className="relative z-1 flex flex-col items-start shadow-2xl md:shadow-none rounded-xl gap-5 md:gap-10 w-full max-w-[768px] p-6 pt-8 pb-8 md:p-10 md:pl-25 md:pr-25 md:max-w-[643px] bg-white">
                    <div className="flex flex-col items-start gap-2 md:gap-1">
                        <h1 className="text-2xl md:text-[33px] font-bold text-blue950">Personal Info</h1>
                        <p className="text-grey500">Please provide your name, email address, and phone number.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:gap-6.5 w-full text-blue950">
                        <div className="flex flex-col items-start gap-1 w-full">
                            <div className="text-xs md:text-sm font-medium">Name</div>
                            <input type="text" className="w-full p-2 md:p-2.5 pl-4 border border-purple200 rounded-md focus:border-purple600 focus:ring-1 outline-none " placeholder="e.g. Stephen King" />
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                            <div className="text-xs md:text-sm font-medium">Email Address</div>
                            <input type="text" className="w-full p-2 md:p-2.5 pl-4 border-1 border-purple200 rounded-md focus:border-purple600 focus:ring-1 outline-none" placeholder="e.g. stephenking@lorem.com" />
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                            <div className="text-xs md:text-sm font-medium">Phone Number</div>
                            <input type="text" className="w-full p-2 md:p-2.5 pl-4 border-1 border-purple200 rounded-md focus:border-purple600 focus:ring-1 outline-none" placeholder="e.g. +1 234 567 890" />
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full p-4 md:p-0 md:pr-24 fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto flex justify-end">
                    <button type="button" className="bg-blue950 text-white text-sm p-3 rounded-sm">Next Step</button>
                </div>
            </div>

           
        </>
    )
}



export default PersonalInfo;