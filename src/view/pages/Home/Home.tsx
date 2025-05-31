
import {useEffect, useState} from "react";
import {Product} from "../../common/Product/Product.tsx";



export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const  fetchData = async () => {
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
        fetchData();
    },[])
    return (
        <div className="home-container w-full min-h-screen flex flex-wrap justify-center items-start mt-10 bg-gray-100">
            {products.map((product)=>(
                    <Product data={product}/>
            ))}
        </div>
    );
}
