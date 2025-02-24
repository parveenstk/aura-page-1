import { links, userReviwsData } from "../../data/helper"

function UserReviews() {
    return (

        <>
            <h1 className="text-4xl font-bold text-center py-10 w-full">What They’re Saying</h1>
            {userReviwsData.map((data, index) =>
                <div className=" flex gap-6 items-center py-8 px-10 rounded-lg bg-[#ebf0fe] mb-6 border border-blue-200" key={index}>
                    {/* Left */}
                    <div className="bg-yellow-300 w-[50%]">
                        {data.left.img && (
                            <img className="w-30" src={data.left.img.path} alt="" />
                        )}
                        <h1 className="text-xl font-semibold">{data.left.text.heading}</h1>
                        <p className="text-sm">{data.left.text.content}</p>
                    </div>

                    {/* Right */}
                    <div className="border-l-5 border-gray-600">
                        <h1 className="pl-6 text-xl font-semibold">{data.right.text.heading}</h1>
                        <p className="pl-6 text-balance text-xl">{data.right.text.content}</p>
                        <p className="pl-6 text-[#ffba13] text-2xl">★★★★★</p>
                    </div>
                </div>)}

            <div className="flex gap-6">
                {Array.isArray(links) && links.length > 0 ? (
                    links.map((data, index) => (
                        <div key={index} className="px-1">
                            <img className="sm:w-48 w-26" key={index} src={data} alt="" />
                        </div>
                    ))
                ) : (
                    <p>No more links available.</p>
                )}
            </div>
        </>
    )
}

export default UserReviews