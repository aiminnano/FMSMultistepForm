import { useState } from 'react'

function PersonalInfo() {
    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    const validate = () => {
        const newErrors = {}
        
        if(!name) newErrors.name = 'This field is required'
        if(!email) newErrors.email = 'This field is required'
        else if (!emailRegex.test(email)) newErrors.email = 'Invalid email'
        if(!phone) newErrors.phone = 'This field is required'

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;

    }

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
                            <div className="flex place-content-between w-full">
                                <div className="text-xs md:text-sm font-medium">Name</div>
                                {errors.name && <div className="text-xs md:text-sm font-bold text-red500 ">{errors.name}</div>}
                            </div>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`w-full p-2 md:p-2.5 pl-4 border border-purple200 rounded-md focus:border-purple600 focus:ring-1 outline-none " placeholder="e.g. Stephen King ${errors.name ? 'block border-red500' : ''}`} />
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                            <div className="flex place-content-between w-full">
                                <div className="text-xs md:text-sm font-medium">Email Address</div>
                                <div className="hidden text-xs md:text-sm font-bold text-red500">This field is required</div>
                                {errors.email && <div className="text-xs md:text-sm font-bold text-red500 ">{errors.email}</div>}
                            </div>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full p-2 md:p-2.5 pl-4 border-1 border-purple200 rounded-md focus:border-purple600 focus:ring-1 outline-none" placeholder="e.g. stephenking@lorem.com ${errors.email ? 'block border-red500' : '' }`} />
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full">
                            <div className="flex place-content-between w-full">
                                <div className="text-xs md:text-sm font-medium">Phone Number</div>
                                {errors.phone && <div className="text-xs md:text-sm font-bold text-red500">{errors.phone}</div>}
                            </div>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={`w-full p-2 md:p-2.5 pl-4 border-1 border-purple200 rounded-md focus:border-purple600 focus:ring-1 outline-none" placeholder="e.g. +1 234 567 890 ${errors.phone ? 'block border-red500' : '' }`} />
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full p-4 md:p-0 md:pr-25 fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto flex justify-end">
                    <button type="button" className="cursor-pointer bg-blue950 text-white text-sm p-3 md:pl-6 md:pr-6 rounded-md md:text-base hover:bg-blue300" onClick={validate}>Next Step</button>
                </div>
            </div>

           
        </>
    )
}



export default PersonalInfo;