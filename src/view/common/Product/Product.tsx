
type productData = {
    id: number,
    name: string,
    description: string,
    price: string,
    currency: string,
    imageUrl: string
}
type productProps = {
    data: productData
}

const images : Record<string, string>
    = import.meta.glob('../../../assets/product/*', {eager: true,import: 'default'});



export function Product({data}: productProps) {
    console.log(images)
    return (
        <>

            <div className="w-28 h-32 mr-2 mb-2 justify-center items-center
                               border-gray-500 border-[0.5px]">
                <div>
                    <img className="h-[88px] w-[88px]" src={images[data.imageUrl]} alt=""/>
                </div>
                <div className="flex">
                    <div>
                        <h3 className="text-[#1f9e4b]
                                          text-[12px] pl-2">
                            {data.name}</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                        <h3 className="text-[12px] pl-1">{data.price} <small className="text-[7px]">{data.currency}</small></h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[8px] text-white border-gray-500 border-[0.5px]">Add
                        to Cart
                    </button>
                </div>
            </div>

        </>
    );
}