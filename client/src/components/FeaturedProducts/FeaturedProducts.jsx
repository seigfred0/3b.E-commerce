import './featuredProducts.scss';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

function FeaturedProducts({type}) {

    // const [data,setData] = useState([])
    // const [products, setProducts] = useState([]);

    // useEffect(()=> {
    //     const apiUrl = import.meta.env.VITE_API_URL;
    //     const apiToken = import.meta.env.VITE_API_TOKEN;
        

    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(apiUrl+`/products?populate=*&[filters][type][$eq]=${type}`, {
    //                 headers: {
    //                     Authorization: "bearer " + apiToken
    //                 }
    //             });
    //             setData(res.data.data)
    //             console.log(res.data.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchData()
    // }, [])

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);


    return(
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                { error ? "Something is wrong" :
                loading ? "loading" : data?.map(item => {
                    return <Card  item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts;