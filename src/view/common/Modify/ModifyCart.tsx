import type {CartItem} from "../../../Model/CartItems.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";

interface ModifyCartProps {
    data?:any
}
export const itemList: CartItem[] = []
export function ModifyCart({data}: ModifyCartProps) {
    const dispatch = useDispatch<AppDispatch>();

    //const [itemCount, setItemCount] = useState(1)

    const item = useSelector((state: RootState) =>state.cart.items.find(cartItems => cartItems.product.id === data.id))

   /* useEffect(() => {

         const  existingItem = itemList.find(item => item.product.id === data.product.id)

         if (existingItem) {
             existingItem.itemCount = itemCount
         }else {
             itemList.push({
                 product: data.product,
                 itemCount: itemCount
             })
         }
     }, [itemCount,data])*/




    console.log(itemList)

    function increaseItemCount() {
       // setItemCount(prevValue => prevValue + 1)
        dispatch(increaseQuantity(data.id));
    }

    function decreaseItemCount() {
        /*        setItemCount(prevValue => prevValue > 1 ? prevValue - 1
                    : (alert('Quantity cannot be less than 1'), prevValue))
            */
        if (item && item.itemCount < 0) {
       // setItemCount((prevValue) => prevValue - 1);
        dispatch(decreaseQuantity(data.id));
        }else {
            alert('Quantity cannot be less than 1')
        }
    }

    return (
        <div className="w-full mt-1 px-2 py-1 text-xs text-center bg-blue-400 rounded-lg h-7 flex items-center justify-between">
            <button
                className="cursor-pointer text-base bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md w-5 h-5 flex items-center justify-center"
                onClick={decreaseItemCount}
            >
                –
            </button>
            <span className="text-sm font-semibold ">{item?.itemCount}</span>
            <button
                className="cursor-pointer text-base bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md w-5 h-5 flex items-center justify-center"
                onClick={increaseItemCount}
            >
                +
            </button>
        </div>
    )
}