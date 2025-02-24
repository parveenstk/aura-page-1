import { useState } from "react";
import { faq } from "../../data/helper";


export default function IdentityTheftInfo() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {faq.map((data, index) => (
                <div key={index} className="mb-4">
                    <button className="rounded-t-lg w-full py-3 text-2xl text-white font-bold bg-[#bd9e26] text-left pl-6 cursor-pointer"
                        onClick={() => setActiveIndex(index)}>
                        {data.heading}
                    </button>

                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden 
                        ${activeIndex === index ? "max-h-96 opacity-100 p-6" : "max-h-0 opacity-0 p-0"} bg-gray-200 text-xl font-normal rounded-b-lg`}>

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
