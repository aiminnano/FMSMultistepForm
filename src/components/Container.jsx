import PersonalInfo from "./PersonalInfo";
import Steps from "./Steps";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import ThankYou from "./ThankYou";
import { useState } from 'react'

function Container() {

    const [step, setStep] = useState(1);
    const [option, setOption] = useState('arcade');
    const [plan, setPlan] = useState('monthly');
    const [isOn, setIsOn] = useState(false);
    const [ onlineService, setOnlineService] = useState(false);
    const [ largerStorage, setLargerStorage] = useState(false);
    const [ customProfile, setCustomProfile] = useState(false);
    const [totalPerMonth, setTotalPerMonth] = useState(0);
    const [totalPerYear, setTotalPerYear] = useState(0);
    const [optionValuePM, setOptionValuePM] = useState(0);
    const [optionValuePY, setOptionValuePY] = useState(0);

    return (
        <>
            <div className="relative grid md:place-items-center min-h-screen font-ubuntu box-border">
                <div className="relative flex flex-col md:flex-row items-center md:items-start px-4 rounded-2xl bg-blue100 md:bg-white md:p-4.5 md:pr-0 w-full max-w-[940px] md:shadow-xl">
                    <Steps step={step} />
                    <PersonalInfo step={step} setStep={setStep} />
                    <SelectPlan step={step} setStep={setStep} option={option} setOption={setOption} plan={plan} setPlan={setPlan} isOn={isOn} setIsOn={setIsOn}/>
                    <AddOns step={step} setStep={setStep} option={option} setOption={setOption} plan={plan} setPlan={setPlan} isOn={isOn} onlineService={onlineService} setOnlineService={setOnlineService} largerStorage={largerStorage} setLargerStorage={setLargerStorage} customProfile={customProfile} setCustomProfile={setCustomProfile} totalPerMonth={totalPerMonth} setTotalPerMonth={setTotalPerMonth} totalPerYear={totalPerYear} setTotalPerYear={setTotalPerYear} optionValuePM={optionValuePM} setOptionValuePM={setOptionValuePM} setOptionValuePY={setOptionValuePY} />
                    <FinishingUp step={step} option={option} setOption={setOption} isOn={isOn} setStep={setStep} onlineService={onlineService} setOnlineService={setOnlineService} largerStorage={largerStorage} setLargerStorage={setLargerStorage} customProfile={customProfile} setCustomProfile={setCustomProfile} totalPerMonth={totalPerMonth} totalPerYear={totalPerYear} optionValuePM={optionValuePM} optionValuePY={optionValuePY}/>
                    <ThankYou step={step} setStep={setStep} />
                </div>
            </div>
        </>
    )
}

export default Container;