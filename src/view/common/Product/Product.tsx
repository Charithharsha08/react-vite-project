import {ModifyCart} from "../Modify/ModifyCart.tsx";
import type {ProductData} from "../../../Model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

type productProps = {
    data: ProductData
}

const images : Record<string, string>
    = import.meta.glob('../../../assets/product/*', {eager: true,import: 'default'});



export function Product({ data }: productProps) {
    const image = images[`../../../assets/product/${data.image}`];

    const dispatch = useDispatch<AppDispatch>();

    const item = useSelector((state:RootState) => state.cart.items.find(cartItems => cartItems.product.id === data.id));

   // const [isActive, setIsActive] = useState(false);

    function addToCart() {
        dispatch(addItemToCart(data));
       // setIsActive(true);
    }

    return (
        <div className="w-auto h-auto mr-3 mb-3 rounded-xl shadow-md bg-white border border-gray-200 p-2 transition-transform hover:scale-105 cursor-pointer">
            <div className="flex justify-center">
                <img className="h-[180px] w-[180px] object-contain rounded-md" src={image} alt={data.name} />
            </div>
            <div className="flex justify-between items-center mt-2">
                <h3 className="text-[13px] font-semibold text-gray-800">{data.name}</h3>
                <div className="bg-emerald-100 text-emerald-800 text-[11px] px-2 py-[2px] rounded-lg font-medium">
                    {data.price} <small className="text-[8px]">{data.currency}</small>
                </div>
            </div>
            <div className="flex justify-center">

                {
                    item ? (
                       <ModifyCart data={data}></ModifyCart>
                    ) : (
                        <button
                            className="mt-2 w-full py-[4px] bg-emerald-600 hover:bg-emerald-700 text-white text-[9px] font-semibold rounded-md transition-colors"
                            onClick={addToCart}>
                            Add to Cart
                        </button>
                    )
                }


            </div>
        </div>
    );
}
