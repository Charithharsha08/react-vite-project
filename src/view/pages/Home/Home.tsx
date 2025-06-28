
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProduct} from "../../../slices/productsSlice.ts";
import {useEffect} from "react";


export function Home() {

    const dispatch = useDispatch<AppDispatch>();   // Importing useDispatch to potentially use it later for dispatching actions
    const {list} = useSelector((state:RootState) => state.products); // Using useSelector to access the products state from the Redux store


  //   const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(()=>{
       /* const  fetchData = async () => {
            try {
                const response = await fetch('./product-data.json')
                const jsonData = await response.json()
                // console.log(jsonData)
                setProducts(jsonData)
                console.log(products)
            }catch (e) {
                console.error('Error fetching data',e)
            }
        }
        fetchData();*/

        dispatch(getAllProduct()); // Dispatching the action to fetch products

    },[])
    return (
        <div className="home-container w-full min-h-screen flex flex-wrap justify-center items-start mt-10 bg-gray-100">
            {list.map((product)=>(
                    <Product key={product.id} data={product}/>
            ))}
        </div>
    );
}
