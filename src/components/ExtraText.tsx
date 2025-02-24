import Text from "./Text";

function ExtraText({ data }: { data: { title: string | string[], style?: string; text?: string; content: string | string[] } }) {

    return (

        <div>
            {Array.isArray(data.title) && data.title.length ? (
                data.title.map((text, index) => (
                    <div className=" grid place-content-center sm:block" key={index}>
                        <h2 dangerouslySetInnerHTML={{ __html: text }} className={`sm:text-6xl text-3xl leading-[70%] sm:leading-12 font-bold mb-4 w-fit ${data.style}`}></h2>
                    </div>

                )))
                : (
                    <h2 className={`${data.text ? data.text : 'text-3xl' } sm:text-4xl font-bold mb-4 w-fit ${data.style}`} >{data.title}</h2>
                )
            }
            < Text className="mb-16" content={data.content} />
        </div >

        

    );
}

export default ExtraText;
