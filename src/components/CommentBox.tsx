import { userComments } from "../../data/helper"

function CommentBox() {
    return (
        <>
           {userComments.map((data, index) => (
            <div key={index}>
                <p>{data[0].img}</p>
                <p>{data[0].text.heading}</p>
            </div>
           ))}
            <div>Hello</div>
        </>
    )
}

export default CommentBox