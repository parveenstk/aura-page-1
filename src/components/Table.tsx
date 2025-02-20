import { tableData, contentData } from "../../data/helper";
import Text from "./Text";

function Table() {
    return (
        <>
            <table className="table-auto border-collapse w-full">
                <tbody className="block bg-[#fafafa] px-[20px] pt-[60px] pb-[30px]">
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="flex border-b font-semibold text-base">
                            {row.map((data, colIndex) => (
                                typeof (data) === 'string' ? (
                                    <td key={colIndex} className={`p-3 w-1/4 flex items-center ${colIndex > 0 ? 'justify-center' : 'justify-start'} ${colIndex === 1 && 'bg-[#fff]'}`}>
                                        {data}
                                    </td>
                                ) : (
                                    <td key={colIndex} className={`p-3 w-1/4 flex flex-col justify-center ${colIndex > 0 ? 'items-center' : 'items-start'} ${colIndex === 1 && 'bg-[#fff]'}`}>
                                        {data.img && (
                                            <img src={data.img.path} alt={data.img.path} className={data.img.style} />
                                        )}
                                        {data.text && (
                                            <div>
                                                {Array.isArray(data.text) && data.text.length > 0 ? (
                                                    data.text.map((text, i) => (
                                                        <p className="text-center text-sm" key={i}>{text}</p>
                                                    ))
                                                ) : (
                                                    <p className="text-center text-sm" key={colIndex}>{data.text}</p>
                                                )}
                                            </div>

                                        )}
                                    </td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="text-5xl font-bold mt-10 mb-6">Without Aura... <br/>There could be hell to pay</h1>
            <Text margin={false} content={contentData} />
        </>
    );
}

export default Table;
