import { GauranteeBox } from "../../data/helper"
import Text from "./Text"

function GuaranteeBox({ className }: { className?: string;}) {
    return (
        <div className={`${className}`} >
            <section className="sm:flex sm:flex-row flex flex-col sm:gap-4 gap-1 items-center bg-[#ffefb1] p-4 sm:p-8 rounded-xl border-2 border-yellow-300 shadow-2xl">
                <img className="sm:w-[8.2rem] w-[4.2rem]" src="/images/guarantee.webp" alt="Gaurantee-Logo" />
                <div>
                    <Text innerClassName="text-[26px] font-bold sm:leading-[1.9rem] leading-[1.7rem]" margin={false} content={GauranteeBox} />
                    <button className="py-2 px-6 bg-red-600 text-white text-2xl cursor-pointer font-semibold rounded-lg mt-3">Get Started Today</button>
                </div>
            </section>
        </div>
    )
}

export default GuaranteeBox