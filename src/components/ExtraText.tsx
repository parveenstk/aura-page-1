import Text from "./Text";

function ExtraText({ data }: { data: { title: string | string[], style?: string; content: string | string[] } }) {

    return (

        <div>
            {Array.isArray(data.title) && data.title.length ? (
                data.title.map((text, index) => (
                    <div key={index}>
                        <h2 dangerouslySetInnerHTML={{ __html: text }} className={`text-3xl font-bold mb-4 w-fit ${data.style}`}></h2>
                    </div>

                )))
                : (
                    <h2 className={`text-3xl font-bold mb-4 w-fit ${data.style}`} >{data.title}</h2>
                )
            }
            < Text className="mb-16" content={data.content} />
        </div >

    );
}

export default ExtraText;
