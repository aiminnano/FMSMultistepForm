import PersonalInfo from "./PersonalInfo";
import Steps from "./Steps";
import SelectPlan from "./SelectPlan";

function Container() {
    return (
        <>
            <div className="relative grid md:place-items-center min-h-screen font-ubuntu box-border">
                <div className=" flex flex-col md:flex-row items-center md:items-start px-4 rounded-2xl bg-blue100 md:bg-white md:p-4.5 md:pr-0 w-full max-w-[940px] md:shadow-xl">
                    <Steps />
                    <PersonalInfo />
                    <SelectPlan />
                </div>
            </div>
        </>
    )
}

export default Container;