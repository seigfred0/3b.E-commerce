import React, { useState } from 'react'
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import './products.scss'
import useFetch from '../../hooks/useFetch';
const Products = () => {

    const categId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectedSubCateg, setSelectedSubCateg] = useState([])

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${categId}`)

    console.log(data)

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCateg(
            isChecked ? [...selectedSubCateg, value]
            : selectedSubCateg.filter((item) => item !== value)
        )
    }

    console.log(selectedSubCateg)

  return (
    <div className="products">
        <div className="left">
            <div className="filterItem">
                <h2>Product Categories</h2>
                {data?.map((item) => {
                    return(
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    )
                })}
  
            </div>
            <div className="filterItem">
                <h2>Filter by price</h2>
                <div className="inputItem">
                    <span>0</span>  
                    <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>  
                    <span>{maxPrice}</span>
                </div>
            </div>
            <div className="filterItem">
                <h2>Sort by</h2>    
                <div className="inputItem">
                    <input type="radio" name="price" id="asc" value='asc' onChange={e=> setSort("asc")}/>
                    <label htmlFor="asc">Price (Lowest First)</label>   
                </div>
                <div className="inputItem">
                    <input type="radio" name="price" id="desc" value='desc' onChange={e=> setSort("desc")}/>
                    <label htmlFor="desc">Price (Highest First)</label>   
                </div>
            </div>
        </div>
        <div className="right">
            <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            />
            <List categId={categId} maxPrice={maxPrice} sort={sort} subCategory={selectedSubCateg}/>
      </div>
    </div>
  )
}


export default Products;