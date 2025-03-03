import axios from "axios";
import { useEffect, useState } from "react";
import { boxData, data } from "../../data/helper";
import CommentBox from "./CommentBox";
import ExtraText from "./ExtraText";
import Table from "./Table";
import Text from "./Text";
import YellowBox from "./YellowBox";
import GuaranteeBox from "./GuaranteeBox";
import UserReviews from "./UserReviews";
import GuaranteeTag from "./GuaranteeTag";

interface TextContent { title: string | string[], style?: string; content: string | string[] }

function Body() {
    const [textContent, setTextContent] = useState<TextContent[]>([{
        title: '',
        style: '',
        content: '',
    }])
    useEffect(() => {
        axios('/data.json').then(result => setTextContent(result.data));
    }, [])

    return (
        <div className="text-center sm:text-start">
            <div className="flex justify-center gap-6">
                <div className="">
                    <img src="./images/0.jpg" alt="picutre-1" className="object-cover" />
                    <p className="bg-zinc-200 text-[12px] md:text-lg p-2 text-center block-inline">"It ruined my life and took me forever to recover. Never thought it would happen to me..."</p>
                </div>
            </div>
            <div>
                <div className="mt-8 sm:mb-20 mb-6 text-center sm:text-start">
                    <Text content={data.para0} />
                </div>

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/1.jpg" alt="poster-1" className="sm:w-1/2 h-64" />
                    <div className="sm:w-1/2">
                        <Text content={data.para1} />
                    </div>
                </div>
                <div className="w-full grid sm:block place-content-center ">
                    <YellowBox content={boxData.box1} />
                </div>


                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <div className="sm:w-1/2">
                        <Text content={data.para2} />
                    </div>
                    <img src="/images/2.jpg" alt="poster-2" className="sm:w-1/2 h-64" />
                </div>
                <div className="w-full grid sm:block place-content-center">
                    <YellowBox content={boxData.box2} />
                </div>


                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/3.jpg" alt="poster-3" className="sm:w-1/2 h-64" />
                    <div className="sm:w-1/2">
                        <Text content={data.para3} />
                    </div>
                </div>
                <div className="w-full grid sm:block place-content-center">
                    <YellowBox content={boxData.box3} />
                </div>

                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <div className="sm:w-1/2">
                        <Text content={data.para4} />
                    </div>
                    <img src="/images/4.jpg" alt="poster-4" className="sm:w-1/2 h-64" />
                </div>
                <div className="w-full grid sm:block place-content-center">
                    <YellowBox content={boxData.box4} />
                </div>

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/5.jpg" alt="poster-5" className="sm:w-1/2 h-64" />
                    <div className="sm:w-1/2">
                        <Text content={data.para5} />
                    </div>
                </div>
                <div className="w-full grid sm:block place-content-center">
                    <YellowBox content={boxData.box5} />
                </div>

                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <div className="sm:w-1/2">
                        <Text content={data.para6} />
                    </div>
                    <img src="/images/6.jpg" alt="poster-6" className="sm:w-1/2 h-80" />
                </div>
                <div className="w-full grid sm:block place-content-center">
                    <YellowBox content={boxData.box6} />
                </div>

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/7.jpg" alt="poster-7" className="sm:w-1/2 h-90" />
                    <div className="sm:w-1/2">
                        <Text content={data.para7} />
                    </div>
                </div>
                <div className="w-full grid sm:block place-content-center">
                    <YellowBox content={boxData.box7} />
                </div>

                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <div className="sm:w-1/2">
                        <Text content={data.para8} />
                    </div>
                    <img src="/images/8.jpg" alt="poster-8" className="sm:w-1/2 h-64" />
                </div>
                <div className="w-full grid sm:block place-content-center">
                    <YellowBox content={boxData.box8} />
                </div>

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start mb-16">
                    <img src="/images/9.jpg" alt="poster-9" className="sm:w-1/2 h-100" />
                    <div className="sm:w-1/2">
                        <Text content={data.para9} />
                    </div>
                </div>
                {Object.values(textContent).map((text, index) => (
                    <ExtraText key={index} data={text} />
                ))}
                <Table />
                <CommentBox />
                <GuaranteeBox className="py-4" />
                <UserReviews />
                <GuaranteeBox className="py-4" />
                <GuaranteeTag />
                <GuaranteeBox className="py-4" />
            </div>

        </div>
    )
}

export default Body