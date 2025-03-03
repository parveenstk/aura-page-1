import { userComments } from "../../data/helper"

function CommentBox() {
    return (
        <div>
            {userComments.map(({ text, img }, index) => (
                <div className="flex flex-col sm:flex sm:flex-row sm:gap-4 items-center bg-[#efefef] p-4 sm:p-8 border border-gray-300 rounded-lg mb-4" key={index}>
                    <img className="w-20" src={img} alt="poster" />

                    <div key={index}>
                        <h1 className="text-[1.8rem] font-semibold">{text.heading}</h1>
                        
                        {Array.isArray(text.content) && text.content.length > 0 ?
                            text.content.map((data, index) => (
                                <p key={index} className="text-xl">{data}</p>
                            ))
                            : (
                                <p className="text-xl">{text.content}</p>
                            )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentBox