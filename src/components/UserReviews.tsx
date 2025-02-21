import { userReviwsData } from "../../data/helper"

function UserReviews() {
    return (

        <>
            <h1 className="text-4xl font-bold text-center py-4">What They’re Saying</h1>
            {userReviwsData.map((data, index) =>
                <div className="flex gap-6 items-center py-8 px-10 rounded-lg bg-[#ebf0fe] mb-6 border border-blue-200" key={index}>
                    {/* Left */}
                    <div className="w-[40%]">
                        {data.left.img && (
                            <img src={data.left.img} alt="" />
                        )}
                        <h1 className="text-xl font-semibold">{data.left.text.heading}</h1>
                    </div>

                    {/* Right */}
                    <div className="border-l-5 border-gray-600">
                        <h1 className="pl-6 text-xl font-semibold">{data.right.text.heading}</h1>
                        <p className="pl-6 text-balance text-xl">{data.right.text.content}</p>
                        <p className="pl-6 text-[#ffba13] text-2xl">★★★★★</p>
                    </div>
                </div>)}
        </>
    )
}

export default UserReviews