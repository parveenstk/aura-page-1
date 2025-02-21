import { GauranteeBox } from "../../data/helper"
import Text from "./Text"

function GuaranteeBox({ className }: { className?: string;}) {
    return (
        <div className={`${className}`} >
            <section className="flex gap-4 items-center bg-[#ffefb1] p-8 rounded-xl border-2 border-yellow-300 shadow-2xl">
                <img className="w-[8.2rem]" src="/images/guarantee.png" alt="Gaurantee-Logo" />
                <div>
                    <Text innerClassName="text-[26px] font-bold leading-[1.9rem]" margin={false} content={GauranteeBox} />
                    <button className="py-2 px-6 bg-red-600 text-white text-2xl cursor-pointer font-semibold rounded-lg mt-3">Get Started Today</button>
                </div>
            </section>
        </div>
    )
}

export default GuaranteeBox