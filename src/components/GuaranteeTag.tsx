import { useState } from "react";
import { faq } from "../../data/helper";


export default function IdentityTheftInfo() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setActiveIndex((prev: number | null) => {
            if (prev === index) return null;
            else return index;
        });
    }

    return (
        <>
            {faq.map((data, index) => (
                <div key={index} className="mb-2 sm:mb-4">
                    <button className="rounded-t-lg w-full py-3 sm:text-2xl text-xl text-[#ffffff] font-bold bg-[#9e7b1d] text-left pl-6 cursor-pointer"
                        onClick={() => handleToggle(index)}>
                        {data.heading}
                    </button>

                    <div
                        className={`transition-all duration-800 ease-in-out overflow-hidden text-balance
                        ${activeIndex === index ? "max-h-fit opacity-100 p-4 sm:p-6" : "max-h-0 opacity-0 p-0"} bg-gray-200 text-xl font-normal rounded-b-lg`}>

                        {Array.isArray(data.answer) && data.answer.length > 0 ?
                            data.answer.map((text, i) => (
                                <p dangerouslySetInnerHTML={{ __html: text }} className="mb-2" key={i}></p>
                            )) :
                            (<p>{data.answer}</p>)}
                    </div>
                </div>
            )
            )}



        </>
    );
}
