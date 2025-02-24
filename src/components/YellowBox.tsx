function YellowBox({ content }: { content: string | string[] }) {
    return (
        <div className="bg-[#fff643] text-center italic p-4 border my-4 sm:my-10 w-fit md:w-full">
            {Array.isArray(content) && content.length ? (
                content.map((text, index) => (
                    <div key={index}>
                        <p dangerouslySetInnerHTML={{ __html: text }} className="text-lg leading-5.5"></p>
                    </div>
                )))
                : (
                    <p>{content}</p>
                )
            }
        </div>
    )
}

export default YellowBox